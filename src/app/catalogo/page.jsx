import ClientLoader from "@/components/clientLoader";
import Filter from "@/containers/catalogo/filter";
import Footer from "@/containers/footer/footer";
import Header from "@/containers/header/header";
import Marcas from "@/containers/marcas/marcas";
import Promo from "@/containers/promo/promo";

const Catalogo = () => {
    return (
        <div>
            <ClientLoader />
            <Promo />
            <Header />
            <Filter />
            <Marcas />
            <Footer />
        </div>
    )
}

export default Catalogo;