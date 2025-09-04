"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useProdutosStore } from "@/store/useProdutosStore";
import Container from "@/components/container";
import Promo from "@/containers/promo/promo";
import Header from "@/containers/header/header";
import Footer from "@/containers/footer/footer";
import ClientLoader from "@/components/clientLoader";

const slugify = (str) =>
  str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-");

export default function ProdutoDetalhe() {
  const { nome } = useParams();
  const { produtos, fetchProdutos, loading } = useProdutosStore();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      if (produtos.length === 0) {
        await fetchProdutos();
      }
    };
    carregar();
  }, []);

  useEffect(() => {
    if (produtos.length > 0) {
      const encontrado = produtos.find((p) => slugify(p.Nome) === nome);
      setProduto(encontrado);
    }
  }, [produtos, nome]);

  if (loading) return <p className="p-6">Carregando...</p>;
  if (!produto) return <p className="p-6">Produto não encontrado.</p>;

  return (
    <div>
      <ClientLoader />
      <Promo />
      <Header />

      <Container
        className={
          "flex flex-col md:flex-row justify-center md:justify-around gap-8 md:gap-12 py-[60px] text-[#61482A] mt-[106px] px-4 md:px-0"
        }
      >
        {/* Imagem do produto */}
        <img
          src={produto.Foto}
          alt={produto.Nome}
          className="w-full  md:w-[400px] h-auto md:h-[600px] object-cover rounded-lg shadow-lg"
        />

        {/* Detalhes do produto */}
        <div className="flex flex-col gap-4 w-full md:max-w-[500px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{produto.Nome}</h1>

          <p className="text-xl md:text-2xl font-bold text-[#61482A]">
            R$ {Number(produto.Preço).toFixed(2)}
          </p>

          <p className="text-base md:text-lg">
            <span className="font-semibold">Categoria:</span> {produto.Categoria}
          </p>

          <p className="text-base md:text-lg">
            <span className="font-semibold">Marca:</span> {produto.Marca}
          </p>

          <button className="w-full bg-[#8D402C] py-3 text-[#F9F5F3] rounded hover:bg-[#a54a33] transition duration-200 cursor-pointer text-base md:text-lg">
          <a href="https://wa.me/553192350221" target="_blank">  Concluir Compra </a>
          </button>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
