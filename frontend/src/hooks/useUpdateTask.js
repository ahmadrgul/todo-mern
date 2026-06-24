import { useEffect, useState } from "react"
import { useToast } from "../context/ToastContext";
import { patchTask } from "../api/tasks";

const useUpdateTask = () => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const { showToast } = useToast();

    const updateTask = (title, description, status, priority, dueDate) => {
        setLoading(true);

        patchTask(title, description, status, priority, dueDate)
            .then((response) => {
                if (response.status == 200) {
                    setData(response.data)
                    showToast("Success! Task has been updated.", "success")
                }
            })
            .catch((err) => {
                showToast(err.message, "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { data, loading, updateTask }
}

export default useUpdateTask;