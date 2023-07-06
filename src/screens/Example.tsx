import styled from "styled-components";

const Text = styled.div`
    font-size: 12;
    line-height: "16px";
    color: "#70777F";
    text-align: "center";
`;

function Example() {
    return (
        <div className="w-full pt-10 space-y-5">
            {/* 인라인 속성 사용 */}
            <div
                style={{
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "#70777F",
                    textAlign: "center",
                }}
            >
                Log in with the following account
            </div>

            {/* 클래스 이용 */}
            <div className="small-text">Log in with the following account</div>

            {/* tailwindcss 이용 */}
            <div className="text-xs text-gray text-center">
                Log in with the following account
            </div>

            {/* styled component 이용 */}
            <Text className="small-text">
                Log in with the following account
            </Text>
            {/*
            원래는 이런 형태
            <Text
                Log in with the following account
            </Text>
            */}
        </div>
    );
}

export default Example;
