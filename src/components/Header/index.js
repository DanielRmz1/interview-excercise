import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// Assets
import styles from "./styles.scss";

class Header extends React.Component {
	static propTypes = {
		id: PropTypes.any,
		className: PropTypes.string
	}

	render() {
		const { className } = this.props;
		return (
			<div className={ classnames(className, styles.header) }>
				PokeApi Challenge
			</div>
		);
	}
}

export default Header;
