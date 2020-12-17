const barTinderBackEndURL = "https://3000-c1e8e786-36fe-4345-b0da-3eb0f9f784b5.ws-us03.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			randomCocktails: [],
			token: null
		},
		actions: {
			login: (email, password) => {
				fetch(`${barTinderBackEndURL}login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt });
						}
					});
			},

			logout: () => {
				setStore({ token: null });
			},

			signup: (email, password, birth, first, last) => {
				fetch(`${barTinderBackEndURL}user`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
						first_name: first,
						last_name: last,
						birth_date: birth,
						created_date: "2019-01-01"
					})
				});
			},

			setBase: base => {
				const currentStore = getStore();
				setStore({
					visitor: {
						...currentStore.base,
						base: base
					}
				});
			},

			addBase: async base => {
				const currentStore = getStore();

				const response = await fetch(`${barTinderBackEndURL},base`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						...currentStore.currentBase,
						base: base
					})
				});
				if (response.ok) {
					const data = await response.json();
					setStore({
						currentBase: data
					});
					console.log(data);
					return true;
				} else {
					return false;
				}
			},

			getRandomCocktails: () => {
				fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
					.then(data => data.json())
					.then(response => {
						setStore({ randomCocktails: response });
					});
			},

			// addFavorite: favorite => {
			// 	const store = getStore();
			// 	let newFavorite = { name: favorite };
			// 	updatedStore.favorites.concat(newFavorite);
			// 	setStore(store);
			// },

			// deleteFavorite: name => {
			// 	const store = getStore();
			// 	let returnArr = store.favorites.filter((element, index) => {
			// 		return id != index;
			// 	});
			// 	setStore({ favorites: returnArr });

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
						fetch().then().then(data => setStore({ "foo": data.bar }))
					*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
