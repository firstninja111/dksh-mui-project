import { defaultFont } from "styles/jss/nextjs-material-kit.js";

import tooltip from "styles/jss/nextjs-material-kit/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
	list: {
		...defaultFont,
		fontSize: "14px",
		margin: 0,
		paddingLeft: "0",
		listStyle: "none",
		paddingTop: "0",
		paddingBottom: "0",
		color: "#5E5E5E",
		display: "flex",
		justifyContent: "center",
	},
	listItem: {
		float: "left",
		color: "#5E5E5E",
		position: "relative",
		display: "block",
		width: "auto",
		margin: "0",
		padding: "0",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			"&:after": {
				width: "calc(100% - 30px)",
				content: '""',
				display: "block",
				height: "1px",
				marginLeft: "15px",
				backgroundColor: "#e5e5e5",
			},
		},
	},
	listItemText: {
		padding: "0 !important",
	},

	img: {
		width: "40px",
		height: "40px",
		borderRadius: "50%",
	},
	imageDropdownButton: {
		[theme.breakpoints.down("md")]: {
			top: "0",
			margin: "5px 15px",
		},
		padding: "0px",
		top: "4px",
		borderRadius: "50%",
		marginLeft: "5px",
	},

	navLink: {
		color: "#5E5E5E",
		position: "relative",
		padding: "16px 20px",
		fontWeight: "600",
		fontSize: "14px",
		textTransform: "uppercase",
		borderRadius: "3px",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px 15px",
		display: "inline-flex",
		flexDirection: "column",
		transition: "all 0.3s",
		"@media (max-width: 992px)": {
			padding: 0,
			margin: "0px 8px",
		},
		"@media (max-width: 1200px)": {
			padding: 0,
			margin: "0px 5px",
		},

		[theme.breakpoints.down("sm")]: {
			width: "calc(100% - 30px)",
			marginLeft: "15px",
			marginBottom: "8px",
			marginTop: "8px",
			textAlign: "left",
			"& > span:first-child": {
				justifyContent: "flex-start",
			},
		},

		"&:before": {
			content: '""',
			position: "absolute",
			bottom: 0,
			width: 0,
			left: 0,
			height: "2px",
			background: "#575757",
			transition: "width 0.3s ease",
		},

		"&:hover:before": {
			width: "50%",
			transition: "width 0.5s ease",
		},

		"&:after": {
			content: '""',
			position: "absolute",
			bottom: 0,
			width: 0,
			right: 0,
			height: "2px",
			background: "#575757",
			transition: "width 0.3s ease",
		},

		"&:hover:after": {
			width: "50%",
			transition: "width 0.5s ease",
		},

		"&:hover": {
			color: "#575757",
			transition: "all 0.3s",
		},
	},
	activeLink: {
		"& *": {
			width: "50%",
			color: "#575757",
			transition: "all 0.3s",
		},

		"&:before": {
			width: "50%",
			transition: "width 0.5s ease",
		},

		"&:after": {
			width: "50%",
			transition: "width 0.5s ease",
		},
	},
	notificationNavLink: {
		[theme.breakpoints.down("md")]: {
			top: "0",
			margin: "5px 15px",
		},
		color: "#FFF",
		padding: "0.9375rem",
		fontWeight: "400",
		fontSize: "12px",
		textTransform: "uppercase",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px",
		display: "inline-flex",
		top: "4px",
	},
	registerNavLink: {
		[theme.breakpoints.down("md")]: {
			top: "0",
			margin: "5px 15px",
		},
		top: "3px",
		position: "relative",
		fontWeight: "400",
		fontSize: "12px",
		textTransform: "uppercase",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px",
		display: "inline-flex",
	},
	navLinkActive: {
		color: "#5E5E5E",
		backgroundColor: "rgba(255, 255, 255, 0.1)",
	},
	icons: {
		width: "20px",
		height: "20px",
		marginRight: "3px",
	},
	socialIcons: {
		position: "relative",
		fontSize: "20px !important",
		marginRight: "4px",
	},
	dropdownLink: {
		"&,&:hover,&:focus": {
			color: "#5E5E5E",
			textDecoration: "none",
			display: "block",
			padding: "10px 20px",
		},
	},
	...tooltip,
	marginRight5: {
		marginRight: "5px",
	},
});

export default headerLinksStyle;
