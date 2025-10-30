import Container from "@/components/container";

const Marcas = () => {
  const marcas = [
    { logo: '/logos/fran/fran.png' },
    { logo: '/logos/silvana/silvana.png' },
    { logo: '/logos/open/open.png' },
    { logo: '/logos/dp/dp.png' },
    { logo: '/logos/jaqueline/jaqueline.png' },
    { logo: '/logos/visionaire/visionaire.png' },
    { logo: '/logos/haru/haru.png' },
    { logo: '/logos/tiza/tiza.png' },
    { logo: '/logos/ritmo/ritmo.jpg' },
  ];

  // Duplicamos a lista para criar o efeito de loop no mobile
  const duplicatedMarcas = [...marcas, ...marcas];

  return (
    <div className="my-[120px] ">
      <Container>
        <h3 className="text-[#61482A] font-bold text-[20px] pb-5 px-4 md:px-0">Marcas</h3>
 </Container>
        {/* Mobile: Slider animado */}
        <div className="md:block overflow-hidden pb-2" role="list" aria-live="polite">
          <div className="flex w-fit animate-slideMobile">
            {duplicatedMarcas.map((marca, index) => (
              <li
                key={index}
                className="flex justify-center items-center min-w-[120px] flex-shrink-0 px-4"
                role="listitem"
              >
                <img
                  className="h-[70px] invert-[50%] sepia-[0%] saturate-[0%] hue-rotate-[180deg] brightness-[90%] contrast-[90%]"
                  src={marca.logo}
                  alt="Logo das marcas"
                />
              </li>
            ))}
          </div>
        </div>

    
     
    </div>
  );
};

export default Marcas;
