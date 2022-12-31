//
// import { Fragment, useState, useEffect } from "react";

// import Users from "./Users";

// import classes from "./UserFinder.module.css";

// const DUMMY_USERS = [
// 	{ id: "u1", name: "Max" },
// 	{ id: "u2", name: "Manuel" },
// 	{ id: "u3", name: "Julie" },
// ];

// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);

// 	const [searchTerm, setSearchTerm] = useState("");

// 	useEffect(() => {
// 		setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
// 	}, [searchTerm]);

// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	return (
// 		<Fragment>
// 			<div className={classes.finder}>
// 				<input type="search" onChange={searchChangeHandler} />
// 			</div>
// 			<Users users={filteredUsers} />
// 		</Fragment>
// 	);
// };

// export default UserFinder;

import { Component } from "react";

import Users from "./Users";

import classes from "./UserFinder.module.css";

import UsersContext from "../store/users-context";
import MyErrorBoundary from "./MyErrorBoundary";

class UserFinder extends Component {
	// const { users, updateUsers } = useContext(UsersContext);

	static contextType = UsersContext;

	constructor() {
		super();

		this.state = {
			filteredUsers: [],
			searchTerm: "",
			once: true,
		};
	}

	searchChangeHandler(event) {
		// setSearchTerm(event.target.value);
		// if (this.state.once === true) {
		// 	const needAllUsers = alert("Need all users ? ");
		// 	if (needAllUsers) {
		// 		this.context.updateUsers();
		// 	}
		// 	this.setState({ once: "false" });
		// }

		this.setState({ searchTerm: event.target.value });
		// this.context.updateUsers();
	}

	// side effects
	componentDidMount() {
		// Do a http request to fetch DUMMY_USERS from DB here...

		console.log("Fetch success !! ");

		this.setState({ filteredUsers: this.context.users });
		console.log("rendering all users...");
		console.log("this.context.updateUsers ", this.context.updateUsers);
		this.context.updateUsers();

		// NOTE Wow !! used batch state updations concept help to rerender... if 2 update result in same even then dont rerender so ...ie changed stateVar to a->b->a with pause
		this.setState({ searchTerm: "a" });
		// debugger;
		setTimeout(() => {
			this.setState({ searchTerm: "" });
		}, 300);

		// this.setState({ filteredUsers: this.context.users });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			// cDU will execute on any state change , but this block will execute on searchTerm updation only

			this.setState({
				filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)),
			});
		}
	}

	componentWillUnmount() {
		console.log("UserFinder will unmount !! ");
	}

	render() {
		// const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);

		// const [searchTerm, setSearchTerm] = useState("");

		// useEffect(() => {
		// 	setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
		// }, [searchTerm]);

		return (
			<MyErrorBoundary>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>

				<Users users={this.state.filteredUsers} />
			</MyErrorBoundary>
		);
	}
}

export default UserFinder;
