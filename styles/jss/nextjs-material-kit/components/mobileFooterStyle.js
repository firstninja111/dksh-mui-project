import { container, primaryColor } from "styles/jss/nextjs-material-kit.js";
import imagesStyle from "styles/jss/nextjs-material-kit/imagesStyles.js";

const footerStyle = {
	container: {
		// ...container,
		position: "fixed",
		bottom: 0,
		left: 0,
		width: "100%",
		height: 56,
		boxShadow:
			"-1px -10px 11px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(33 33 33 / 46%)",
		zIndex: 20,
		background: "white",
	},
	footerGrid: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	...imagesStyle,
};
export default footerStyle;
