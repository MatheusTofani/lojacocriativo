"use client";
import { useEffect } from "react";
import Container from "@/components/container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsNews } from "./carouselConfig";
import { useProdutosStore } from "@/store/useProdutosStore";
import Card from "@/components/card";

const Novidades = () => {
  const { produtos, fetchProdutos } = useProdutosStore();

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className="my-[120px] px-4 md:px-0">
      <Container>
        <h2 className="text-[#61482A] font-bold text-[20px]">Novidades</h2>


        <Slider {...settingsNews}>
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              nome={produto.Nome}
              foto={produto.Foto}
              preco={produto.Preço}
            />
          ))}

        </Slider>
      </Container>
    </div>
  );
};

export default Novidades;
