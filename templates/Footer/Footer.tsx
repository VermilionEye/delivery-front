import {FooterProps} from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import {Logo} from "../../../eco-market-front/components/Logo/Logo";
import {H} from "../../../eco-market-front/components/Htag/Htag";

export const Footer = ({
                           className,
                           ...props
                       }: FooterProps): JSX.Element => {

    return (
        <footer className={styles.footer}>
            <div className={styles.leftSide}>
                <Logo className={styles.logo}/>
                <H type={"body"} size={"small"} className={styles.h}>EcoGrocery - курсовая работа по дисциплине "Шаблоны
                    программирования на языке Java" студента ИКБО-16-22 Казакова Степана.</H>
                <H type={"body"} size={"small"} className={styles.h}>Наши контакты:<br/><a
                    href={"mailto: tsarev.georg@yandex.ru"}>kazakov.step@yandex.ru</a></H>
            </div>
            <div className={styles.rightSide}>
                <img className={styles.leftFooter} src={"../leftFooter.svg"} alt={"leftFooter"}/>
                <H type={"body"} size={"large"} className={styles.h}>Мой аккаунт</H>
                <H type={"body"} size={"large"} className={styles.h}>История заказов</H>
                <H type={"body"} size={"large"} className={styles.h}>Избранное</H>
                <H type={"body"} size={"large"} className={styles.h}>О нас</H>
                <img className={styles.rightFooter} src={"../rightFooter.svg"} alt={"rightFooter"}/>
            </div>
        </footer>
    );
};
