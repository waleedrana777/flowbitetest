import Head from "next/head";
import styles from "../styles/Home.module.css";
import Table from "../components/Table.jsx";
import React from "react";
import Accordian from "../components/Accordian";

export default function Home() {
	return (
		<React.Fragment>
			<Table />
			<Accordian />
		</React.Fragment>
	);
}
