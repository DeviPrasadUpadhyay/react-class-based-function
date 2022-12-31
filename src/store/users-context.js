import React from "react";

const UsersContext = React.createContext({
	users: [
		{ id: "u1", name: "Max" },
		{ id: "u2", name: "Manuel" },
		{ id: "u3", name: "Julie" },
	],
	updateUsers: () => {},
});

export default UsersContext;
