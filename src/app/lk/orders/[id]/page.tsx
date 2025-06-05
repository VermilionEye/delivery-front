'use client'

import React from 'react';
import {withAccountLayout} from "../../../../layout/AccountLayout/AccountLayout";
import {OrderPage} from "../../../../../components/OrderPage/OrderPage";

interface PageProps {
    params: {
        id: string;
    };
}

const Page: React.FC<PageProps> = ({params}) => {
    return (
        <OrderPage orderId={Number(params.id)}/>
    );
}

export default withAccountLayout(Page);