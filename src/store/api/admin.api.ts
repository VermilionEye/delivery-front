import {api, Product} from "./api";
import {token, User} from "./user.api";
import {Order} from "./order.api";


export const adminApi = api.injectEndpoints({
    endpoints: builder => ({
        getAllUsers: builder.query<User[], void>({
            query: () => ({
                url: `/admin/users`,
                headers: {"Authorization": `Bearer ${token}`}
            })
        }),
        getAllOrders: builder.query<Order[], void>({
            query: () => ({
                url: `/admin/orders`,
                headers: {"Authorization": `Bearer ${token}`}
            })
        })
    })
})

export const {useGetAllUsersQuery,useGetAllOrdersQuery} = adminApi

