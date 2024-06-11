import { useEffect } from "react";

type ToastProps = {
    message: string;
    type: "SUCCESS" | "ERROR";
    onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {

    useEffect(()=>{
        const timer = setTimeout(()=>{
            onClose();
        }, 5000);

        return ()=>{
            clearTimeout(timer);
        }
    }, [onClose]);

    const styles = type === "SUCCESS"
        ? "fixed top-6 left-1/2 transform -translate-x-1/2 w-10/12 max-w-sm p-4 bg-white border border-green-500 text-green-700 font-semibold rounded-lg shadow-lg"
        : "fixed top-6 left-1/2 transform -translate-x-1/2 w-10/12 max-w-sm p-4 bg-white border border-red-500 text-red-700 font-semibold rounded-lg shadow-lg"

    return (
        <div className={styles}>
            <div className="flex justify-center items-center">
                <span className="text-lg font-semibold">
                    {message}
                </span>
            </div>
        </div>
    )
};

export default Toast;