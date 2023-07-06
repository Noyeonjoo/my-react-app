import classNames from "classnames";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input/Input";
import AuthLayout from "../components/Layout/AuthLayout";
import { useScreenType } from "../hooks/MediaQuery";
import Items from "../components/Item/Items";
import ItemContainer from "../components/Item/ItemContainer";
import ItemTitle from "../components/Item/ItemTitle";
import BoldText from "../components/Text/BoldText";
import PageTitle from "../components/PageTitle";

type ErrorType = {
    email: string;
    password: string;
};

function SignIn() {
    const screenType = useScreenType();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ErrorType>({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (errors.email !== "") {
            hideError("email");
        }
    }, [email]);

    useEffect(() => {
        if (errors.password !== "") {
            hideError("password");
        }
    }, [password]);

    // const showError = (value: string, msg: string) => {
    //     const prevErrors = errors;
    //     //@ts-ignore
    //     prevErrors[value] = msg;
    //     setErrors({ ...prevErrors });
    // };

    const hideError = (value: string) => {
        const prevErrors = errors;
        //@ts-ignore
        prevErrors[value] = "";

        setErrors({ ...prevErrors });
    };

    const googleLogin = () => console.log("google login");

    const epicLogin = async () => console.log("epic login");

    const onSignIn = async () => {
        setLoading(true);
        // if (email === "") {
        //     showError("email", "US_PR_000025");
        //     setLoading(false);
        // }

        // if (password === "") {
        //     showError("password", "US_PR_000026");
        //     setLoading(false);
        //     return;
        // }

        // const regex = new RegExp(
        //     "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
        // );

        // if (!regex.test(email)) {
        //     showError("email", "CHANGE_PASSWORD_INCORRECT_EMAIL_FORMAT");
        //     setLoading(false);
        //     return;
        // }

        // try {
        //     const response = await axios.post(SERVER + "/auth/login", {
        //         email: email.trim(),
        //         password,
        //     });

        //     const {
        //         headers: { authorization, expiredate, reauthentication },
        //         data,
        //     } = response;

        //     print(
        //         {
        //             remember,
        //             ...{ authorization, reauthentication, expiredate },
        //             ...data,
        //         },
        //         "send data"
        //     );

        //     //@ts-ignore
        //     window.ue.loginweb.succeededlogin(
        //         JSON.stringify(data),
        //         JSON.stringify({ authorization, reauthentication, expiredate }),
        //         remember
        //     );
        // } catch (error: any) {
        //     //TODO: 엔진 연동 부분 에러처리 바꾸기
        //     if (error.response) {
        //         const {
        //             response: {
        //                 data: { error_code, message },
        //             },
        //         } = error;

        //         print(error_code, "error_code");
        //         print(message, "message");

        //         //TODO: 예외사항 처리
        //         if (message === "LOGIN_FAILURE_NO_CREDENTIAL") {
        //             setToastValue(
        //                 t("US_PR_000049", { ns: "validation" }).toString()
        //             );
        //         } else if (message === "LOGIN_FAILURE_NO_ACCOUNT") {
        //             showError("email", "CHANGE_PASSWORD_CANT_FIND_EMAIL");
        //         } else if (message === "LOGIN_FAILURE_BAD_CREDENTIAL") {
        //             setI18nOption({ data1: "10", data2: LOGIN_TIMEOUT });
        //             showError("password", "REASON_MSG_ACCOUNT_PW_RESTICT_TRY");
        //         } else {
        //             setToastValue(message);
        //         }
        //     } else {
        //         print(error, "error");
        //     }

        //     setLoading(false);
        // }
    };

    return (
        <AuthLayout>
            <PageTitle>Sign in</PageTitle>
            <div className="w-full md:mt-[-50px]">
                <Items>
                    <ItemContainer error={errors.email}>
                        <ItemTitle title="Email Address" />
                        <Input
                            type="text"
                            getValue={(text) => setEmail(text)}
                            placeholder="Email Address"
                            error={errors.email.length > 0}
                        />
                    </ItemContainer>
                    <ItemContainer error={errors.password}>
                        <ItemTitle title="Password" />
                        <Input
                            type="password"
                            getValue={(text) => setPassword(text)}
                            placeholder="Password"
                            error={errors.password.length > 0}
                            onKeyDown={onSignIn}
                        />
                    </ItemContainer>
                </Items>
            </div>
            <div className="w-full space-y-1">
                <Button type="normal" onClick={onSignIn} loading={loading}>
                    Sign in
                </Button>
                <div className="flex justify-between items-center">
                    <div
                        className={classNames(
                            "text-xs mt-2 mb-1 items-center flex",
                            {
                                "text-gray": !remember,
                                "text-blue": remember,
                            }
                        )}
                    >
                        <CheckBox
                            checked={remember}
                            onClick={() => setRemember((prev) => !prev)}
                            style={{ marginRight: 5 }}
                        />
                        Stay signed in
                    </div>
                    <div className="flex space-x-3">
                        <Link to="/">
                            <div className="text-xs text-gray cursor-pointer">
                                Find password
                            </div>
                        </Link>
                        <Link to="/">
                            <BoldText className="text-xs text-gray cursor-pointer">
                                Sign up
                            </BoldText>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-2">
                {screenType === "mobile" ? null : (
                    <div className="text-xs text-light-gray text-center">
                        Log in with the following account
                    </div>
                )}

                <Button type="google" onClick={googleLogin} />
                <Button
                    type="apple"
                    onClick={() => console.log("apple login")}
                />
                <Button type="epic" onClick={epicLogin} />
            </div>
        </AuthLayout>
    );
}

export default SignIn;
