import {withAccountLayout} from "../../../../layout/AccountLayout/AccountLayout";
import {OrderPage} from "../../../../../../eco-market-front/components/OrderPage/OrderPage";

function Page({params}: { params: { id: number } }) {
    return (<>
        <OrderPage orderId={params.id}/>
    </>);
}

export default withAccountLayout(Page)