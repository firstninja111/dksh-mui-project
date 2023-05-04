/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
// material-ui core components
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "styles/jss/nextjs-material-kit/components/mobileFooterStyle.js";
// import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(styles);

export default function Footer() {
	const classes = useStyles();
	let fullUrl = window.location.pathname.split("/");
	let subPage = fullUrl[1];
	console.log("Subpage", subPage);

	return (
		<footer className={classes.container}>
			<Grid container style={{ height: "100%" }}>
				<Grid item xs={3} className={classes.footerGrid}>
					<a href="/">
						<img
							src={
								subPage == ""
									? "/img/logos/mobile/mobileHomeFill.svg"
									: "/img/logos/mobile/mobileHome.svg"
							}
							alt="..."
							width={24}
							height={24}
							className={
								classes.imgRoundedCircle +
								" " +
								classes.imgFluid
							}
						/>
					</a>
				</Grid>
				<Grid item xs={3} className={classes.footerGrid}>
					<a href="/individual">
						<img
							src={
								subPage == "individual"
									? "/img/logos/mobile/mobileNetworkFill.svg"
									: "/img/logos/mobile/mobileNetwork.svg"
							}
							alt="..."
							width={24}
							height={24}
							className={
								classes.imgRoundedCircle +
								" " +
								classes.imgFluid
							}
						/>
					</a>
				</Grid>
				<Grid item xs={3} className={classes.footerGrid}>
					<img
						src="/img/logos/mobile/mobileMessages.svg"
						alt="..."
						width={24}
						height={24}
						className={
							classes.imgRoundedCircle + " " + classes.imgFluid
						}
					/>
				</Grid>
				<Grid item xs={3} className={classes.footerGrid}>
					<img
						src="/img/faces/avatar.jpg"
						alt="..."
						width={24}
						height={24}
						className={
							classes.imgRoundedCircle + " " + classes.imgFluid
						}
					/>
				</Grid>
			</Grid>
		</footer>
	);
}
