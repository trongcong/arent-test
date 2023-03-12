import AppLink from "./AppLink";
import {FOOTER_MENU} from "../common/constants";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="-menu-wrap">
                            <ul className="-menu">
                                {
                                    FOOTER_MENU.map(item => {
                                        return (
                                            <li key={item.text}><AppLink to={item.url}>{item.text}</AppLink></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;