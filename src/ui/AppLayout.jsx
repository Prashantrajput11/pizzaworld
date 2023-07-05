import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";

const AppLayout = () => {
	return (
		<div>
			<Header />

			<main>
				<h1>CONTENT</h1>
			</main>

			<CartOverView />
		</div>
	);
};

export default AppLayout;
