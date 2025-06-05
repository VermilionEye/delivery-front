'use client'
import React from 'react';
import {withAdminLayout} from "../../../layout/AdminLayout/AdminLayout";
import styles from "../../../styles/users.module.css";
import {H} from "../../../../components/Htag/Htag";
import {useGetProductsQuery} from "../../../store/api/api";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    amount: number;
    category: string;
}

interface Category {
    category: string;
    type: string;
}

interface ProductRowProps {
    item: Product;
}

const Products: Category[] = [
    {category: "Фрукты", type: "fruit"},
    {category: "Овощи", type: "vegetable"},
    {category: "Мясо", type: "meat"},
    {category: "Молочные продукты", type: "milk"},
    {category: "Хлебные изделия", type: "bread"},
];

const Page: React.FC = () => {
    const {data, isLoading, error} = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading products</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.adminBlock}>
                <div className={styles.topTable}>
                    <H type={"body"} size={"xl"}>Все продукты</H>
                </div>
                {Products.map((product) => (
                    <div key={product.category} className={styles.catalogCategory}>
                        <H type={"body"} size={"xxl"}>{product.category}</H>
                        <table className={styles.table}>
                            <tbody>
                            <tr className={styles.tr}>
                                <th><H type={"body"} size={"small"}>ID</H></th>
                                <th><H type={"body"} size={"small"}>НАЗВАНИЕ</H></th>
                                <th><H type={"body"} size={"small"}>ОПИСАНИЕ</H></th>
                                <th><H type={"body"} size={"small"}>ЦЕНА</H></th>
                                <th><H type={"body"} size={"small"}>КОЛИЧЕСТВО</H></th>
                            </tr>
                            {data?.filter((item: Product) => item.category === product.type).map((item: Product) => (
                                <tr key={item.id}>
                                    <th><H type={"body"} size={"small"}>{item.id}</H></th>
                                    <th><H type={"body"} size={"small"}>{item.title}</H></th>
                                    <th><H type={"body"} size={"small"}>{item.description.slice(0, 100) + (item.description.length > 100 ? "..." : "")}</H></th>
                                    <th><H type={"body"} size={"small"}>{item.price}</H></th>
                                    <th><H type={"body"} size={"small"}>{item.amount}</H></th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default withAdminLayout(Page);