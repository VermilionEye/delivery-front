import {AccountLayoutProps} from "./AccountLayout.props";
import React, {FunctionComponent} from "react";
import {Footer} from "../../../templates/Footer/Footer";
import cn from "classnames";
import styles from "./AccountLayout.module.css"
import {AccountSidebar} from "../../../templates/AccountSidebar/AccountSidebar";


const AccountLayout = ({children}: AccountLayoutProps): JSX.Element => {
    return (
        <>
            <div className={cn(styles.account)}>
                <AccountSidebar/>
                <main className={cn(styles.account_page)}>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    );
};

export const withAccountLayout = <P extends object>(
    Component: FunctionComponent<P>
) => {
    return function withAccountLayoutComponent(props: P): JSX.Element {
        return (
            <AccountLayout>
                <Component {...props} />
            </AccountLayout>
        );
    };
};
