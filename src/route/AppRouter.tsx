import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "../layout/root/Root";
import Home from "../features/home/page/Home";

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            element: <Root/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                }
            ]
        }
    ]);


    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;