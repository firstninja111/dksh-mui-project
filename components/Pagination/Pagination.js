import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import {
	KeyboardArrowLeftOutlined,
	KeyboardArrowRightOutlined,
} from "@material-ui/icons";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "styles/jss/nextjs-material-kit/components/paginationStyle.js";

const useStyles = makeStyles(styles);

export default function Pagination(props) {
	const classes = useStyles();
	const { pages, color } = props;
	return (
		<ul className={classes.pagination}>
			<li className={classes.paginationPrev}>
				<Button>
					<KeyboardArrowLeftOutlined />
					<span>Previous</span>
				</Button>
			</li>
			{pages.map((prop, key) => {
				const paginationLink = classNames({
					[classes.paginationLink]: true,
					[classes.active]: prop.active,
					[classes.disabled]: prop.disabled,
				});
				return (
					<li className={classes.paginationItem} key={key}>
						{prop.onClick !== undefined ? (
							<Button
								onClick={prop.onClick}
								className={paginationLink}
							>
								{prop.text}
							</Button>
						) : (
							<Button
								onClick={() =>
									alert("you've clicked " + prop.text)
								}
								className={paginationLink}
							>
								{prop.text}
							</Button>
						)}
					</li>
				);
			})}
			<li className={classes.paginationNext}>
				<Button>
					<span>Next</span>
					<KeyboardArrowRightOutlined />
				</Button>
			</li>
		</ul>
	);
}

Pagination.defaultProps = {
	color: "primary",
};

Pagination.propTypes = {
	pages: PropTypes.arrayOf(
		PropTypes.shape({
			active: PropTypes.bool,
			disabled: PropTypes.bool,
			text: PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.oneOf(["PREV", "NEXT", "..."]),
			]).isRequired,
			onClick: PropTypes.func,
		})
	).isRequired,
	color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
};
