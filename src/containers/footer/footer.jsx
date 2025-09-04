import Container from "@/components/container";
import navs from "@/data/nav";
import { IoMdPin } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const address = [
        {
            name: (
                <address className="not-italic">
                    Rua Vitório Marçola, 203 - Anchieta, Belo Horizonte - MG, 30310-360
                </address>
            ),
            icon: <IoMdPin size={24} aria-hidden="true" />,
        },
        {
            name: "(31) 99235-0221 | (31) 99513-1981",
            icon: <BsTelephoneFill size={20} aria-hidden="true" />,
        },
    ];

    const redes = [
        {
            href: "https://wa.me/553192350221",
            icon: <FaWhatsapp size={22} />,
            label: "WhatsApp Co-Criativo",
        },
        {
            href: "https://www.instagram.com/cocriativo.loja/?hl=en",
            icon: <FaInstagram size={22} />,
            label: "Instagram Co-Criativo",
        },
    ];

    return (
        <footer className="bg-[#61482A] text-white">
            <Container className="flex flex-col w-full py-8 px-4 md:px-0">
                {/* Conteúdo principal */}
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 w-full items-center md:items-start text-center md:text-left">
                    {/* Endereço */}
                    <ul className="flex flex-col gap-3 md:w-[35%]">
                        <li className="font-semibold text-lg">Endereço</li>
                        {address.map((nav, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center md:justify-start gap-2 text-sm leading-relaxed"
                            >
                                {nav.icon} {nav.name}
                            </li>
                        ))}
                    </ul>

                    {/* Navegação */}
                    <ul className="flex flex-col gap-3 md:w-[25%]">
                        <li className="font-semibold text-lg">Navegação</li>
                        {navs.map((nav, index) => (
                            <li key={index}>
                                <a
                                    href={nav.href}
                                    className="hover:underline transition-all"
                                    title={`Ir para ${nav.name}`}
                                >
                                    {nav.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/termos-e-privacidade"
                                className="hover:underline transition-all"
                                title="Termos e Privacidade"
                            >
                                Termos e Privacidade
                            </a>
                        </li>
                    </ul>

                    {/* Contato */}
                    <ul className="flex flex-col gap-3 md:w-[20%]">
                        <li className="font-semibold text-lg">Entre em contato</li>
                        <li className="flex gap-5 justify-center md:justify-start">
                            {redes.map((nav, index) => (
                                <a
                                    key={index}
                                    href={nav.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={nav.label}
                                    title={nav.label}
                                    className="hover:scale-110 transition-transform"
                                >
                                    {nav.icon}
                                </a>
                            ))}
                        </li>
                    </ul>
                </div>

                {/* Direitos autorais */}
                <p className="text-center text-sm mt-6 border-t border-white/20 pt-4">
                    © 2025 Co-Criativo. Todos os direitos reservados.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
