import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Muted from "components/Typography/Muted.js";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";
import componentStyles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/collections";

const usePageStyle = makeStyles({
	...basicsStyles,
	...componentStyles,
	...pageStyles,
});
const useHeaderStyle = makeStyles(styles);

export default function Header(props) {
	const classes = useHeaderStyle();
	const pageClasses = usePageStyle();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	React.useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener("scroll", headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	});
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};
	const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed,
	});
	const brandComponent = (
		<div className={classes.brand}>
			<Link href="/" as="/">
				<Button className={classes.title}>
					<img src={"/img/logos/logo.svg"} width={200} height={52} />
				</Button>
			</Link>
			<div className={pageClasses.searchContainer}>
				<div className={pageClasses.searchBar}>
					<img
						src={"/img/logos/ic_search.svg"}
						width={24}
						height={24}
					/>
					<input
						type="text"
						style={{ fontSize: 16 }}
						placeholder={"Search designers, produt managers etc"}
					/>
				</div>
			</div>
			<Hidden mdUp>
				<div style={{ display: "flex", gap: 20, alignItems: "center" }}>
					<div style={{ marginRight: 20 }}>
						<h3
							className={classes.title}
							style={{
								margin: 0,
								color: "black",
								fontSize: 20,
								fontWeight: 600,
								fontFamily: "Inter",
								paddingLeft: 0,
								paddingRight: 0,
							}}
						>
							Hey User ,
						</h3>
						<Muted>
							<p style={{ fontSize: 16, fontFamily: "Inter" }}>
								How's your day going?
							</p>
						</Muted>
					</div>
					<img src={"/img/logos/helper.svg"} width={20} height={20} />
					<img src={"/img/logos/bell.svg"} width={20} height={20} />
				</div>
				<div className={classes.choose}>
					<Button className="active" round>
						Search individuals
					</Button>
					<Button className="active" round>
						Post Opportunity
					</Button>
				</div>
			</Hidden>
		</div>
	);
	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandComponent : null}
				<div className={classes.flex1}>
					{leftLinks !== undefined ? (
						<Hidden smDown implementation="css">
							{leftLinks}
						</Hidden>
					) : (
						brandComponent
					)}
				</div>
				<Hidden smDown implementation="css">
					{rightLinks}
				</Hidden>
				{/* <Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Hidden> */}
			</Toolbar>
			<Hidden mdUp implementation="js">
				<Drawer
					variant="temporary"
					anchor={"right"}
					open={mobileOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={handleDrawerToggle}
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
					</div>
				</Drawer>
			</Hidden>
		</AppBar>
	);
}

Header.defaultProp = {
	color: "#5E5E5E",
};

Header.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"transparent",
		"white",
		"rose",
		"dark",
	]),
	rightLinks: PropTypes.node,
	leftLinks: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			"primary",
			"info",
			"success",
			"warning",
			"danger",
			"transparent",
			"white",
			"rose",
			"dark",
		]).isRequired,
	}),
};
