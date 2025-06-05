import type {Metadata} from "next";
import "../styles/globals.css";
import React from "react";
import {Header} from "../../templates/Header/Header";
import {Footer} from "../../templates/Footer/Footer";
import {ReduxProvider} from "../../../delivery-front/components/ReduxProvider/ReduxProvider";

export const metadata: Metadata = {
    title: "EcoGrocery",
    description: "EcoMarket",
    icons: {
        icon: "logo.svg"
    }

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"/>
            <title>EcoGrocery</title>
        </head>
        <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
