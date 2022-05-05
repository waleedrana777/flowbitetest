import Head from "next/head";
import styles from "../styles/Home.module.css";
import Table from "../components/Table.jsx";
import React from "react";
import MyAccordian from "../components/MyAccordian.jsx";

export default function Home() {
	return (
		<React.Fragment>
			<Table />
			<div className='m-4'>
				<MyAccordian />
			</div>
		</React.Fragment>
	);
}
