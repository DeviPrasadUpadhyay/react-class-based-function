import React, { Component } from "react";

import UsersContext from "./users-context";

const DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
];

const UPDATED_DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
	{ id: "u4", name: "Jane" },
	{ id: "u5", name: "Aadi" },
	{ id: "u6", name: "Adi" },
	{ id: "u7", name: "Aaadi" },
	{ id: "u8", name: "Sikandar" },
	{ id: "u9", name: "Boss" },
];

class UsersContextProvider extends Component {
	static contextType = UsersContext;

	constructor() {
		super();
		this.state = {
			users: DUMMY_USERS,
		};
	}

	render() {
		const updateUsersHandler = () => {
			console.log("rendering then why not UI updating...");
			this.setState({
				users: UPDATED_DUMMY_USERS,
			});
		};

		const usersContext = {
			users: this.state.users,
			updateUsers: updateUsersHandler,
		};

		return <UsersContext.Provider value={usersContext}> {this.props.children} </UsersContext.Provider>;
	}
}

export default UsersContextProvider;
