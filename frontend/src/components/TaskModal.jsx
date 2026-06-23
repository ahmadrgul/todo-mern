import { useState } from "react";
import Modal from "./Modal";
import { createTask, getTasks, updateTask } from "../api/tasks";

const TaskModal = ({isOpen, onClose, id, oldTitle, oldDesc, oldPriority, oldStatus, oldDueDate, isUpdate, setTasks}) => {
    const [title, setTitle] = useState(oldTitle);
    const [desc, setDesc] = useState(oldDesc);
    const [priority, setPriority] = useState(oldPriority || "low");
    const [status, setStatus] = useState(oldStatus || "pending");
    const [dueDate, setDueDate] = useState(oldDueDate ? oldDueDate.split('T')[0] : "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isUpdate) {
            const res = await updateTask(
                id,
                title,
                desc,
                status,
                priority,
                dueDate
            )
            console.log("Task updated", res)
        } else {
            const res = await createTask(
                title,
                desc,
                status,
                priority,
                dueDate
            );
            console.log("Task created", res)
        }
        let newTaskList = await getTasks();
        setTasks(newTaskList)
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Create New Task"
        >
            <form
                className="flex flex-col gap-6 w-lg"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-3">
                    <label className="text-xl" htmlFor="title">Title</label>
                    <input 
                        name="title" 
                        id="title" 
                        type="text" 
                        className="border border-gray-400 rounded-md h-9 px-2" 
                        required
                        value={title}
                        onChange={
                            (e) => {
                                setTitle(e.target.value)
                            }
                        }
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl" htmlFor="desc">Description</label>
                    <textarea 
                        rows="5" 
                        name="desc" 
                        id="desc" 
                        type="text" 
                        className="border px-2 border-gray-400 rounded-md"
                        value={desc}
                        onChange={
                            (e) => {
                                setDesc(e.target.value)
                            }
                        }    
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="priority" className="text-xl">Priority</label>
                    <select
                        name="priority"
                        id="priority"
                        className="border border-gray-400 rounded-md h-9"
                        defaultValue={priority}
                        value={priority}
                        onChange={
                            (e) => {
                                setPriority(e.target.value)
                            }
                        }
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="text-xl">Status</label>
                    <select
                        name="status"
                        id="status"
                        className="border border-gray-400 rounded-md h-9"
                        defaultValue={status}
                        value={status}
                        onChange={
                            (e) => {
                                setStatus(e.target.value)
                            }
                        }
                    >
                        <option value="pending">Pending</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl" htmlFor="duedate">Due Date</label>
                    <input 
                        name="dueDate" 
                        id="duedate" 
                        required 
                        min={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`} type="date" className="border border-gray-400 rounded-md h-9"
                        value={dueDate}
                        onChange={
                            (e) => {
                                setDueDate(e.target.value)
                            }
                        }
                    />
                </div>
                <input 
                    type="submit"
                    value={isUpdate ? "Update Task" : "Create Task"}
                    className="bg-blue-500 mt-4 text-white font-medium px-4 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
                />
            </form>
        </Modal>
    )
}

export default TaskModal;