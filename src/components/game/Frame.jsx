import Title from "./Title"
import TextFrame from "./TextFrame";
import Cover from "./Cover";
import Text from "./Text";
import InputFrame from "./InputFrame";
import Input from "./Input";
import { useContext } from "react";
import { Context } from "../../context/CreateContext";

export default function Frame() {
    const {plot} = useContext(Context);
    return (
        <>
            <div className="frame">
                <Title/>
                <TextFrame>
                    {plot[0]?.id === 1 ? <Cover/> : <Text/>}
                </TextFrame>
                <InputFrame>
                    <Input/>
                </InputFrame>
            </div>
        </>
    );
};