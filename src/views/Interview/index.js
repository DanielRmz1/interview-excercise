// Libraries
import { Component } from "react";

// Components
import Header from "../../components/Header";
import Content from "../../components/Content";

// Assets
import styles from "./styles.scss";

class Interview extends Component {
    render() {
        return (
            <div className={ styles.main }>
				<Header />
				<Content />
            </div>
        );
    }
}

export default Interview;