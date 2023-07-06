import classNames from "classnames";
import BoldText from "../Text/BoldText";

type TextButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    color?: string;
    disabled?: boolean;
};

function TextButton({ children, onClick, color, disabled }: TextButtonProps) {
    return (
        <BoldText
            className={classNames("text-[15px]  cursor-pointer", color, {
                "text-blue": !color,
                "text-gray-blue-66 cursor-default": disabled,
            })}
            onClick={disabled ? null : onClick}
        >
            {children}
        </BoldText>
    );
}

export default TextButton;
