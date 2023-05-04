import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";
import Paginations from "components/Pagination/Pagination.js";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
const useStyles = makeStyles(styles);

export default function Index(props) {
	const classes = useStyles();

	return (
		<Parallax
			filter
			responsive
			image="/img/bg8.jpg"
			className={classes.parallax}
		>
			<div className={classes.container}>
				<Hidden mdUp>
					<div className={classes.searchLabel}>
						<Muted>
							<p style={{ color: "black" }}>
								Search the individuals wth skills
							</p>
						</Muted>
					</div>
				</Hidden>
				<div className={classes.selectLayer}>
					<Button className="active" round>
						All
					</Button>
					<Button className="active" round>
						Design
					</Button>
					<Button round>Social Media</Button>
					<Button round>Video Editing</Button>
					<Button round>Ui/Ux Designer</Button>
					<Button round>Adobe Creative Suite</Button>
					<Button round>Brand Expert</Button>
					<Button round>Visual Designer</Button>
					<Button round>After Effects</Button>
				</div>
				<div className={classes.gridLayer}>
					<GridContainer style={{ margin: "30x 0px" }}>
						{Array(8)
							.fill(1)
							.map((el, i) => (
								<GridItem xl={3} lg={6} md={6} xs={12} key={i}>
									<Link href="/individual">
										<div>
											<div className={classes.gridHeader}>
												<div
													style={{
														display: "flex",
														alignItems: "center",
														minWidth: 65,
													}}
												>
													<img
														src="/img/faces/avatar.jpg"
														alt="..."
														width={62}
														height={62}
														className={
															classes.imgRoundedCircle +
															" " +
															classes.imgFluid
														}
													/>
												</div>

												<div style={{ marginLeft: 10 }}>
													<h3
														className={
															classes.title
														}
														style={{
															margin: 0,
															fontSize: 17,
															minHeight: 24,
														}}
													>
														Prinyaka Dine
													</h3>
													<Muted>
														<p
															className="truncate"
															style={{
																margin: "5px 0px",
															}}
														>
															A problem well
															understand is a
															problem and this is
															second line text
														</p>
													</Muted>
													<div
														style={{
															display: "flex",
														}}
													>
														<img
															src="/img/logos/icon_profile.svg"
															alt="..."
															width={13}
															height={16}
															className={
																classes.imgRoundedCircle +
																" " +
																classes.imgFluid
															}
															style={{
																marginRight: 5,
															}}
														/>
														<Primary>
															View Profile
														</Primary>
													</div>
												</div>
											</div>
											<div className={classes.cardTag}>
												<div className="designer">
													<div>
														<span>
															Product designer
														</span>
													</div>
												</div>
												<div className="prototyper">
													<div>
														<span>Prototyper</span>
													</div>
												</div>
												<div className="designer">
													<div>
														<span>Researcher</span>
													</div>
												</div>
											</div>
											<div className={classes.cardBanner}>
												<img
													className="left"
													src="/img/cards/left.png"
													alt="..."
												/>
												<img
													className="right"
													src="/img/cards/right.png"
													alt="..."
												/>
											</div>
										</div>
									</Link>
								</GridItem>
							))}
					</GridContainer>
				</div>
				<div className={classes.paginationLayer}>
					<Paginations
						pages={[
							{ active: true, text: 1 },
							{ text: 2 },
							{ text: 3 },
							{ text: 4 },
							{ text: 5 },
							{ text: 6 },
							{ text: 7 },
							{ text: 8 },
							{ text: 9 },
						]}
					/>
				</div>
			</div>
		</Parallax>
	);
}
