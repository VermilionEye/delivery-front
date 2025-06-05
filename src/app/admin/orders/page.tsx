'use client'
import React from 'react';
import styles from "../../../styles/users.module.css";
import {H} from "../../../../components/Htag/Htag";
import {withAdminLayout} from "../../../layout/AdminLayout/AdminLayout";
import {useGetAllOrdersQuery} from "../../../store/api/admin.api";

interface Order {
    id: number;
    user: {
        id: number;
    };
    cost: number;
    date: Date;
    orderProducts: Array<{
        product: {
            title: string;
        };
        quantity: number;
    }>;
}

interface OrderProduct {
    product: {
        title: string;
    };
    quantity: number;
}

const Page: React.FC = () => {
    const {data, isLoading, error} = useGetAllOrdersQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading orders</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.adminBlock}>
                <div className={styles.topTable}>
                    <H type={"body"} size={"xl"}>Все заказы</H>
                </div>
                <table className={styles.table}>
                    <tbody>
                    <tr className={styles.tr}>
                        <th><H type={"body"} size={"small"}>ID</H></th>
                        <th><H type={"body"} size={"small"}>UserID</H></th>
                        <th><H type={"body"} size={"small"}>СТОИМОСТЬ</H></th>
                        <th><H type={"body"} size={"small"}>ДАТА</H></th>
                        <th><H type={"body"} size={"small"}>ПРОДУКТЫ</H></th>
                    </tr>
                    {data?.map((order: Order) => (
                        <tr key={order.id}>
                            <th><H type={"body"} size={"small"}>{order.id}</H></th>
                            <th><H type={"body"} size={"small"}>{order.user.id}</H></th>
                            <th><H type={"body"} size={"small"}>{order.cost}</H></th>
                            <th><H type={"body"} size={"small"}>{order.date.toLocaleDateString()}</H></th>
                            <th><H type={"body"} size={"small"}>
                                {order.orderProducts.map((product: OrderProduct) => (
                                    <React.Fragment key={product.product.title}>
                                        {product.product.title} x{product.quantity}
                                        <br/>
                                    </React.Fragment>
                                ))}
                            </H></th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withAdminLayout(Page);