import {AccountSidebarProps} from "./AccountSidebar.props";
import cn from "classnames";
import styles from "./AccountSidebar.module.css";
import {Logo} from "../../../eco-market-front/components/Logo/Logo";
import {H} from "../../../eco-market-front/components/Htag/Htag";
import Link from "next/link";
import {Button} from "../../../eco-market-front/components/Button/Button";
import {AccountSidebarButton} from "../../../eco-market-front/components/AccountSidebarButton/AccountSidebarButton";

export const AccountSidebar = ({
                           className,
                           ...props
                       }: AccountSidebarProps): JSX.Element => {

    return (
        <aside className={cn(styles.sidebar, className)} {...props}>
            <div content={styles.logoContainer}>
                <Link href={"/public"}>
                    <Logo/>
                </Link>
            </div>
            <ul className={styles.menu}>
                <AccountSidebarButton content={"Главная"} />
                <AccountSidebarButton content={"Мои заказы"} />
                <AccountSidebarButton content={"Избранное"}/>
                <AccountSidebarButton content={"Корзина"}/>
                <AccountSidebarButton content={"Настройки"}/>
            </ul>
        </aside>
    );
};
