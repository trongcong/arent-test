import AppLink from "./AppLink";
import {LogoIcon} from "../assets";
import {HEADER_MENU} from "../common/constants";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-inner">
                            <div className="-logo">
                                <AppLink to='/'>
                                    <LogoIcon/>
                                </AppLink>
                            </div>
                            <div className="-menu-wrap">
                                <ul className="-menu">
                                    {
                                        HEADER_MENU.map(item => {
                                            return (
                                                <li key={item.url}>
                                                    <AppLink to={item.url}>
                                                        {item.icon}
                                                        {item.text}
                                                    </AppLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="-canvas-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;