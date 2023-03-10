import {CloseIcon, MenuIcon} from "../assets";
import {MOBILE_MENU} from "../common/constants";
import AppLink from "./AppLink";
import useComponentVisible from "../hooks/useComponentVisible";

function MenuMobile() {
    const {ref, isVisible, setIsVisible} = useComponentVisible<HTMLButtonElement>(false);
    const handleMenuMobile = () => setIsVisible(!isVisible)
    const closeMenuMobile = () => setIsVisible(false)

    return (
        <div className="-menu-mobile-wrap">
            <button ref={ref} className="icon-menu" onClick={handleMenuMobile}>
                {isVisible ? <CloseIcon/> : <MenuIcon/>}
            </button>
            <div className={`-menu-mobile ${isVisible ? '' : 'd-none'}`}>
                <ul>
                    {
                        MOBILE_MENU.map(item => {
                            return (
                                <li key={item.url} onClick={closeMenuMobile}>
                                    <AppLink to={item.url}>
                                        {item.text}
                                    </AppLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile;