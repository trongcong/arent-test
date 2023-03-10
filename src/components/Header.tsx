import AppLink from "./AppLink";
import {ChallengeIcon, LogoIcon, NoticeIcon, RecordIcon} from "../assets";
import MenuMobile from "./MenuMobile";
import {HeaderMenuItemTypes} from "../common/types";

const HEADER_MENU: HeaderMenuItemTypes[] = [
    {
        url: '/record',
        text: '自分の記録',
        icon: <RecordIcon/>
    },
    {
        url: '/challenge',
        text: 'チャレンジ',
        icon: <ChallengeIcon/>
    },
    {
        url: '/notice',
        text: 'お知らせ',
        icon: (
            <div className="notice-wrap">
                <NoticeIcon/>
                <div className="notice">1</div>
            </div>
        )
    },
]

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
                                <MenuMobile/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;