import React, { Component } from "react";
import Router from "next/router";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";
import Paginations from "components/Pagination/Pagination.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {
	AddLocationOutlined,
	Instagram,
	AccessAlarmOutlined,
	AlarmOnOutlined,
} from "@material-ui/icons";
import styles from "styles/jss/nextjs-material-kit/pages/individualPage.js";
import Muted from "components/Typography/Muted.js";
const useStyles = makeStyles(styles);

export default function Index(props) {
	const classes = useStyles();

	return (
		<Parallax filter responsive className={classes.parallax}>
			<Grid container className={classes.container}>
				<Grid item xs={12} lg={4} className={classes.leftContainer}>
					<div className="subContainer">
						<img
							src="/img/faces/avatar.jpg"
							alt="..."
							width={150}
							height={150}
							className={
								classes.imgRoundedCircle +
								" " +
								classes.imgFluid
							}
						/>
						<div style={{ display: "flex", alignItems: "center" }}>
							<h3 className={classes.name}>AjayPwriya</h3>
							<img
								src="/img/logos/certificate.svg"
								alt="..."
								width={19}
								height={19}
							/>
						</div>
						<Muted>
							<p style={{ margin: "5px 0px" }}>
								A problem well understand is a problem half
								solved
							</p>
						</Muted>
						<div className={classes.tabLayer}>
							<Button round>Ui/Ux Designer</Button>
							<Button round>Product Designer</Button>
							<Button round>User Researcher</Button>
						</div>
						<div className={classes.getInTouch}>
							<Button className="active" round>
								Get in Touch
							</Button>
						</div>
						<Muted>
							<p
								style={{
									margin: "15px 60px",
									textAlign: "center",
									fontSize: 12,
								}}
							>
								A successful UI UX designer is skilled in
								user-centered design, design thinking, visual
								design, and has a deep understanding of
								human-computer interaction.
							</p>
						</Muted>
						<div style={{ display: "flex", gap: 10 }}>
							<AddLocationOutlined style={{ fill: "#2e6ecc" }} />
							<span style={{ color: "#2e6ecc" }}>Pakistan</span>
						</div>
						<div
							style={{ display: "flex", gap: 20, marginTop: 15 }}
						>
							<Instagram style={{ fill: "#2e6ecc" }} />
							<img
								src="/img/logos/be.svg"
								alt="..."
								width={25}
								height={25}
							/>
							<img
								src="/img/logos/dribble.svg"
								alt="..."
								width={25}
								height={25}
							/>
						</div>
						<div
							style={{
								margin: "15px 60px",
								padding: 20,
								border: "solid 1px #2e6ecc",
								boxShadow: "3px 5px 3px 1px rgb(0 0 0 / 14%)",
							}}
						>
							<h3
								className={classes.title}
								style={{
									// margin: "0px 0px 20px 0px",
									margin: 0,
									paddingBottom: 10,
									fontSize: 20,
									borderBottom: "solid 1px #2e6ecc55",
								}}
							>
								Hire Me
							</h3>
							<div
								style={{
									display: "flex",
									gap: 5,
									padding: "10px 0px",
									borderBottom: "solid 1px #2e6ecc55",
								}}
							>
								<AccessAlarmOutlined
									style={{ fill: "#2e6ecc" }}
								/>
								<h3
									className={classes.title}
									style={{
										margin: 0,
										fontSize: 18,
									}}
								>
									Short Term Project
								</h3>
							</div>
							<div
								style={{
									display: "flex",
									gap: 5,
									padding: "10px 0px",
								}}
							>
								<AlarmOnOutlined style={{ fill: "#2e6ecc" }} />
								<div>
									<h3
										className={classes.title}
										style={{
											margin: 0,
											fontSize: 18,
										}}
									>
										Long Term Project
									</h3>
									<Muted>
										<p>
											Availability: Within the next few
											weeks
										</p>
									</Muted>
								</div>
							</div>
							<div className={classes.getInTouch}>
								<Button className="active" round>
									Send Customer Offer
								</Button>
							</div>
						</div>
						<div style={{ width: "100%", marginTop: 50 }}>
							<h3
								className={classes.title}
								style={{
									margin: 0,
									fontSize: 18,
								}}
							>
								About
							</h3>
							<Muted>
								<p>
									Nine years of experience as a full stack
									developer with various companies working on
									a range of web and mobile applications
									allowed me to develop the operational,
									technical, and creative skills. In
									collaboration with the development team, we
									created 75 full stack web applications and
									optimized the quality and efficiency of the
									build process (time to market reduced by 25
									percent). Three of our applications for one
									of your competitors supported a cumulative 4
									million requests a month. I know that you
									have similar ambitions. My proficiency in
									Python, Ruby, HTML, CSS, JavaScript and SQL
									has allowed me to bridge the gap between
									technical and non-technical audiences.
									Resolving client demands and simplifying
									technical issues was the key to my four
									quarterly service excellence awards. The
									development framework that I used with my
									team was subsequently adopted across the
									company. I also redesigned the help desk
									mechanism, resulting in 20 percent quicker
									bug resolution and a 14 percent bounce in
									user satisfaction. I look forward to the
									opportunity of meeting for an interview to
									understand your plans and where my skills
									may come in useful. Indeed alerted me to the
									opportunity and would be able to provide a
									glowing character reference. Sincerely,
								</p>
							</Muted>
						</div>

						<div style={{ width: "100%", marginTop: 50 }}>
							<h3
								className={classes.title}
								style={{
									margin: 0,
									fontSize: 18,
								}}
							>
								Education
							</h3>
							<Muted>
								<p style={{ fontWeight: "bold", margin: 0 }}>
									Bachelors of Arts
								</p>
								<p style={{ margin: 0 }}>
									University of Education, Lahore
								</p>
								<p style={{ marginBottom: 5 }}>(2016-2022)</p>
							</Muted>
							<Muted>
								<p style={{ fontWeight: "bold", margin: 0 }}>
									Masters in Brand strategy
								</p>
								<p style={{ margin: 0 }}>
									University of Education, Lahore
								</p>
								<p style={{ margin: 0 }}>(2022)</p>
							</Muted>
						</div>
						<div style={{ width: "100%", marginTop: 50 }}>
							<h3
								className={classes.title}
								style={{
									margin: 0,
									fontSize: 18,
								}}
							>
								Skills
							</h3>
							<div
								style={{
									width: "100%",
									display: "flex",
									gap: 5,
								}}
							>
								<img
									src="/img/skills/AI.png"
									alt="..."
									width={45}
									height={45}
								/>
								<img
									src="/img/skills/PS.png"
									alt="..."
									width={45}
									height={45}
								/>
								<img
									src="/img/skills/Figma.png"
									alt="..."
									width={45}
									height={45}
								/>
							</div>
						</div>
						<div style={{ width: "100%", marginTop: 50 }}>
							<h3
								className={classes.title}
								style={{
									margin: 0,
									fontSize: 18,
								}}
							>
								Certifications
							</h3>
							<Muted>
								<p style={{ fontWeight: "bold", margin: 0 }}>
									Ui/Ux Certified
								</p>
								<p style={{ margin: 0 }}>
									Coursera, Ux Design Course
								</p>
								<p style={{ marginBottom: 5 }}>April, 2020</p>
							</Muted>
							<Muted>
								<p style={{ fontWeight: "bold", margin: 0 }}>
									Brand Expert by Coursera
								</p>
								<p style={{ margin: 0 }}>
									Branding and Positioning of the product
								</p>
								<p style={{ margin: 0 }}>June, 2022</p>
							</Muted>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} lg={8} style={{ padding: 15 }}>
					<div className={classes.selectLayer}>
						<Button className="active" round>
							Work
						</Button>
						<Button round>Experience</Button>
						<Button round>Education</Button>
						<Button round>Skills</Button>
						<Button round>Certifications</Button>
						<Button round>Interests</Button>
					</div>
					<div className={classes.gridLayer}>
						<GridContainer style={{ margin: "20x 0px" }}>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/left.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/right.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/left.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/right.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/right.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/left.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/left.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/right.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/right.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/left.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/left.png"
									alt="..."
								/>
							</GridItem>
							<GridItem xs={12} sm={6}>
								<img
									className="individual-banner"
									src="/img/cards/right.png"
									alt="..."
								/>
							</GridItem>
						</GridContainer>
					</div>
				</Grid>
			</Grid>
		</Parallax>
	);
}
