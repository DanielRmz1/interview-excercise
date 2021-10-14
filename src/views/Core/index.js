import { Component } from "react";

import styles from "./styles.scss";

class Core extends Component {
    render() {
        return (
            <div className={ styles.main }>
                <h1>Hello world!</h1>
            </div>
        );
    }
}

export default Core;