import { useEffect, useState } from "react"
import { useToast } from "../context/ToastContext";
import { postTask } from "../api/tasks";

const useCreateTask = () => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const { showToast } = useToast();

    const createTask = (title, description, status, priority, dueDate) => {
        setLoading(true);

        postTask(title, description, status, priority, dueDate)
            .then((response) => {
                if (response.status == 201) {
                    setData(response.data)
                    showToast("Success! Task has been created.", "success")
                }
            })
            .catch((err) => {
                showToast(err.message, "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { data, loading, createTask }
}

export default useCreateTask;