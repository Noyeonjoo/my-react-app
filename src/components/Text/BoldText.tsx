import { useTranslation } from "react-i18next";

function BoldText(props: any) {
    const { i18n } = useTranslation();
    return (
        <div
            {...props}
            style={{
                fontFamily:
                    i18n.resolvedLanguage === "en"
                        ? "RobotoBold"
                        : i18n.resolvedLanguage === "ko"
                        ? "NanumSquareBold"
                        : "Noto_SansBold",
                ...props.style,
            }}
        >
            {props.children}
        </div>
    );
}

export default BoldText;
