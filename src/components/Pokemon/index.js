import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// Assets
import styles from "./styles.scss";
import { getPokemonDetail } from "../../libs/api";

class Pokemon extends React.Component {
	static propTypes = {
		url: PropTypes.string,
		name: PropTypes.string,
		className: PropTypes.string
	}

	state = {
		data: null
	}

	componentDidMount = async() => {
		const { url } = this.props;
		const result = await getPokemonDetail(url);
		this.setState({ data: result });
	}

	render() {
		const {  name, className } = this.props;
		const { data } = this.state;
		if (!data) {
			return (
				"Loading"
			);
		}
		const { sprites: { front_shiny: imageUrl }, sprites } = data;
		console.log(sprites);
		return (
			<div className={ classnames(className, styles.pokemon) }>
				<img src={ imageUrl } alt="" />
				<div className={ styles.detail }>
					<div className={ styles.name }>{ name }</div>
				</div>
			</div>
		);
	}
}

export default Pokemon;
