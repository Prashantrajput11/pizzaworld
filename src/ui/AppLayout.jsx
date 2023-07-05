import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div>
			<Header />

			<main>
				<h1>COTENT</h1>
				<Outlet />
			</main>

			<CartOverView />
		</div>
	);
};

export default AppLayout;
