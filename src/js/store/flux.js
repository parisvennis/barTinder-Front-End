const barTinderBackEndURL = "https://3000-c3b25a73-0bb4-44b2-924a-7d10da9cbe83.ws-eu03.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			getCocktail: [],
			randomCocktails: [],
			popularCocktails: [],
			token: null,
			loggedUserId: null,
			loggedUser: null,
			currentBase: [],
			currentMod: [],
			base: [],
			mod: []
		},
		actions: {
			checkFavorites: item => {
				console.log("ITEM: ", item);
				const store = getStore();
				let found = store.favorites.find(i => i.drink_name === item);
				console.log("FOUND: ", found);
				if (found != undefined) {
					return true;
				} else {
					return false;
				}
			},
			login: async (email, password) => {
				await fetch(`${barTinderBackEndURL}login`, {
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
							setStore({ token: token.jwt, loggedUserId: token.id, favorites: token.user.favorites });
						}
					});
			},

			logout: () => {
				setStore({ token: null, loggedUserId: null, loggedUser: null });
			},

			signup: async (email, password, birth, first, last) => {
				const response = await fetch(`${barTinderBackEndURL}user`, {
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
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},

			setBase: b => {
				const store = getStore();
				const baseIndex = store.base.indexOf(b);
				if (baseIndex == -1) {
					setStore({ base: [...store.base, b] });
				} else {
					const newBasesArray = store.base.filter((f, i) => baseIndex != i);
					setStore({ base: newBasesArray });
				}
			},

			setMod: b => {
				const store = getStore();
				const modIndex = store.mod.indexOf(b);
				if (modIndex == -1) {
					setStore({ mod: [...store.mod, b] });
				} else {
					const newModsArray = store.mod.filter((f, i) => modIndex != i);
					setStore({ mod: newModsArray });
				}
			},

			addBase: async () => {
				const currentStore = getStore();
				var baseString = "";
				if (currentStore.base.length > 0) {
					for (let i = 0; i < currentStore.base.length; i++) {
						if (i == currentStore.base.length - 1) {
							baseString += `${currentStore.base[i]}`;
						} else {
							baseString += `${currentStore.base[i]},`;
						}
					}
				}
				console.log(baseString);
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/V2/9973533/filter.php?i=${baseString}`
				);
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

			addMods: async () => {
				const currentStore = getStore();
				var modString = "";
				var baseString = "";
				if (currentStore.base.length > 0) {
					for (let i = 0; i < currentStore.base.length; i++) {
						if (i == currentStore.base.length - 1) {
							baseString += `${currentStore.base[i]}`;
						} else {
							baseString += `${currentStore.base[i]},`;
						}
					}
				}
				if (currentStore.mod.length > 0) {
					for (let i = 0; i < currentStore.mod.length; i++) {
						if (i == currentStore.mod.length - 1) {
							modString += `${currentStore.mod[i]}`;
						} else {
							modString += `${currentStore.mod[i]},`;
						}
					}
				}
				console.log(modString);
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/V2/9973533/filter.php?i=${baseString},${modString}`
				);
				if (response.ok) {
					const data = await response.json();
					setStore({
						currentMod: data
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
						setStore({ randomCocktails: response.drinks });
					});
			},

			getPopularCocktails: () => {
				fetch("https://www.thecocktaildb.com/api/json/V2/9973533/popular.php")
					.then(data => data.json())
					.then(response => {
						setStore({ popularCocktails: response.drinks });
					});
			},

			getCocktail: idDrink => {
				fetch(`https://www.thecocktaildb.com/api/json/V2/9973533/lookup.php?i=${idDrink}`)
					.then(data => data.json())
					.then(response => {
						setStore({ getCocktail: response.drinks });
					});
			},

			getUserFavorites: id => {
				fetch(`${barTinderBackEndURL}user/${id}`)
					.then(data => data.json())
					.then(response => {
						setStore({ favorites: response.favorites });
					});
			},
			deleteFavorite: async id => {
				const store = getStore();
				const drinkIndex = store.favorites.findIndex(i => i.drink_id == id);
				console.log("####$: ", drinkIndex);
				let favId = await store.favorites[drinkIndex].id;
				console.log("ID: ", favId);
				if (drinkIndex != -1) {
					fetch(`${barTinderBackEndURL}favorites/${favId}`, {
						method: "DELETE"
					}).then(() => getActions().getUserFavorites(store.loggedUserId));
				}
			},

			addFavorites: async (drink_id, drink_name) => {
				// console.log(drink_id, drink_name);
				const store = getStore();
				let favCheck = await getActions().checkFavorites(drink_name);
				console.log("FAV: ", favCheck);
				if (!favCheck) {
					await fetch(`${barTinderBackEndURL}favorites`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							authorization: `Bearer ${store.token}`
						},
						body: JSON.stringify({
							drink_id: drink_id,
							drink_name: drink_name
						})
					}).then(() => getActions().getUserFavorites(store.loggedUserId));
				} else {
					getActions().deleteFavorite(drink_id);
				}
			}
			// post to the favorite endpoint on your api
			// then fetch from api your favorites
			// save to store - your favorites result
		},

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
	};
};
export default getState;
