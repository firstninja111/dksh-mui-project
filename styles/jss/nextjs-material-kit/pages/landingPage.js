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
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		zIndex: "12",
		color: "#FFFFFF",
		...mainContainer,
		background: "#F4F4F4",
		padding: "30px 150px",
		borderRadius: 10,

		"@media (max-width: 560px)": {
			paddingRight: 0,
			paddingLeft: 0,
		},
	},
	title: {
		...title,
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "24px",
		color: "#FFFFFF",
		textDecoration: "none",
		width: "535px",

		"&+h4": {
			width: "570px",
			margin: "20px auto",
			color: "#979ea5",
		},
	},
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	homeLogoBox: {
		textAlign: "center",
		marginTop: "90px",
		marginBottom: "60px",

		"& img": {
			width: "48px",
			height: "48px",
			marginLeft: "10px",
			marginRight: "10px",
		},
	},
	textCenter: {
		textAlign: "center",
	},
	searchLabel: {
		width: "90%",
	},
	selectLayer: {
		width: "90%",
		display: "flex",
		justifyContent: "space-between",
		"& button": {
			fontSize: 20,
			color: " #5E5E5E",
			background: "white",
			padding: "4px 16px",
			textTransform: "initial",
			"@media (max-width: 560px)": {
				fontSize: 14,
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
		"@media (max-width: 560px)": {
			gap: 5,
			flexWrap: "initial",
			overflow: "auto",
			justifyContent: "start",
			paddingBottom: 5,
		},
	},

	gridLayer: {
		width: "90%",
		margin: "40px 0px",
	},

	gridHeader: {
		padding: 16,
		display: "flex",
	},

	cardTag: {
		display: "flex",
		gap: 5,
		padding: "10px 10px 20px 10px",

		"& .designer": {
			padding: "1px",
			borderRadius: 100,
			background: "-webkit-linear-gradient(left, #FBDA61, #FF5ACD)",
		},
		"& .designer div": {
			background: "white",
			borderRadius: 100,
		},
		"& .designer div span": {
			padding: "6px 12px",
			background: "-webkit-linear-gradient(left, #FBDA61, #FF5ACD)",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			textTransform: "uppercase",
			fontSize: 9,
			fontWeight: 800,
			"@media (max-width: 500px)": {
				fontSize: 8,
			},
		},

		"& .prototyper": {
			padding: "1px",
			borderRadius: 100,
			background: "-webkit-linear-gradient(left, #00DBDE, #FC00FF)",
		},
		"& .prototyper div": {
			background: "white",
			borderRadius: 100,
		},
		"& .prototyper div span": {
			padding: "6px 12px",
			background: "-webkit-linear-gradient(left, #00DBDE, #FC00FF)",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			textTransform: "uppercase",
			fontSize: 9,
			fontWeight: 800,
			"@media (max-width: 500px)": {
				fontSize: 8,
			},
		},
	},
	cardBanner: {
		display: "flex",
		"& img.left": {
			width: "50%",
			borderRadius: "0px 0px 0px 16px",
		},
		"& img.right": {
			width: "50%",
			borderRadius: "0px 0px 16px 0px",
		},
	},

	paginationLayer: {
		width: "90%",
		// margin: "0px 0px 30px 0px",
		"@media (max-width: 576px)": {
			display: "none",
		},
	},

	...imagesStyle,
	...typographyStyle,
};

export default landingPageStyle;
