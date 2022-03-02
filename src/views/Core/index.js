// Libraries
import React, { Component } from "react";
import { getData } from "../../components/api";
import classnames from "classnames";

// Components
import Header from "../../components/Header";
import Item from "../../components/Item";

// Assets
import styles from "./styles.scss";

class Core extends Component {
	constructor(props) {
		super(props);
		this.loadingRef = React.createRef();
	}

	state = {
		data: [],
		actualPage: 1,
		loading: false,
		previousY: 0
	}

	observer = null;
	loadingRef = null;

	componentDidMount = async() => {
		await this.fetchData();
		this.observer = new IntersectionObserver(this.handleObserver, {
			root: null,
			rootMargin: '0px',
			threshold: 1
		});
		this.observer.observe(this.loadingRef.current);
	}

	handleObserver = async(elements) => {
		const { previousY, actualPage } = this.state;
		const yPosition = elements[0].boundingClientRect.y;

		if (previousY > yPosition) {
			this.setState({ actualPage: actualPage + 1 }, async() => {
				await this.fetchData();
			});
		}

		this.setState({ previousY: yPosition });
	}

	fetchData = async() => {
		const { actualPage, data } = this.state;
		this.setState({ loading: true });
		const { nodes } = await getData(actualPage);
		const newData = [...data, ...nodes];
		this.setState({ data: newData, loading: false });
	}

    render() {
		const { data, loading } = this.state;
        return (
            <div className={ styles.main }>
				<Header className={ styles.header } />
				<div className={ styles.items }>
					{
						data && data.map(({ node: { title, field_photo_image_section }}, index) => (
							<Item
								title={ title }
								photo={ `https://www.pinkvilla.com${field_photo_image_section}` }
								key={ index }
							/>
						))
					}
					{
						<div
							className={
								classnames({ [styles.loading]: true, [styles.show]: loading })
							}
							ref={ this.loadingRef }
						>
							Loading...
						</div>
					}
				</div>
			</div>
        );
    }
}

export default Core;