'use client'

import React from 'react';
import styles from "../../../styles/favourites.module.css";
import {Button} from "../../../../components/Button/Button";
import {H} from "../../../../components/Htag/Htag";
import cn from "classnames";
import {CartPreview} from "../../../../components/CartPreview/CartPreview";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {FavPreview} from "../../../../components/FavPreview/FavPreview";
import {withAccountLayout} from "../../../layout/AccountLayout/AccountLayout";

interface Product {
    id: number;
    title: string;
    price: number;
    amount: number;
    description: string;
    country: string;
    category: string;
    image: string;
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
    cellulose: number;
}

interface FavPreviewProps {
    product: Product;
}

const Page: React.FC = () => {
    const favourites = useSelector((state: RootState) => state.favourites?.favourites)
    const totalAmount = useSelector((state : RootState) => state.favourites?.amount)

    return (
        <div className={styles.page}>
            <H type={"h5"} weight={400}>Избранное</H>
            <div className={cn(styles.content, {
                [styles.empty]: !totalAmount
            })}>
                {totalAmount ?
                    <>
                        <table className={styles.table}>
                            <tbody>
                            <tr className={styles.tableHeader}>
                                <th><H type={"body"} size={"small"}>ПРОДУКТЫ</H></th>
                                <th><H type={"body"} size={"small"}>ЦЕНА</H></th>
                                <th><H type={"body"} size={"small"}>СТАТУС</H></th>
                            </tr>
                            {favourites?.map((product: Product) => (
                                <FavPreview product={product} key={product.id}/>
                            ))}
                            </tbody>
                        </table>
                    </> :
                    <>
                        <H type={"h3"} weight={900}>Избранное пусто</H>
                        <Link href={"/public"}><Button type={"fill"} size={"large"}>В каталог</Button></Link>
                    </>
                }
            </div>
        </div>
    );
}
