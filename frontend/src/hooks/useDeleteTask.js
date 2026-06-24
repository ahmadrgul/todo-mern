import { useEffect, useState } from "react"
import { useToast } from "../context/ToastContext";
import { deleteOneTask } from "../api/tasks";

const useDeleteTask = () => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const { showToast } = useToast();

    const deleteTask = (id) => {
        setLoading(true);

        deleteOneTask(id)
            .then((response) => {
                if (response.status == 200) {
                    setData(response.data)
                    showToast("Success! Task has been deleted.", "success")
                }
            })
            .catch((err) => {
                showToast(err.message, "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { data, loading, deleteTask }
}

export default useDeleteTask;