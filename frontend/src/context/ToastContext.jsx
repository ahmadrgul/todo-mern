import { createContext, useContext, useState } from "react";

const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
    const [ toast, setToast ] = useState([]);
    const [ isToastVisible, setIsToastVisible ] = useState(false);

    const showToast = (message, type) => {
        setToast({message: message, type: type})
        setIsToastVisible(true);

        setTimeout(() => {
            setIsToastVisible(false);
        }, 2000)

        setTimeout(() => {
            setToast(null);

        }, 3000)
    }
    
    return (
        <ToastContext.Provider value={{ toast, isToastVisible, showToast }}>
            {children}
        </ToastContext.Provider>    
    )
}

export const useToast = () => useContext(ToastContext);