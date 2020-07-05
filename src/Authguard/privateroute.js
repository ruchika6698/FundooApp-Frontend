import React from "react";
import { Redirect, Route } from "react-router-dom";

const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest);
	return React.createElement(component, finalProps);
};

export const PrivateRoute = ({ component,...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>{
				 return localStorage.getItem("Token") ? (
					renderMergedProps(component, props, rest)
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: props.location },
						}}
					/>
				)
			}
			}
		/>
	);
};
export default PrivateRoute;