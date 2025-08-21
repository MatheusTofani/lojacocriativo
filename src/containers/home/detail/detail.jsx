import Container from "@/components/container";
import { FaBoxOpen, FaHammer } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

const Detail = () => {
    const list = [
        {
            name: "Entrega para todo Brasil",
            icon: <FaBoxOpen />,
        },
        {
            name: "Produtos Artesanais",
            icon: <FaHammer />,
        },
        {
            name: "Promoções no PIX",
            icon: <MdOutlineAttachMoney />,
        },
    ];

    // Duplicamos a lista para criar o efeito de loop no mobile
    const duplicatedList = [...list, ...list];

    return (
        <div className="mt-[115px]">
            <Container>
                {/* Mobile: Slider com animação */}
                <div className="block md:hidden overflow-hidden pb-2" role="list" aria-live="polite">
                    <div className="flex w-fit animate-slideMobile">
                        {duplicatedList.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-[#61482A] font-semibold min-w-[220px] flex-shrink-0 px-4"
                                role="listitem"
                            >
                                <div className="rounded-full p-1 bg-[#61482A] text-[#F9F5F3]">
                                    {item.icon}
                                </div>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </div>
                </div>

                {/* Desktop: Lista fixa (mantido igual) */}
                <div className="hidden md:block py-2">
                    <ul className="flex justify-around items-center w-full">
                        {list.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-[#61482A] font-semibold"
                            >
                                <div className="rounded-full p-1 bg-[#61482A] text-[#F9F5F3]">
                                    {item.icon}
                                </div>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Detail;
