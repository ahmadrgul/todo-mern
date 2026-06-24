import { AlertCircleIcon, CheckCircle2 } from "lucide-react";
import { useToast } from "../context/ToastContext";

const Toaster = () => {
    const { toast, isToastVisible } = useToast();

    if (toast) {
        return (
            <div className="flex justify-center">
                <div className={
                    `flex gap-2 items-center pl-8 pr-14 py-7 rounded-2xl shadow-lg fixed font-semibold text-lg border 
                    transition-all duration-700 ease-in-out
                    ${toast.type == "error" && "bg-red-200 text-red-700 border-red-300"}
                    ${toast.type == "success" && "bg-emerald-200 text-emerald-700 border-emerald-300"}
                    ${isToastVisible ? "translate-y-15 opacity-100" : "translate-y-0 opacity-0"}
                    `}>
                    {toast.type == "success" && <CheckCircle2 size={28}/>}
                    {toast.type == "error" && <AlertCircleIcon size={28}/>}
                    <p>{toast.message}</p>
                </div>
            </div>
        )
    }
}

export default Toaster;