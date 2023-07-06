import { useState } from "react";
import eye from "../../assets/images/auth/eye.svg";
import eyeOff from "../../assets/images/auth/eye_off.svg";
import success from "../../assets/images/auth/success.svg";
import classNames from "classnames";

type InputProps = {
    type: string;
    error?: boolean;
    getValue: (value: string) => void;
    placeholder: string;
    defaultValue?: string;
    onKeyDown?: () => void;
    maxLength?: number;
    value?: string;
    verified?: string;
};

function Input({
    type,
    error,
    getValue,
    placeholder,
    defaultValue,
    onKeyDown,
    maxLength,
    value,
    verified,
}: InputProps) {
    const [focused, setFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onFocus = () => {
        setFocused(true);
    };

    const onBlur = () => {
        setFocused(false);
    };

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const onChangeText = (e: any) => {
        if (type === "number")
            if (maxLength && e.target.value.length > maxLength) {
                getValue(e.target.value.slice(0, maxLength));
                return;
            }

        getValue(e.target.value);
    };
    return (
        <div className="w-full">
            <div
                className={classNames(
                    "rounded-md h-10 md:h-input flex px-2.5 transition-border duration-200 border-solid bg-light-gray-blue items-center",
                    {
                        "border-red border-1 ": error, //에러
                        "border-blue border-1": !error && focused, //포커스
                        "border-light-blue border-1 ": !error && !focused, //기본
                    }
                )}
            >
                <input
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChange={onChangeText}
                    type={
                        type === "password" && !showPassword
                            ? "password"
                            : type === "number"
                            ? "number"
                            : "text"
                    }
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className="text-base w-full border-0 focus:outline-none placeholder:text-gray-blue bg-light-gray-blue"
                    onKeyDown={
                        onKeyDown
                            ? (e) => (e.code === "Enter" ? onKeyDown() : null)
                            : undefined
                    }
                    maxLength={maxLength ? maxLength : undefined}
                    value={value}
                />
                {type === "password" ? (
                    <button>
                        <img
                            className="p-1.5 w-9 h-8"
                            src={showPassword ? eyeOff : eye}
                            onClick={togglePassword}
                        />
                    </button>
                ) : null}
                {!verified || verified === "none" ? null : verified ===
                  "fail" ? (
                    <div className="text-red text-xs">Inconsistency</div>
                ) : (
                    <img className="pr-1.5" width={25} src={success} />
                )}
            </div>
        </div>
    );
}

export default Input;
