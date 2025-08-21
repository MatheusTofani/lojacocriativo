// src/store/useProdutosStore.js
import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; // sua config do Firebase

export const useProdutosStore = create((set) => ({
  produtos: [],
  loading: false,

  fetchProdutos: async () => {
    set({ loading: true });
    try {
      const querySnapshot = await getDocs(collection(db, "produtos"));
      const lista = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      set({ produtos: lista, loading: false });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      set({ loading: false });
    }
  },
}));
