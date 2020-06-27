// import React,{ Component } from 'react';
// import { Redirect, Route } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => {
//     <Route {...rest}
//         render={({ location }) => localStorage.getItem('token') ? (
//         Component
//     ) : (
//         <Redirect
//             to={{
//                 pathname:"/",
//                 state:{from:location}
//             }}
//         />
//         )}
//     />
// }
// export default PrivateRoute;