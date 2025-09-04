"use client";

import { useEffect, useState } from "react";
import LogoSvg from "./logoSvg";


const ClientLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LogoSvg />;
  return null;
};

export default ClientLoader;