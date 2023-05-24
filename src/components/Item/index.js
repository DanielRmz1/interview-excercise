import React from "react";
import styles from "./styles.scss";
import PropTypes from 'prop-types';

class Item extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		id: PropTypes.number
	}

	render() {
		const { title, id } = this.props;
		const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
		return (
			<div className={ styles.item }>
				<div className={ styles.image }>
					<img src={image} alt={title} />
				</div>
				<div className={ styles.detail }>
					{ title }
				</div>
			</div>
		)
	}

}

export default Item;