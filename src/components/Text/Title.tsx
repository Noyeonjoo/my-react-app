import { useScreenType } from "../../hooks/MediaQuery";
import BoldText from "./BoldText";

function Title(props: any) {
    const screenType = useScreenType();
    return (
        <BoldText
            {...props}
            style={{
                fontSize: screenType === "mobile" ? 34 : 38,
                ...props.style,
            }}
        >
            {props.children}
        </BoldText>
    );
}

export default Title;
