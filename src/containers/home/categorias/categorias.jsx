import Image from "next/image";

const { default: Container } = require("@/components/container")

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
    ]

    return (
        <section className="">
            <Container className={"flex justify-between"}>
                {categoria.map((cat, index) => (
                    <article className="relative w-[400px] h-[400px] flex items-center justify-center text-white text-[20px] font-semibold p-3" key={index}>
                        <span className="w-full h-full bg-[#000000af] absolute top-0 left-0 z-[-1] rounded-[20px]"></span>
                        <Image width={400} height={400} className="object-cover absolute w-full h-full top-0 left-0 z-[-2] rounded-[20px]" src={cat.image} alt="" />
                        {cat.name}
                    </article>
                ))}
            </Container>
        </section>
    )
}

export default Categorias;