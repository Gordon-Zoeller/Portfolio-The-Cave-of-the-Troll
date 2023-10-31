import { useContext } from "react";
import { Context } from "../../context/CreateContext";
import { handleInput } from "../../custom/handleInput";

export default function Input() {
    const {plot, setPlot, dispatch} = useContext(Context);
    return (
        <>
            <input type="text" name="command" placeholder={plot[0]?.id === 1 ? "play" : plot[0]?.id === 3 ? "inventory" : ""} onKeyDown={e => handleInput(e, plot, setPlot, dispatch)}/>
        </>
    );
};