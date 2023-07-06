import classNames from "classnames";

type ButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
};

function SmallButton({ onClick, disabled, children }: ButtonProps) {
    return (
        <div className="flex justify-end">
            <div
                onClick={disabled ? undefined : onClick}
                className={classNames(
                    "small-btn-primary bg-blue text-white text-base md:text-lg w-[110px]",
                    {
                        "bg-gray": disabled,
                    }
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default SmallButton;
