import checkedImg from "../assets/images/auth/checked.png";
import uncheckedImg from "../assets/images/auth/unchecked.png";

type CheckBoxProps = {
    style?: React.CSSProperties;
    onClick: () => void;
    width?: number;
    height?: number;
    checked: boolean;
};

function CheckBox({ style, onClick, width, height, checked }: CheckBoxProps) {
    return (
        <button
            style={{ border: 0, backgroundColor: "white", ...style }}
            onClick={onClick}
        >
            <img
                width={width ? width : 16}
                height={height ? height : 16}
                src={checked ? checkedImg : uncheckedImg}
            />
        </button>
    );
}

export default CheckBox;
