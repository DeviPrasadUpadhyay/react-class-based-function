import { Component } from "react";

import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
// 	{ id: "u1", name: "Max" },
// 	{ id: "u2", name: "Manuel" },
// 	{ id: "u3", name: "Julie" },
// ];

// const Users = () => {
// 	const [showUsers, setShowUsers] = useState(true);

// 	const toggleUsersHandler = () => {
// 		setShowUsers((curState) => !curState);
// 	};

// 	const usersList = (
// 		<ul>
// 			{DUMMY_USERS.map((user) => (
// 				<User key={user.id} name={user.name} />
// 			))}
// 		</ul>
// 	);

// 	return (
// 		<div className={classes.users}>
// 			<button onClick={toggleUsersHandler}>{showUsers ? "Hide" : "Show"} Users</button>
// 			{showUsers && usersList}
// 		</div>
// 	);
// };

class Users extends Component {
	constructor() {
		super();
		// initialize state eg in useState, then step2; setVar like there below (can use cb too for validated updations)
		this.state = {
			showUsers: true,
			// moreState: "Test",
			// nested: {},
			// data: []
		};
	}
	toggleUsersHandler() {
		// this.state.showUsers = false; // DONT

		// this.setState({ showUsers: false }); M1

		// M2. callback
		this.setState((prevState) => {
			return {
				showUsers: !prevState.showUsers,
			};
		});
	}
	componentDidUpdate() {
		if (this.props.users.length === 0) {
			throw new Error("No users provided!");
		}
	}
	componentWillUnmount() {
		console.log("Users will unmount !!");
	}
	render() {
		console.log("came here...");
		const usersList = (
			<ul>
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);
		console.log("usersList :>> ", usersList);
		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>{this.state.showUsers ? "Hide" : "Show"} Users</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

export default Users;
