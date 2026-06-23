import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const getTasks = async () => {
    try {
        const res = await axiosInstance.get("/tasks");
        return res.data
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                console.log("Network Error")
            } else {
                console.log(err.response.status, ":", err.response.data.error)
            }
        }
        else {
            console.log("Another Error")
        }
    }
}

export const getTask = async (id) => {
    try {
        const res = await axiosInstance.get(`/tasks/${id}`);
        return res.data
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                console.log("Network Error")
            } else {
                console.log(err.response.status, ":", err.response.data.error)
            }
        }
        else {
            console.log("Another Error")
        }
    }
}

export const createTask = async (title, desc, status, priority, dueDate) => {
    try {
        const res = await axiosInstance.post("/tasks", {
            title: title,
            description: desc,
            status: status,
            priority: priority,
            dueDate: dueDate,
        });
        return {
            status: res.status,
            data: res.data
        }
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                console.log("Network Error")
            } else {
                console.log(err.response.status, ":", err.response.data.error)
            }
        }
        else {
            console.log("Another Error")
        }
    }
}

export const updateTask = async (id, title, desc, status, priority, dueDate) => {
    try {
        const res = await axiosInstance.patch(`/tasks/${id}`, {
            title: title,
            description: desc,
            status: status,
            priority: priority,
            dueDate: dueDate,
        });
        return {
            status: res.status,
            data: res.data
        }
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                console.log("Network Error")
            } else {
                console.log(err.response.status, ":", err.response.data.error)
            }
        }
        else {
            console.log("Another Error")
        }
    }
}

export const deleteTask = async (id) => {
    try {
        const res = await axiosInstance.delete(`/tasks/${id}`);
        return res.data
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                console.log("Network Error")
            } else {
                console.log(err.response.status, ":", err.response.data.error)
            }
        }
        else {
            console.log("Another Error")
        }
    }
}