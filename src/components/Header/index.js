// Libraries
import React from "react";

// Assets
import styles from "./styles.scss";

class Header extends React.Component {
	render() {
		return (
			<div className={ styles.header }>
				<h1>Interview Excercise!</h1>
			</div>
		);
	}
}

export default Header;