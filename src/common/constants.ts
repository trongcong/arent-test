import {
    ColumnItemType,
    FooterMenuItemTypes, LineChartProps,
    MealsHistoryItemTypes,
    MobileMenuItemTypes, MyDiaryItemType,
    RecommendItemType
} from "./types";

import M1 from "../assets/images/m01.jpg";
import M2 from "../assets/images/l03.jpg";
import M3 from "../assets/images/d01.jpg";
import M4 from "../assets/images/l01.jpg";
import M5 from "../assets/images/m02.jpg";
import M6 from "../assets/images/l02.jpg";
import M7 from "../assets/images/d02.jpg";
import M8 from "../assets/images/s01.jpg";

import C1 from "../assets/images/column-1.jpg";
import C2 from "../assets/images/column-2.jpg";
import C3 from "../assets/images/column-3.jpg";
import C4 from "../assets/images/column-4.jpg";
import C5 from "../assets/images/column-5.jpg";
import C6 from "../assets/images/column-6.jpg";
import C7 from "../assets/images/column-7.jpg";
import C8 from "../assets/images/column-8.jpg";

export const ROUTES = {
    profile: "/profile",
    record: "/record",
    column: "/column",
};

export const FOOTER_MENU: FooterMenuItemTypes[] = [
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

export const MOBILE_MENU: MobileMenuItemTypes[] = [
    {
        url: '/record',
        text: '自分の記録',
    },
    {
        url: '/weight-chart',
        text: '体重グラフ',
    },
    {
        url: '/goal',
        text: '目標',
    },
    {
        url: '/selected-course',
        text: '選択中のコース',
    },
    {
        url: '/column',
        text: 'コラム一覧',
    },
    {
        url: '/settings',
        text: '設定',
    },
]

export const MEALS_HISTORY: MealsHistoryItemTypes[] = [
    {
        type: "morning",
        title: "05.21.Morning",
        icon: M1,
    },
    {
        type: "lunch",
        title: "05.21.Lunch",
        icon: M2
    },
    {
        type: "dinner",
        title: "05.21.Dinner",
        icon: M3
    },
    {
        type: "snack",
        title: "05.21.Snack",
        icon: M4
    },
    {
        type: "morning",
        title: "05.21.Morning",
        icon: M5,
    },
    {
        type: "lunch",
        title: "05.21.Lunch",
        icon: M6
    },
    {
        type: "dinner",
        title: "05.21.Dinner",
        icon: M7
    },
    {
        type: "snack",
        title: "05.21.Snack",
        icon: M8
    },
];


export const RECOMMEND_ITEMS: RecommendItemType[] = [
    {title: "RECOMMENDED COLUMN", subtitle: 'オススメ'},
    {title: "RECOMMENDED DIET", subtitle: 'ダイエット'},
    {title: "RECOMMENDED BEAUTY", subtitle: '美容'},
    {title: "RECOMMENDED HEALTH", subtitle: '健康'},
]

export const COLUMNS: ColumnItemType[] = [
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C1
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C2
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C3
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C4
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C5
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C6
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C7
    },
    {
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", time: '2021.05.17   23:25', url: '/404', tags: ['#魚料理', '#和食', '#DHA'],
        img: C8
    },
]

export const MY_DIARY_DATA: MyDiaryItemType[] = Array.from(Array(8).keys())
    .map(() => ({
        title: "私の日記の記録が一部表示されます。",
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
        date: '2021.05.21',
        time: '23:25',
    }))

const CHART_LABELS: LineChartProps['data']['labels'] = [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
];

export const createChartData = (value: number = 11): LineChartProps["data"] => {
    return {
        labels: CHART_LABELS,
        datasets:
            [
                {
                    label: "Data 1",
                    data: CHART_LABELS.map(() => Math.floor(Math.random() * value)),
                    borderColor: "#FFCC21",
                    backgroundColor: "#FFCC21",
                },
                {
                    label: "Data 2",
                    data: CHART_LABELS.map(() => Math.floor(Math.random() * value)),
                    borderColor: "#8FE9D0",
                    backgroundColor: "#8FE9D0",
                },
            ],
    }
};
