// Libraries
import { Component } from "react";

// Components
import Header from "../../components/Header";

// Assets
import styles from "./styles.scss";

class Interview extends Component {
    render() {
        return (
            <div className={ styles.main }>
				<Header />
            </div>
        );
    }
}

export default Interview;