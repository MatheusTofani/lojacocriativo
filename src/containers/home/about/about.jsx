import Container from "@/components/container";
import Image from "next/image";



const About = () => {
    return (
        <section className="mt-[120px] px-4 md:px-0">
            <Container>
                <article className="flex flex-col gap-[30px] items-center text-center">
                    <Image src={"/logos/logoEscrito.png"} width={200} height={200} alt="Logo" />
                    <p className="text-[#61482A] font-regular text-[20px]">
                        10 marcas em uma só loja, o co-criativo é uma loja colaborativa e oferece moda, elegancia e conforto.
                    </p>
                </article>
            </Container>
        </section>
    )
}

export default About;