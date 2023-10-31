import { useContext } from "react";
import { Context } from "../../context/CreateContext";

export default function Text() {
    const {plot, state} = useContext(Context);
    return (
        <>
            <p className="plot">{state.quit ?
            (<>
            <span>{plot[0]?.text}</span>
            {plot[0]?.command?.command ?
            (<>
            <code>{plot[0]?.command?.command}</code>
            </>) :
            ""}
            <span>{plot[0]?.text2}</span>
            {plot[0]?.command3?.command ?
            (<>
            <code>{plot[0].command3?.command}</code>
            </>) :
            ""}
            {plot[0]?.text3 ?
            (<>
            <span>{plot[0].text3}</span>
            </>) :
            ""}
            </>)  :
            (state.inventory.map(item => (<>
            <span>{item}</span>
            <br/>
            </>))
            .concat((<>
            <code className="quit">quit</code>
            </>)))
            }</p>
        </>
    );
};
/*
<p className="plot">{plot[0]?.text}</p>
*/