import { ReactElement } from "react";
export interface IMenu {
    key: string;
    name: string;
    onClick?(): void;
}
export interface HeaderProps {
    logo?: ReactElement;
    pages: IMenu[];
    settings?: IMenu[];
}
declare const Header: {
    ({ logo, pages, settings }: HeaderProps): JSX.Element;
    defaultProps: HeaderProps;
};
export default Header;
