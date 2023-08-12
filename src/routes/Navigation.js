import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { map } from "lodash"
import routes from './routes';

export function Navigation() {
    return (

        <BrowserRouter>
            <Routes>
                {map(routes, (route, index) => (
                    <Route
                        path={route.path}
                        exact={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
        // <Router>


        //     {map(routes, (route, index) => (
        //         <Route
        //             key={index}
        //             path={route.path}
        //             exact={route.exact}
        //             render={(props) => (
        //                 <route.layout>
        //                     <route.component {...props} />
        //                 </route.layout>
        //             )}
        //         />
        //     ))}


        // </Router>
    );
}
