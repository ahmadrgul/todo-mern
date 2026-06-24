import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const getTasks = async () => {
    try {
        const res = await axiosInstance.get("/tasks");
        return res
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                throw Error("Network Error!")
            } else {
                // throw Error("Sorry! Something went wrong!")
            }
        } else {
            throw Error("Sorry, Something went wrong!")
        }
    }
}

export const postTask = async (title, desc, status, priority, dueDate) => {
    try {
        const res = await axiosInstance.post("/tasks", {
            title: title,
            description: desc,
            status: status,
            priority: priority,
            dueDate: dueDate,
        });
        return res
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                throw Error("Network Error")
            } else {
                throw Error(err.response.data.error)
            }
        }
        else {
            throw Error("Sorry, Something went wrong!")
        }
    }
}

export const patchTask = async (id, title, desc, status, priority, dueDate) => {
    try {
        const res = await axiosInstance.patch(`/tasks/${id}`, {
            title: title,
            description: desc,
            status: status,
            priority: priority,
            dueDate: dueDate,
        });
        return res
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                throw Error("Network Error")
            } else {
                throw Error(err.response.data.error)
            }
        }
        else {
            throw Error("Sorry, Something went wrong!")
        }
    }
}

export const deleteOneTask = async (id) => {
    try {
        const res = await axiosInstance.delete(`/tasks/${id}`);
        return res
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                throw Error("Network Error")
            } else {
                throw Error(err.response.data.error)
            }
        }
        else {
            throw Error("Sorry, Something went wrong!")
        }
    }
}

export const getTask = async (id) => {
    try {
        const res = await axiosInstance.get(`/tasks/${id}`);
        return res
    } catch (err) {
        if (err instanceof AxiosError) {
            if (!err.response) {
                throw Error("Network Error")
            } else {
                throw Error(err.response.data.error)
            }
        }
        else {
            throw Error("Sorry, Something went wrong!")
        }
    }
}