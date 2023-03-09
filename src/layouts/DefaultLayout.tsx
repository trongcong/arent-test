import {Outlet} from "react-router";
import ButtonToTop from "../components/ButtonToTop";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout() {
    return (
        <div className='layout-wrap'>
            <Header/>
            <main className='content-wrap'>
                <Outlet/>
            </main>
            <Footer/>

            <ButtonToTop/>
        </div>
    )
}

export default DefaultLayout;