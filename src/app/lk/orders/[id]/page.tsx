'use client'

import React from 'react';
import {withAccountLayout} from "../../../../layout/AccountLayout/AccountLayout";
import {OrderPage} from "../../../../../components/OrderPage/OrderPage";

interface PageProps {
    params: {
        id: string;
    };
}

interface OrderPageProps {
    orderId: string;
}

const Page: React.FC<PageProps> = ({params}) => {
    return (
        <OrderPage orderId={params.id}/>
    );
}

export default withAccountLayout(Page);