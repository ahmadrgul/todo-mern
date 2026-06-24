import { useEffect, useState } from "react"
import { useToast } from "../context/ToastContext";
import { getTasks } from "../api/tasks";

const useFetchTasks = () => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const { showToast } = useToast();

    const fetchTasks = () => {
        setLoading(true);

        getTasks()
            .then((response) => {
                if (response.status == 200) {
                    setData(response.data)
                }
            })
            .catch((err) => {
                showToast(err.message, "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { data, loading, fetchTasks }
}

export default useFetchTasks;