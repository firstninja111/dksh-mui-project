import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
	grid: {
		position: "relative",
		width: "100%",
		minHeight: "1px",
		paddingRight: "15px",
		paddingLeft: "15px",
		flexBasis: "auto",
		padding: "15px",
		background: "transparent",

		"& .innerBox": {
			background: "white",
			borderRadius: 16,

			"& .left, &.right": {
				width: "50%",
			},

			"& .individual-banner": {
				width: "100%",
				borderRadius: 10,
			},
		},
	},
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
	const classes = useStyles();
	const { children, className, ...rest } = props;
	return (
		<Grid item {...rest} className={classes.grid + " " + className}>
			<div className="innerBox">{children}</div>
		</Grid>
	);
}

GridItem.defaultProps = {
	className: "",
};

GridItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
