"use client";

import Card from "@/components/card";
import { useProdutosStore } from "@/store/useProdutosStore";
import { useEffect, useState } from "react";

const Produtos = ({ search, categoria = [], marca = [], sort }) => {
  const { produtos, fetchProdutos } = useProdutosStore();
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchProdutos();
  }, []);

  // 1. Aplica filtros
  let filtered = produtos.filter((p) => {
    const matchesSearch = search
      ? p.Nome.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesCategoria =
      categoria.length > 0 ? categoria.includes(p.Categoria) : true;
    const matchesMarca = marca.length > 0 ? marca.includes(p.Marca) : true;

    return matchesSearch && matchesCategoria && matchesMarca;
  });

  // 2. Aplica ordenação
  if (sort === "preco-asc") {
    filtered = [...filtered].sort((a, b) => a.Preço - b.Preço);
  } else if (sort === "preco-desc") {
    filtered = [...filtered].sort((a, b) => b.Preço - a.Preço);
  } else if (sort === "az") {
    filtered = [...filtered].sort((a, b) => a.Nome.localeCompare(b.Nome));
  } else if (sort === "za") {
    filtered = [...filtered].sort((a, b) => b.Nome.localeCompare(a.Nome));
  }

  // 3. Paginação
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            nome={produto.Nome}
            foto={produto.Foto}
            preco={produto.Preço}
          />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 text-[#61482A] cursor-pointer hover:opacity-80 transition duration-200 border-[#61482A]"
        >
          Anterior
        </button>

        {/* Mostra até 10 páginas e sempre primeira e última */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => {
            if (totalPages <= 10) return true;
            if (p === 1 || p === totalPages) return true;
            if (Math.abs(p - page) <= 2) return true; // 2 páginas antes/depois
            return false;
          })
          .map((p, i, arr) => (

            <span key={p}>
              {i > 0 && p - arr[i - 1] > 1 && <span className="px-1">...</span>}
              <button
                onClick={() => setPage(p)}
                className={`px-3 py-1 border text-[#61482A] cursor-pointer hover:opacity-80 transition duration-200 border-[#61482A] rounded ${
                  page === p ? "bg-[#61482A] text-[#F9F5F3]  " : ""
                }`}
              >
                {p}
              </button>
            </span>
          ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50  text-[#61482A] cursor-pointer hover:opacity-80 transition duration-200 border-[#61482A]"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Produtos;
