import {AdminSidebarProps} from "./AdminSidebar.props";
import cn from "classnames";
import styles from "./AdminSidebar.module.css";
import {Logo} from "../../../eco-market-front/components/Logo/Logo";
import {H} from "../../../eco-market-front/components/Htag/Htag";
import Link from "next/link";
import {Button} from "../../../eco-market-front/components/Button/Button";
import {AccountSidebarButton} from "../../../eco-market-front/components/AccountSidebarButton/AccountSidebarButton";

export const AdminSidebar = ({
                           className,
                           ...props
                       }: AdminSidebarProps): JSX.Element => {

    return (
        <aside className={cn(styles.sidebar, className)} {...props}>
            <div content={styles.logoContainer}>
                <Link href={"/public"}>
                    <Logo/>
                </Link>
            </div>
            <ul className={styles.menu}>
                <AccountSidebarButton content={"Главная"} />
                <AccountSidebarButton content={"Пользователи"} />
                <AccountSidebarButton content={"Продукты"}/>
                <AccountSidebarButton content={"Заказы"}/>
            </ul>
        </aside>
    );
};
