import {FooterMenuItem, HeaderMenuItem} from "./types";
import {ChallengeIcon, NoticeIcon, RecordIcon} from "../assets";

export const ROUTES = {
    profile: "/profile",
    record: "/record",
    column: "/column",
};

export const FOOTER_MENU: FooterMenuItem[] = [
    {
        url: '/',
        text: '会員登録'
    },
    {
        url: '/',
        text: '運営会社'
    },
    {
        url: '/',
        text: '利用規約'
    },
    {
        url: '/',
        text: '個人情報の取扱について'
    },
    {
        url: '/',
        text: '特定商取引法に基づく表記'
    },
    {
        url: '/',
        text: 'お問い合わせ'
    },
]

export const HEADER_MENU: HeaderMenuItem[] = [
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
