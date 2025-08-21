import Container from "@/components/container";

const Marcas = () => {

    const marcas = [
        { logo: '/logos/fran/fran.png' },
        { logo: '/logos/silvana/silvana.png' },
        { logo: '/logos/open/open.png' },
        { logo: '/logos/art/art.png' },
        { logo: '/logos/dp/dp.png' },
        { logo: '/logos/jaqueline/jaqueline.png' },
        { logo: '/logos/visionaire/visionaire.png' },
        { logo: '/logos/haru/haru.png' },
    ]

    return (
        <div className="my-[120px]">
            <Container>
                <h3 className="text-[#61482A] font-bold text-[20px] pb-5">Marcas</h3>
            <div className="grid grid-cols-5 grid-rows-2 gap-y-6 w-full">
  {marcas.map((marca, index) => (
    <div key={index} className="flex justify-center items-center">
      <img
        className="h-[80px] invert-[50%] sepia-[0%] saturate-[0%] hue-rotate-[180deg] brightness-[90%] contrast-[90%]"
        src={marca.logo}
        alt="Logo das marcas"
      />
    </div>
  ))}
</div>


            </Container>
        </div>
    )
}

export default Marcas;