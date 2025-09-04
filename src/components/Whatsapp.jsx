import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="p-4 text-[40px] bg-[#25D366] text-[#FDFBFE] rounded-full  hover:bg-[#01D366] transition-colors duration-300 fixed bottom-6 right-6 shadow-lg cursor-pointer">
      <a href="https://wa.me/553192350221" target="_blank" rel="noopener noreferrer" aria-label="Converse pelo WhatsApp">
      <FaWhatsapp />
      </a>
    </div>
  );
};


export default Whatsapp;
