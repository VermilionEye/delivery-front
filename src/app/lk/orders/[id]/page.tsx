'use client'

import React from 'react';
import {withAccountLayout} from "../../../../layout/AccountLayout/AccountLayout";
import {OrderPage} from "../../../../../components/OrderPage/OrderPage";

interface PageProps {
    params: {
        id: string;
    };
}

const Page = ({params}: PageProps) => {
    return (
        <OrderPage orderId={Number(params.id)}/>
    );
}

// @ts-ignore - Ignoring type error for HOC compatibility
export default withAccountLayout(Page);