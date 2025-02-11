import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "../layout/root/Root";
import Home from "../features/home/page/Home";
import Career from "../features/career/page/Career";

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            element: <Root/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/career",
                    element: <Career/>
                }
            ]
        }
    ]);


    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;