import About from "@/containers/home/about/about";
import HeroSlider from "@/containers/home/carousel/carousel";
import Detail from "@/containers/home/detail/detail";
import Header from "@/containers/header/header";
import Promo from "@/containers/promo/promo";
import Novidades from "@/containers/home/news/news";
import Categorias from "@/containers/home/categorias/categorias";
import Footer from "@/containers/footer/footer";
import Marcas from "@/containers/marcas/marcas";
import Whatsapp from "@/components/Whatsapp";
import ClientLoader from "@/components/clientLoader";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <ClientLoader />
      <Promo />
      <Header />
      <Detail />
      <HeroSlider />
      <About />
      <Novidades />
      <Categorias />
      <Marcas />
      <Footer />
      <Whatsapp />
      
    </div>
  );
}


