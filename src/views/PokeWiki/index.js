// Libraries
import React, { Component } from "react";

// Components
import Pokemon from "../../components/Pokemon";
import Header from "../../components/Header";

// Assets
import styles from "./styles.scss";
import { getPokemons } from "../../libs/api";

class PokeWiki extends Component {
	constructor(props) {
		super(props);
		this.pokemonsContainerRef = React.createRef();
	}

	pokemonsContainerRef = null;

	state = {
		pokemons: null
	}

	componentDidMount = async() => {
		const { results } = await getPokemons();
		this.setState({ pokemons: results });
	}

    render() {
		const { pokemons } = this.state;
        return (
            <div className={ styles.main }>
				<Header className={ styles.header } />
				<div className={ styles.pokemonsWrapper }>
					{
						pokemons
							? pokemons.map((data, index) => <Pokemon key={ index } { ...data } />)
							: "Loading"
					}
				</div>
			</div>
        );
    }
}

export default PokeWiki;