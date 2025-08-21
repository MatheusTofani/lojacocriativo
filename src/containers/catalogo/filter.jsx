"use client";

import Container from "@/components/container";
import Produtos from "./produtos";
import { useState } from "react";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [sort, setSort] = useState(""); // "" | "preco-asc" | "preco-desc" | "az" | "za"
  const [estoque, setEstoque] = useState(false);

  // Alterna ordenação de preço
  const togglePrecoSort = () => {
    setSort((prev) => (prev === "preco-asc" ? "preco-desc" : "preco-asc"));
  };

  // Alterna ordenação alfabética
  const toggleNomeSort = () => {
    setSort((prev) => (prev === "az" ? "za" : "az"));
  };

  // Manipula categorias selecionadas
  const handleCategoria = (categoria) => {
    setCategorias((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  // Manipula marcas selecionadas
  const handleMarca = (marca) => {
    setMarcas((prev) =>
      prev.includes(marca)
        ? prev.filter((m) => m !== marca)
        : [...prev, marca]
    );
  };

  return (
    <Container>
      <form
        className="flex flex-col md:flex-row gap-4 mb-6 py-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ps-5 py-2 border border-[#61482A] text-[#61482A] rounded-md flex-1"
          placeholder="Busque o produto"
        />
      </form>

      <div className="flex gap-6">
        <aside className="w-1/4 text-[#61482A]">
          {/* Ordenação simples */}
          <p className="font-semibold mt-4 mb-2">Ordenar</p>
          <ul className="space-y-1 mb-2">
            <li>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sort === "preco-asc"}
                  onChange={() =>
                    setSort(sort === "preco-asc" ? "" : "preco-asc")
                  }
                  className="accent-[#61482A]"
                />
                Menor para maior
              </label>
            </li>
          </ul>
          {/* Categorias */}
          <p className="font-semibold mb-2">Categorias</p>
          <ul className="space-y-1">
            {["Aromas e Velas", "Moda e Acessórios", "Decoração e Artesanato"].map(
              (cat) => (
                <li key={cat}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={categorias.includes(cat)}
                      onChange={() => handleCategoria(cat)}
                      className="accent-[#61482A]"
                    />
                    {cat}
                  </label>
                </li>
              )
            )}
          </ul>

          {/* Marcas */}
          <p className="font-semibold mt-4 ">Marcas</p>
          <ul className="space-y-1">
            {["DP SEMIJÓIAS", "FRANCINE MOREIRA", "OPEN HOUSE"].map((marca) => (
              <li key={marca}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marcas.includes(marca)}
                    onChange={() => handleMarca(marca)}
                    className="accent-[#61482A]"
                  />
                  {marca}
                </label>
              </li>
            ))}
          </ul>

        
        </aside>

        <div className="w-3/4">
          <Produtos
            search={search}
            categoria={categorias}
            marca={marcas}
            sort={sort}
            estoque={estoque}
          />
        </div>
      </div>
    </Container>
  );
};

export default Filter;
