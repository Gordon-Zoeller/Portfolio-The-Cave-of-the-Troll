function reducer(state, action) {
    switch(action.type) {
        case "inventory": return {...state, quit: state.quit = false};
        case "quit": return {...state, quit: state.quit = true};
        case "use sword": return {...state, inventory: state.inventory.filter(item => item !== "-sword")};
        case "take jawbone": return {...state, inventory: [...state.inventory, `-${action.payload}`]};
        case "use jawbone": return {...state, inventory: []};
        default: return state;
    };
};
const initialState = {
    quit: true,
    inventory: [
        "-sword",
        "-torch",
    ],
};
export {reducer, initialState};