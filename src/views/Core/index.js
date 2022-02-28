// Libraries
import React, { Component } from "react";

// Components
import Header from "../../components/Header";

// Assets
import styles from "./styles.scss";

class Core extends Component {
    render() {
        return (
            <div className={ styles.main }>
				<Header className={ styles.header } />
			</div>
        );
    }
}

export default Core;