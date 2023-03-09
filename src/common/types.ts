export interface FooterMenuItem {
    url: string;
    text: string;
}

export interface HeaderMenuItem extends FooterMenuItem {
    icon: JSX.Element
}
