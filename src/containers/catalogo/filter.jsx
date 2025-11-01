"use client";

import Container from "@/components/container";
import Produtos from "./produtos";
import { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [sort, setSort] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [showCategorias, setShowCategorias] = useState(true);
  const [showMarcas, setShowMarcas] = useState(true);

  const handleCategoria = (categoria) => {
    setCategorias((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  const handleMarca = (marca) => {
    setMarcas((prev) =>
      prev.includes(marca)
        ? prev.filter((m) => m !== marca)
        : [...prev, marca]
    );
  };

  return (
    <Container className="mt-[120px]  px-4 md:px-0">
      {/* Barra de busca */}
      <form
        className="flex flex-col sm:flex-row gap-4 mb-6 py-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ps-5 py-2 border border-[#61482A] text-[#61482A] rounded-md flex-1"
          placeholder="Busque o produto"
        />

        {/* Botão mobile para abrir filtros */}
        <button
          type="button"
          onClick={() => setOpenFilters(!openFilters)}
          className="sm:hidden px-4 py-2 bg-[#61482A] text-white rounded-md flex items-center justify-center gap-2"
        >
          <SlidersHorizontal size={18} />
          Filtros
        </button>
      </form>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Sidebar de filtros */}
        <aside
          className={`sm:w-1/4 text-[#61482A] border sm:border-none p-4 rounded-md sm:p-0 ${
            openFilters ? "block" : "hidden sm:block"
          }`}
        >
          {/* Ordenar */}
          <div>
            <p className="font-semibold mt-2 mb-2">Ordenar</p>
            <ul className="space-y-1 mb-4">
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
          </div>

          {/* Categorias */}
          <div className="mb-4">
            <button
              type="button"
              className="flex justify-between items-center w-full font-semibold"
              onClick={() => setShowCategorias(!showCategorias)}
            >
              Categorias
              {showCategorias ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {showCategorias && (
              <ul className="space-y-1 mt-2">
                {[
                  "Aromas e Velas",
                  "Moda e Acessórios",
                  "Decoração e Artesanato",
                ].map((cat) => (
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
                ))}
              </ul>
            )}
          </div>

          {/* Marcas */}
          <div>
            <button
              type="button"
              className="flex justify-between items-center w-full font-semibold"
              onClick={() => setShowMarcas(!showMarcas)}
            >
              Marcas
              {showMarcas ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {showMarcas && (
              <ul className="space-y-1 mt-2">
                {[
                  "FRANCINE MOREIRA",
                  "OPEN HOUSE",
                  "MARIA BIRRA",
                  "OURO DE MINA",
                  "LUME",
                  "ARBO",
                  "VISIONAIRE",
                  "SILVANA",
                  "JAQUELINE BRAGA",
                  "DATIZA",
                ].map((marca) => (
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
            )}
          </div>
        </aside>

        {/* Lista de produtos */}
        <div className="sm:w-3/4">
          <Produtos
            search={search}
            categoria={categorias}
            marca={marcas}
            sort={sort}
          />
        </div>
      </div>
    </Container>
  );
};

export default Filter;
