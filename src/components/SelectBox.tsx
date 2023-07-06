import Arrow from "../assets/images/auth/arrow-down.svg";
import ArrowSelected from "../assets/images/auth/arrow-down-selected.svg";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

type SelectBoxProps = {
    name: string;
    contents: number[];
    width: string;
    error: boolean;
    getValue: (value: number) => void;
};
function SelectBox({ name, contents, width, error, getValue }: SelectBoxProps) {
    const [contentsVisible, setContentsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [boxWidth, setBoxWidth] = useState(0);
    const selectBoxRef = useRef(null);

    useEffect(() => {
        //@ts-ignore
        setBoxWidth(selectBoxRef?.current?.clientWidth);

        window.addEventListener("resize", () =>
            //@ts-ignore
            setBoxWidth(selectBoxRef?.current?.clientWidth)
        );
    }, []);

    useEffect(() => {
        getValue(contents[selectedIndex]);
    }, [selectedIndex]);

    const onClick = () => {
        setContentsVisible((prev) => !prev);
    };

    const onSelect = (index: number) => {
        setSelectedIndex(index);
        setContentsVisible(false);
    };

    return (
        <div style={{ width: width }}>
            <div
                ref={selectBoxRef}
                className={classNames(
                    "rounded-md h-10 md:h-input flex px-2.5 transition-border duration-100 items-center justify-between border-solid border-1",
                    {
                        "border-red": error && !contentsVisible,
                        "border-light-blue bg-light-gray-blue ":
                            !error && !contentsVisible,
                        "border-blue bg-light-gray-blue ": contentsVisible,
                        "text-black": selectedIndex > -1,
                        "text-gray-blue": selectedIndex === -1,
                    }
                )}
                onClick={onClick}
            >
                {selectedIndex === -1 ? name : contents[selectedIndex]}
                <img src={contentsVisible ? ArrowSelected : Arrow} />
            </div>
            {contentsVisible ? (
                <div>
                    <div
                        className="absolute z-50 overflow-y-scroll border-select-contents border-1 rounded-md bg-white h-[150px] md:h-[210px] mt-1 focus:outline-none border-solid drop-shadow-lg"
                        style={{ width: boxWidth }}
                    >
                        {contents.map((value, index) => (
                            <div
                                key={index}
                                className={classNames(
                                    "text-sm px-2 py-2 font-semibold cursor-pointer",
                                    {
                                        "bg-gray-blue/[0.2]":
                                            selectedIndex === index,
                                    }
                                )}
                                onClick={() => onSelect(index)}
                                onBlur={() => setContentsVisible(false)}
                                tabIndex={0}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default SelectBox;
