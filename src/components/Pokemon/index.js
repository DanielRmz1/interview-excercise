import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// Assets
import styles from "./styles.scss";

class Pokemon extends React.Component {
	static propTypes = {
		id: PropTypes.any,
		className: PropTypes.string
	}

	render() {
		const { id, className } = this.props;
		return (
			<div className={ classnames(className, styles.pokemon) }>
				{ id }
			</div>
		);
	}
}

export default Pokemon;
