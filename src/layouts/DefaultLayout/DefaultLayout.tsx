
import { Outlet } from "react-router-dom"; // serve pra mostrar onde renderizar a pagina
import { Header } from "../../components/Header/Header";
import { LayoutContainer } from "./styles";



export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )

}

