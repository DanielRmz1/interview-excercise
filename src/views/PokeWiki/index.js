// Libraries
import { Component } from "react";

// Components
import Pokemon from "../../components/Pokemon";
import Header from "../../components/Header";

// Assets
import styles from "./styles.scss";
import { getPokemons } from "../../libs/api";

class PokeWiki extends Component {
	componentDidMount = async() => {
		const result = await getPokemons();
		console.log(result);
	}
    render() {
        return (
            <div className={ styles.main }>
				<Header className={ styles.header } />
				<div className={ styles.pokemonsWrapper }>
					<Pokemon id={ 1 } />
				</div>
			</div>
        );
    }
}

export default PokeWiki;