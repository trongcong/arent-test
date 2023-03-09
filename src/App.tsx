import React from 'react';
import DefaultLayout from "./layouts/DefaultLayout";
import {Navigate, Route, Routes} from "react-router-dom";
import TopPage from "./pages/TopPage";
import NotFound from "./pages/NotFound";
import {ROUTES} from "./common/constants";
import MyRecordPage from "./pages/MyRecordPage";
import ColumnPage from "./pages/ColumnPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<TopPage/>}/>
                <Route path={ROUTES.record} element={<MyRecordPage/>}/>
                <Route path={ROUTES.column} element={<ColumnPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
