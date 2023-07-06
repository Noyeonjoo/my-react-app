//TODO: 로직 수정
function Toast() {
    return <div></div>;
    // const { toastValue, setToastValue } = useContext(ToastContext);
    // const [timer, setTimer] = useState(TOAST_SECOND);

    // useEffect(() => {
    //     if (toastValue === "") return;
    //     setTimer(TOAST_SECOND);
    //     let timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
    //     setTimeout(() => {
    //         stop(timerId);
    //     }, 1000 * TOAST_SECOND);
    //     return () => {
    //         stop(timerId);
    //     };
    // }, [toastValue]);

    // const stop = (timerId: any) => {
    //     clearInterval(timerId);
    //     setToastValue("");
    // };
    // return (
    //     <>
    //         <ToastConsumer>
    //             {(data) => {
    //                 return data.toastValue || data.toastValue !== "" ? (
    //                     <div className="fixed justify-center items-center flex w-full sm:min-w-none md:min-w-[960px] lg:min-w-none lg:w-[50%] h-[66px] bottom-0 right-0 bg-blue text-white text-[15px] z-10">
    //                         <div className="max-w-[80%] break-words">
    //                             {data.toastValue}
    //                         </div>
    //                         <div
    //                             className="absolute right-0 pr-5 cursor-pointer"
    //                             onClick={() => {
    //                                 setToastValue("");
    //                             }}
    //                         >
    //                             <img src={Close} width={30} className="mt-1" />
    //                         </div>
    //                     </div>
    //                 ) : null;
    //             }}
    //         </ToastConsumer>
    //     </>
    // );
}

export default Toast;
