import googleLogo from "../../assets/images/auth/google_icon.png";
import epicLogo from "../../assets/images/auth/epic_icon.png";
import appleLogo from "../../assets/images/auth/apple_icon.png";
import classNames from "classnames";
import MediumText from "../Text/MediumText";
import { Oval } from "react-loader-spinner";

type ButtonProps = {
    type: string;
    onClick: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
    loading?: boolean;
    width?: string;
};
function Button({
    type,
    onClick,
    disabled,
    children,
    loading,
    width,
}: ButtonProps) {
    const setToast = () => {};

    return (
        <>
            {type === "normal" ? (
                <div
                    onClick={disabled ? undefined : onClick}
                    style={{ width: width }}
                    className={classNames(
                        "btn-primary bg-blue text-white text-sm md:text-base rounded-md",
                        {
                            "bg-light-gray2 cursor-default": disabled,
                        }
                    )}
                >
                    <MediumText>
                        {loading ? (
                            <Oval
                                height="25"
                                width="25"
                                color="white"
                                secondaryColor="white"
                                ariaLabel="oval-loading"
                                strokeWidth={5}
                                strokeWidthSecondary={5}
                            />
                        ) : (
                            children
                        )}
                    </MediumText>
                </div>
            ) : null}
            {type !== "normal" ? (
                <div
                    onClick={disabled ? setToast : onClick}
                    className={classNames(
                        "btn-primary bg-white border-1 border-gray border-solid px-6 justify-normal",
                        {
                            "cursor-default opacity-50": disabled,
                        }
                    )}
                >
                    <img
                        className="absolute"
                        src={
                            type === "google"
                                ? googleLogo
                                : type === "epic"
                                ? epicLogo
                                : appleLogo
                        }
                        width={type === "google" ? 26 : 22}
                    />
                    <MediumText className="relative text-sm text-dark-gray w-full text-center">
                        Sign in with{" "}
                        {type === "epic"
                            ? "Epic Games"
                            : type === "google"
                            ? "Google"
                            : "Apple"}
                    </MediumText>
                </div>
            ) : null}
        </>
    );
}

export default Button;
