'use client'

import { withAccountLayout } from "../../../layout/AccountLayout/AccountLayout"
import { useGetCurrentUserQuery } from "../../../store/api/user.api"
import { RootState } from "../../../store/store"
import cn from "classnames"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../../../components/Button/Button"
import { CartPreview } from "../../../../components/CartPreview/CartPreview"
import { H } from "../../../../components/Htag/Htag"
import styles from "../../../styles/cart.module.css"
import {actions as CartActions} from "../../../store/slices/cart.slice"
import {actions as ProductActions} from "../../../store/slices/products.slice"

function Page() {

    const products = useSelector((state: RootState) => state.products);

    const totalPrice = useSelector((state: RootState) => state.cart?.totalCost);

    const totalAmount = useSelector((state: RootState) => state.cart?.totalItems);

    const userId = useGetCurrentUserQuery().data?.id;

    const [isOrdered, setIsOrdered] = useState(false);

    const dispatch = useDispatch();

    const quantities = useSelector((state: RootState) => state.cart?.quantities)


    const handleBuy = () => {
        try {
            fetch(`http://localhost:8808/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    productIds: products?.map(product => product.id),
                    cost: totalPrice,
                    amount: totalAmount,
                    quantities: quantities
                })
            }).then(r => {
                if (r.ok) {
                    dispatch(CartActions.removeAll())
                    dispatch(ProductActions.removeAll())
                    setIsOrdered(true)
                    setTimeout(() => {
                        setIsOrdered(false);
                    }, 2000);
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    return <div className={styles.page}>
        <H type={"h5"} weight={400}>Моя корзина</H>
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
                            <th><H type={"body"} size={"small"}>КОЛИЧЕСТВО</H></th>
                            <th><H type={"body"} size={"small"}>ИТОГО</H></th>
                        </tr>
                        {products?.map((product, index) => (
                            <CartPreview product={product} index={index} key={product.id}/>
                        ))}
                        </tbody>
                    </table>
                    <table className={styles.payment}>
                        <tbody>
                        <tr>
                            <th><H type={"body"} size={"xl"} weight={500}>Корзина</H></th>
                        </tr>
                        <tr>
                            <th><H type={"body"} size={"small"}>Стоимость:</H></th>
                            <th><H type={"body"} size={"small"} weight={500}>{totalPrice} руб.</H></th>
                        </tr>
                        <tr>
                            <th><H type={"body"} size={"small"}>Доставка:</H></th>
                            <th><H type={"body"} size={"small"} weight={500}>free</H></th>
                        </tr>
                        <tr>
                            <th><H type={"body"} size={"medium"}>Итого:</H></th>
                            <th><H type={"body"} size={"small"} weight={500}>{totalPrice} руб.</H></th>
                        </tr>
                        <tr>
                            <th><Button type={"fill"} className={styles.doOrder} onClick={handleBuy}>Оформить
                                заказ</Button></th>
                        </tr>
                        </tbody>
                    </table>
                </> :
                <>
                    <H type={"h3"} weight={900}>Ваша корзина пуста</H>
                    <Link href={"/public"}><Button type={"fill"} size={"large"}>В каталог</Button></Link>
                </>
            }
        </div>
        {isOrdered ?
            <div className={styles.success}>
                <H type={"body"} size={"xl"} className={styles.successText}>Заказ успешно создан 🙌</H>
            </div> : null}
    </div>
}

export default withAccountLayout(Page)