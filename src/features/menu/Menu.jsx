import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";

function Menu() {
	const menu = useLoaderData();
	console.log(menu);
	return (
		<ul>
			{menu.map((pizza) => {
				return <MenuItem pizza={pizza} key={pizza.id} />;
			})}
		</ul>
	);
}

// This loader fuction returns whatever data that needs to be provided to the page.
// in this case page (menu) need menu data
export async function loader() {
	const menu = await getMenu();
	return menu;
}

export default Menu;
