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
  const { nome } = useParams(); // pega o slug da URL
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
    <div >
      <ClientLoader />
      <Promo />
      <Header />
      <Container className={"flex justify-around py-[80px] text-[#61482A] mt-[106px]"}>

        <img
          src={produto.Foto}
          alt={produto.Nome}
          className="h-[600px] w-[400px] object-cover rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-4">{produto.Nome}</h1>
          <p className="text-xl font-bold text-[#61482A]">
            R$ {Number(produto.Preço).toFixed(2)}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Categoria:</span> {produto.Categoria}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Marca:</span> {produto.Marca}
          </p>
          <button className="w-full bg-[#8D402C] py-2 text-[#F9F5F3] rounded hover:bg-[#a54a33] transition duration-200 cursor-pointer">Concluir Compra</button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
