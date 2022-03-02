import React from "react";
import styles from "./styles.scss";
import PropTypes from 'prop-types';

class Item extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		photo: PropTypes.string
	}

	render() {
		const { title, photo } = this.props;
		return (
			<div className={ styles.item } style={ { backgroundImage: `url("${photo}")` } }>
				<div className={ styles.detail }>
					{ title }
				</div>
			</div>
		)
	}

}

export default Item;