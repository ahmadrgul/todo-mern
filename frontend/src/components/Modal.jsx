import { XIcon } from "lucide-react";
import ReactDOM from "react-dom";

const Modal = ({isOpen, onClose, title, children}) => {
    
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed top-0 right-0 left-0 bottom-0 z-10 bg-black/50  flex justify-center items-center">
            <div className="bg-white p-4 relative rounded-lg flex flex-col gap-4">
                <div className="flex w-full">
                    <h3 className="w-full text-center text-2xl mt-4">{title}</h3>
                    <button onClick={onClose} className="hover:cursor-pointer">
                        <XIcon size="20"/>
                    </button>
                </div>
                <div className="mx-8 mb-8">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("root")
    )
}

export default Modal;