import {
	container,
	hexToRGBAlpha,
	defaultFont,
	primaryColor,
	infoColor,
	successColor,
	warningColor,
	dangerColor,
	roseColor,
	transition,
	boxShadow,
	drawerWidth,
	title,
	grayColor,
} from "styles/jss/nextjs-material-kit.js";

const headerStyle = {
	appBar: {
		display: "flex",
		border: "0",
		borderRadius: "3px",
		padding: "0.625rem 0",
		marginBottom: "20px",
		color: "#555",
		width: "100%",
		backgroundColor: "#fff",
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
		transition: "all 150ms ease 0s",
		alignItems: "center",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		position: "relative",
		zIndex: "unset",
	},
	absolute: {
		position: "absolute",
		zIndex: "1100",
	},
	fixed: {
		position: "fixed",
		zIndex: "1100",
	},
	container: {
		...container,
		minHeight: "50px",
		flex: "1",
		alignItems: "center",
		justifyContent: "space-between",
		display: "flex",
		flexWrap: "nowrap",
	},
	flex1: {
		flex: 1,
	},
	brand: {
		display: "flex",
		flexDirection: "row",
		"@media (max-width: 960px)": {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	},
	title: {
		...defaultFont,
		lineHeight: "30px",
		fontSize: "18px",
		borderRadius: "3px",
		textTransform: "none",
		color: "#5E5E5E",
		padding: "8px 16px",
		letterSpacing: "unset",
		color: "#BE0028",
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: 700,
		"&:hover,&:focus": {
			background: "transparent",
		},
		"& img": {
			width: 100,
			height: 52,

			"@media (min-width: 576px)": {
				width: 110,
			},
			"@media (min-width: 768px)": {
				width: 120,
			},
			"@media (min-width: 1220px)": {
				width: 140,
			},
			"@media (min-width: 1500px)": {
				width: 150,
			},
		},
	},
	appResponsive: {
		margin: "20px 10px",
	},
	primary: {
		backgroundColor: primaryColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			primaryColor,
			0.46
		)}`,
	},
	info: {
		backgroundColor: infoColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			infoColor,
			0.46
		)}`,
	},
	success: {
		backgroundColor: successColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			successColor,
			0.46
		)}`,
	},
	warning: {
		backgroundColor: warningColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			warningColor,
			0.46
		)}`,
	},
	danger: {
		backgroundColor: dangerColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			dangerColor,
			0.46
		)}`,
	},
	rose: {
		backgroundColor: roseColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			roseColor,
			0.46
		)}`,
	},
	transparent: {
		backgroundColor: "transparent !important",
		boxShadow: "none",
		paddingTop: "25px",
		color: "#FFFFFF",
	},
	dark: {
		color: "#FFFFFF",
		backgroundColor: "#FEFEFE !important",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)",
	},
	white: {
		border: "0",
		padding: "0.625rem 0",
		marginBottom: "20px",
		color: "#555",
		backgroundColor: "#fff !important",
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
	},
	drawerPaper: {
		border: "none",
		bottom: "0",
		transitionProperty: "top, bottom, width",
		transitionDuration: ".2s, .2s, .35s",
		transitionTimingFunction: "linear, linear, ease",
		width: drawerWidth,
		...boxShadow,
		position: "fixed",
		display: "block",
		top: "0",
		height: "100vh",
		right: "0",
		left: "auto",
		visibility: "visible",
		overflowY: "visible",
		borderTop: "none",
		textAlign: "left",
		padding: 0,
		...transition,

		"& .wallet-button": {
			color: "#BE0028",

			"&:hover": {
				color: "white",
			},
		},
	},
	choose: {
		display: "flex",
		gap: 10,
		margin: "10px 0px",
		"& button": {
			fontSize: 14,
			color: " #5E5E5E",
			fontWeight: 600,
			background: "white",
			padding: "10px 24px",
			borderRadius: 100,
			textTransform: "initial",
			"@media (max-width: 400px)": {
				fontSize: 12,
				fontWeight: "normal",
			},
		},

		"& button.active": {
			color: "white",
			background: "#2E6ECC",
		},
	},
};

export default headerStyle;
