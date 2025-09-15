"use client";
import React from "react";
import { useEffect, useState } from "react";
import Container from "@/components/container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsDesktop, settingsMobile } from "./carouselConfig";
import { useProdutosStore } from "@/store/useProdutosStore";
import Card from "@/components/card";

const Novidades = () => {
  const { produtos, fetchProdutos } = useProdutosStore();

  useEffect(() => {
    fetchProdutos();
  }, []);

  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settingsNews = isDesktop ? settingsDesktop : settingsMobile;



const produtosRecentes = produtos
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 8);


  return (
    <div className="my-[120px] px-4 md:px-0">
      <Container>
        <h2 className="text-[#61482A] font-bold text-[20px] mb-6">Novidades</h2>

        <div className="w-full">
          <Slider {...settingsNews}>
            {produtosRecentes.map((produto) => (
              <div key={produto.id} className="md:px-2">
                <Card
                  nome={produto.Nome}
                  foto={produto.Foto}
                  preco={produto.Preço}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Novidades;
