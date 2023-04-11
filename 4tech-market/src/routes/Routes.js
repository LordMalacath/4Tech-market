import { createBrowserRouter, Outlet } from "react-router-dom";
import Content from "components/content/Content";
import Header from "components/header/Header";
import SideBar from "components/side/SideBar";
import AddItem from "pages/addItem/AddItem";
import Basket from "pages/basket/Basket";
import Categories from "pages/categories/Categories";
import Item from "pages/item/Item";
import MainPage from "pages/main/MainPage";
import WishList from "pages/wishList/WishList";
import { ProtectedRoute } from "./ProtectedRoute";


const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            {
                path: "/categories/:id",
                element: <Content />
            },
            {
                path: "/item/:id",
                element: <Item />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/user/wish",
                element: <WishList />
            },
            {
                path: "/additem",
                element: (
                    <ProtectedRoute>
                        <AddItem />
                    </ProtectedRoute>
                )
            }
        ]
    }
]);

