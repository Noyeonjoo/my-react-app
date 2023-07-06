import { ReactNode, useEffect, useState } from "react";
import authBg from "../../assets/images/auth/auth_bg.png";
import anotherEarthLogo from "../../assets/images/auth/another_earth_logo.svg";
import AELogo from "../../assets/images/auth/AE_logo.png";
import { useScreenType } from "../../hooks/MediaQuery";

interface LayoutProps {
    children?: ReactNode;
}

function AuthLayout({ children }: LayoutProps) {
    const screenType = useScreenType();
    const [widowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);
    return (
        <div className="w-screen">
            <div
                className="flex md:justify-end bg-cover"
                style={{
                    backgroundImage: `url(${authBg})`,
                }}
            >
                {screenType === "pc" || screenType === "tablet" ? (
                    <div className="w-full lg:w-1/2 h-screen bg-navy flex items-center justify-center opacity-80">
                        {widowWidth <= 1500 ? (
                            <img width={80} src={AELogo} />
                        ) : (
                            <img width="40%" src={anotherEarthLogo} />
                        )}
                    </div>
                ) : null}

                <div className="w-full lg:w-1/2 h-screen bg-white flex items-center justify-center lg:min-w-[960px]">
                    <div className="h-[80%] lg:h-[90%] max-h-[800px] flex flex-col items-center justify-between w-[90%] max-w-[500px] lg:max-w-none lg:w-82">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
