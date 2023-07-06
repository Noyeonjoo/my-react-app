import { useTranslation } from "react-i18next";

function MediumText(props: any) {
    const { i18n } = useTranslation();

    return (
        <div
            {...props}
            style={{
                fontFamily:
                    i18n.resolvedLanguage === "en"
                        ? "RobotoMedium"
                        : i18n.resolvedLanguage === "ko"
                        ? "NanumSquareMedium"
                        : "Noto_SansMedium",
                ...props.style,
            }}
        >
            {props.children}
        </div>
    );
}

export default MediumText;
