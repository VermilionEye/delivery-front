'use client'

import React from 'react';
import styles from "../styles/page.module.css";
import {Button} from "../../components/Button/Button";
import {H} from "../../components/Htag/Htag";
import {CardRow} from "../../components/CardRow/CardRow";
import {useGetProductsQuery} from "../store/api/api";
import {withMainLayout} from "../layout/MainLayout/MainLayout";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    amount: number;
    category: string;
    calories: number;
    fats: number;
    proteins: number;
    carbohydrates: number;
    cellulose: number;
}

interface Category {
    category: string;
    type: string;
}

interface CardRowProps {
    type: string;
    data: Product[];
}

const Products: Category[] = [
    {category: "Фрукты", type: "fruit"},
    {category: "Овощи", type: "vegetable"},
    {category: "Мясо", type: "meat"},
    {category: "Молочные продукты", type: "milk"},
    {category: "Хлебные изделия", type: "bread"},
];

const Home: React.FC = () => {
    const {data, isLoading, error} = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading products</div>;
    }

    return (
        <>
            <div className={styles.first}>
                <div className={styles.firstContainer}>
                    <div className={styles.leftSideFirst}>
                        <H type={"body"} size={"small"} className={styles.green}>ДОБРО ПОЖАЛОВАТЬ В ECOGROCERY</H>
                        <H type={"h1"} weight={600}>Свежая & Полезная <br/>Натуральная пища</H>
                        <div className={styles.saleContainer}>
                            <H type={"h5"}>Скидки до <span className={styles.sale}>30 %</span></H>
                            <H type={"body"} size={"small"} className={styles.gray}>Бесплатная доставка по всему вашему
                                заказу.</H>
                        </div>
                        <Button type={"fill"} size={"medium"} className={styles.buy}>
                            Оформить заказ
                            <img src={"../whiteArrow.svg"} alt={"whiteArrow"}/>
                        </Button>
                    </div>
                    <img className={styles.firstContainerImg} src={"../firstLanding.svg"} alt={"firstLanding"}/>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.bottomItem}>
                        <img src={"../shipping.svg"} alt={"shipping"}/>
                        <div className={styles.bottomWords}>
                            <H type={"body"} size={"small"} weight={600}>Бесплатная доставка</H>
                            <H type={"body"} size={"tiny"} className={styles.gray}>Бесплатная доставка по всему вашему
                                заказу</H>
                        </div>
                    </div>
                    <div className={styles.bottomItem}>
                        <img src={"../support.svg"} alt={"support"}/>
                        <div className={styles.bottomWords}>
                            <H type={"body"} size={"small"} weight={600}>Поддержка клиентов 24/7</H>
                            <H type={"body"} size={"tiny"} className={styles.gray}>Мгновенный доступ к службе
                                поддержки</H>
                        </div>
                    </div>
                    <div className={styles.bottomItem}>
                        <img src={"../payment.svg"} alt={"payment"}/>
                        <div className={styles.bottomWords}>
                            <H type={"body"} size={"small"} weight={600}>100% Безопасный платеж</H>
                            <H type={"body"} size={"tiny"} className={styles.gray}>Мы гарантируем экономию ваших
                                денег</H>
                        </div>
                    </div>
                    <div className={styles.bottomItem}>
                        <img src={"../moneyBack.svg"} alt={"moneyBack"}/>
                        <div className={styles.bottomWords}>
                            <H type={"body"} size={"small"} weight={600}>Гарантия возврата денег</H>
                            <H type={"body"} size={"tiny"} className={styles.gray}>Гарантия возврата денег 30 дней</H>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.featured}>
                <H type={"h3"} weight={600}>Популярные продукты</H>
                {Products.map((product) => (
                    <div key={product.category} className={styles.catalogCategory}>
                        <H type={"h5"}>{product.category}</H>
                    </div>
                ))}
            </div>
        </>
    );
}

export default withMainLayout(Home);
