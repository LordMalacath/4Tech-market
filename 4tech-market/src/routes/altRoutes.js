import Content from "components/content/Content";
import MainPage from "pages/main/MainPage";
import { Route } from "react-router-dom";




export default function Routes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={MainPage} />
                <Route path="categories" element={<Categories />} >
                    <Route path="/content" element={<Content />}
                </Route>
                <Route path="item/:id" element={<Item />} />
                <Route path="content" element={<Content />} />
                <Route path="additem" element={
                    <ProtectedRoute>
                        <AddItem />
                    </ProtectedRoute>} />
            </Route>
        </Routes>
    )
};