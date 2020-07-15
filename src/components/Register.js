import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import fondoHome from "../assets/image/fondo-homepage.jpg";

const useStyle = makeStyles({
	container: {
		display: "flex",
		width: "100%",
		height: "100%",
		backgroundImage: `url(${fondoHome})`,
		backgroundSize: "cover",
		color: "#eee",
		justifyContent: "center",
		alignItems: "center",
	},
	containerLogin: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		margin: 0,
		backgroundColor: `rgba(9,10,10,0.5)`,
		height: "70%",
		width: "400px",
		justifyContent: "center",
		marginTop: "50px",
		borderRadius: "5px",
		// border: '1px solid #eee'
	}
})


const Register = () => {
	return (

		<Fragment>
			<Header />

		</Fragment>
	);
};

export default Register;
