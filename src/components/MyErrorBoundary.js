import { Component } from "react";

class MyErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error) {
		console.log(error);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1> Some error occured in errorBoundary contained components. Fix then reload. </h1>;
		}
		return this.props.children;
	}
}

export default MyErrorBoundary;
