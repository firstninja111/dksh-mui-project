import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import HeaderLinks from "./Header/HeaderLinks.js";
import MobileFooter from "./Footer/MobileFooter.js";
import Hidden from "@material-ui/core/Hidden";

const dashboardRoutes = [];

export default function Layout({ children }) {
	return (
		<>
			<Header
				color="transparent"
				routes={dashboardRoutes}
				brand="BoatSail.io"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 70,
					color: "dark",
				}}
			/>

			{children}

			<Hidden mdUp>
				<MobileFooter />
			</Hidden>
		</>
	);
}
