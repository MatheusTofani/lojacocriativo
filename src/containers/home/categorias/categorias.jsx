import Image from "next/image";
const { default: Container } = require("@/components/container");

const Categorias = () => {
    const categoria = [
        {
            name: "DECORAÇÃO E ARTESANATO",
            image: "/categorias/aromas.jpg",
        },
        {
            name: "MODA E ACESSÓRIOS",
            image: "/categorias/moda.jpg",
        },
        {
            name: "AROMAS E VELAS",
            image: "/categorias/casa.jpg",
        },
    ];

    return (
        <section className="py-10">
            <Container className={"px-4 md:px-0"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.map((cat, index) => (
                        <article
                            key={index}
                            className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-semibold p-3 rounded-[20px] overflow-hidden"
                        >
                            {/* Overlay */}
                            <span className="absolute w-full h-full bg-black/50 top-0 left-0 z-[1] rounded-[20px]" />

                            {/* Imagem */}
                            <Image
                                width={400}
                                height={400}
                                className="object-cover absolute w-full h-full top-0 left-0 z-0 rounded-[20px]"
                                src={cat.image}
                                alt={cat.name}
                                priority
                            />

                            {/* Texto */}
                            <span className="relative z-[2] text-center px-2">{cat.name}</span>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Categorias;
