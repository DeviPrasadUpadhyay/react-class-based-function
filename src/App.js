import UserFinder from "./components/UserFinder";

import UsersContextProvider from "./store/UsersContextProvider";

function App() {
	return (
		<UsersContextProvider>
			<UserFinder />
		</UsersContextProvider>
	);
}

export default App;

/* 
TODO in JS 

closures, 
array methods, 
this, 
classes, 
DOM, 

lifecycle, 
listenerObserver, 
bind , 
fetch, 
lifecycle methods

*/
