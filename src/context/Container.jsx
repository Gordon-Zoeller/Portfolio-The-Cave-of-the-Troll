import { useReducer } from "react";
import { useFetch } from "../custom/fetch";
import {Context} from "./CreateContext";
import { initialState, reducer } from "./Reducer";

export default function Container({children}) {
    const {plot, setPlot} = useFetch();
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <Context.Provider value={{
                plot, setPlot,
                state, dispatch,
                }}>
                {children}
            </Context.Provider>
        </>
    );
};