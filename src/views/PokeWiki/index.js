// Libraries
import { Component } from "react";

// Components
import Pokemon from "../../components/Pokemon";

// Assets
import styles from "./styles.scss";

class PokeWiki extends Component {
    render() {
        return (
            <div className={ styles.main }>
				<div className={ styles.pokemonsWrapper }>
					<Pokemon id={ 1 } />
				</div>
			</div>
        );
    }
}

export default PokeWiki;