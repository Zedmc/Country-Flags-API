import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App.jsx";
import "/src/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Error from "./Components/Error/Error.jsx";
import CountryDetail from "./Components/CountryDetail/CountryDetail.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/:country",
				element: <CountryDetail />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
