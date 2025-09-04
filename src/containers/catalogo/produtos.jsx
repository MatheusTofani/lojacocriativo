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

  let filtered = produtos.filter((p) => {
    const matchesSearch = search
      ? p.Nome.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesCategoria =
      categoria.length > 0 ? categoria.includes(p.Categoria) : true;
    const matchesMarca = marca.length > 0 ? marca.includes(p.Marca) : true;
    return matchesSearch && matchesCategoria && matchesMarca;
  });

  if (sort === "preco-asc") {
    filtered = [...filtered].sort((a, b) => a.Preço - b.Preço);
  } else if (sort === "preco-desc") {
    filtered = [...filtered].sort((a, b) => b.Preço - a.Preço);
  } else if (sort === "az") {
    filtered = [...filtered].sort((a, b) => a.Nome.localeCompare(b.Nome));
  } else if (sort === "za") {
    filtered = [...filtered].sort((a, b) => b.Nome.localeCompare(a.Nome));
  }

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  // Função para alterar a página e rolar para o topo
  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // rolagem suave
    });
  };

  return (
    <div>
      {/* Grid de produtos responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

      {/* Paginação responsiva */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 text-[#61482A] cursor-pointer hover:opacity-80 transition duration-200 border-[#61482A]"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => {
            if (totalPages <= 5) return true;
            if (p === 1 || p === totalPages) return true;
            if (Math.abs(p - page) <= 1) return true;
            return false;
          })
          .map((p, i, arr) => (
            <span key={p}>
              {i > 0 && p - arr[i - 1] > 1 && <span className="px-1">...</span>}
              <button
                onClick={() => handlePageChange(p)}
                className={`px-3 py-1 border text-[#61482A] cursor-pointer hover:opacity-80 transition duration-200 border-[#61482A] rounded ${
                  page === p ? "bg-[#61482A] text-[#F9F5F3]" : ""
                }`}
              >
                {p}
              </button>
            </span>
          ))}

        <button
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 text-[#61482A] cursor-pointer hover:opacity-80 transition duration-200 border-[#61482A]"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Produtos;
