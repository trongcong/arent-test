export interface FooterMenuItemTypes {
    url: string;
    text: string;
}

export interface MobileMenuItemTypes extends FooterMenuItemTypes {
}

export interface HeaderMenuItemTypes extends FooterMenuItemTypes {
    icon: JSX.Element
}

export interface FilterButtonTypes {
    key: string;
    title: string;
    icon: JSX.Element
}

export interface MealsHistoryItemTypes extends Pick<FilterButtonTypes, "title"> {
    type: string;
    icon: string
}

export interface ButtonMoreRecordProps {
    children?: React.ReactNode;
    onClick: () => void;
}

export interface RecommendItemType {
    title: string;
    subtitle: string;
}

export interface ColumnItemType {
    title: string;
    url: string;
    time: string;
    tags: string[];
    img: string;
}