import Link from "next/link";

const Card = ({ id, nome, foto, preco }) => {

const slugify = (str) =>
  str
    .toString()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-"); 


  return (
    <div
      className="px-2 flex flex-col justify-between p-4 rounded-xl h-auto"
      key={id}
    >
      <div>
        <img
          src={foto}
          className="w-full h-[250px] object-cover rounded-md mb-4"
          alt={nome}
        />
        <p className="font-semibold text-[#61482A] text-center mb-2 h-12 overflow-hidden">
          {nome}
        </p>
        <p className="text-center mb-4">
          <span className="line-through mr-2 text-[#61485C]">
            R$ {Number(preco * 1.1).toFixed(2)}
          </span>
          <span className="font-bold text-[20px] text-[#61482A]">
            R$ {Number(preco).toFixed(2)}
          </span>
        </p>
      </div>
       <Link href={`/catalogo/${slugify(nome)}`}>
      <button className="w-full bg-[#8D402C] py-2 text-[#F9F5F3] rounded hover:bg-[#a54a33] transition duration-200 cursor-pointer">
       
          Ver mais
       
      </button>
       </Link>
    </div>
  );
};

export default Card;
