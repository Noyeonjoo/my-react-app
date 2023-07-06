import { useScreenType } from "../hooks/MediaQuery";
import Logo from "./Logo";
import Title from "./Text/Title";

type PageTitleProps = {
    children: React.ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
    const screenType = useScreenType();
    return (
        <div className="w-full space-y-3 mb-5 lg:mb-0">
            {screenType !== "pc" ? <Logo width={50} /> : null}
            <Title>{children}</Title>
        </div>
    );
}

export default PageTitle;
