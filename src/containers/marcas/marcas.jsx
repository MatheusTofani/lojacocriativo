import Container from "@/components/container";

const Marcas = () => {

    const marcas = [
        { name: 'Open House Decor', logo: '/logos/open/open.jpg' },
       { name: 'DP Acessórios', logo: '/logos/dp/dp.jpg' },
       { name: 'Jaqueline Braga Ateliê', logo: '/logos/jaqueline/jaqueline.jpg' },
       { name: 'Haru Ateliê', logo: '/logos/haru/haru.jpg' },
    ]

    return (
        <div className="my-[120px]">
            <Container>
                <h3 className="text-[#61482A] font-bold text-[20px] pb-5">Marcas</h3>
            <div className="flex justify-between">
                {marcas.map((marca, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img className="rounded-full border-2 border-[#61482A] h-[120px]" src={marca.logo} alt="" />
                        <h2 className="text-[#61482A] font-semibold  text-[20px]">{marca.name}</h2>
                    </div>
                ))}
            </div>
            </Container>
        </div>
    )
}

export default Marcas;