import {
	container as mainContainer,
	title,
} from "styles/jss/nextjs-material-kit.js";
import imagesStyle from "styles/jss/nextjs-material-kit/imagesStyles.js";
import typographyStyle from "styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const landingPageStyle = {
	parallax: {
		marginTop: 150,
		marginBottom: 50,
		"@media (max-width: 960px)": {
			marginTop: 250,
		},
	},
	container: {
		zIndex: "12",
		color: "#FFFFFF",
		...mainContainer,
		background: "#F4F4F4",
		padding: "30px 150px",
		borderRadius: 10,
	},
	leftContainer: {
		padding: 15,
		"& .subContainer": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			background: "white",
			padding: 30,
		},
	},
	name: {
		padding: "6px 12px",
		background: "-webkit-linear-gradient(left, #FBDA61, #FF5ACD)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		textTransform: "initial",
		fontSize: 30,
		fontWeight: 700,
		margin: 0,
	},
	tabLayer: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		"& button": {
			fontSize: 20,
			color: " #5E5E5E",
			background: "white",
			padding: "4px 16px",
		},

		"& button.active": {
			color: "white",
			background: "#2E6ECC",
		},
	},
	getInTouch: {
		marginTop: 20,
		display: "flex",
		justifyContent: "center",
		"& button": {
			fontSize: 14,
			color: " #5E5E5E",
			background: "white",
			padding: "10px 110px",

			"@media (max-width: 768px)": {
				padding: "10px 20px",
			},

			"@media (max-width: 1500px)": {
				padding: "10px 50px",
			},
		},

		"& button.active": {
			color: "white",
			background: "#2E6ECC",
		},
	},
	title: {
		...title,
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "32px",
		color: "#FFFFFF",
		textDecoration: "none",
		width: "535px",
		"&+h4": {
			width: "570px",
			margin: "20px auto",
			color: "#979ea5",
		},
	},

	selectLayer: {
		width: "90%",
		display: "flex",
		gap: 10,
		"& button": {
			fontSize: 20,
			color: " #5E5E5E",
			background: "white",
			padding: "4px 16px",
			"@media (max-width: 1500px)": {
				fontSize: 16,
			},
		},

		"& button.active": {
			color: "white",
			background: "#2E6ECC",
		},

		"@media (max-width: 1500px)": {
			flexWrap: "wrap",
			gap: 5,
			justifyContent: "start",
			paddingBottom: 5,
		},
		// "@media (max-width: 560px)": {
		// 	gap: 5,
		// 	flexWrap: "initial",
		// 	overflow: "auto",
		// 	justifyContent: "start",
		// 	paddingBottom: 5,
		// },
	},

	gridLayer: {
		// width: "90%",
		margin: "20px 0px",
	},

	...imagesStyle,
	...typographyStyle,
};

export default landingPageStyle;
