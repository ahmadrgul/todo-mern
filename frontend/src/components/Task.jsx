import { Trash2Icon, PenSquare } from "lucide-react";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import TaskModal from "./TaskModal";
import { properCase } from "../utils/text";

const Task = ({ id, title, description, status, priority, dueDate, deleteTask, setTasks }) => {
    const [isDelModalOpen, setDelModalOpen] = useState(false)
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    
    return (
        <div
            className="flex justify-between"
        >
            <div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <h3 className="font-semibold text-xl">{title}</h3>
                        <span className={`h-6 flex items-center px-2 border text-sm font-medium rounded-lg shadow-inner ${status == "completed" && "border-green-300 text-emerald-800 bg-emerald-100"} ${status == "pending" && "border-red-300 text-red-800 bg-red-100"} ${status == "inprogress" && "border-gray-300 text-gray-800 bg-gray-100"}`}>{properCase(status == "inprogress" ? "In Progress" : status)}</span>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-600">
                        <span>
                        {
                            "Due on " +
                            new Date(dueDate).toLocaleDateString("pk", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }
                        </span>
                        <span className="font-bold">
                            &middot;
                        </span>
                        <span>
                            {properCase(priority)}
                        </span>
                    </div>

                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={() => setUpdateModalOpen(true)} className="hover:cursor-pointer">
                    <PenSquare size="18" color="gray"/>
                </button>
                <button onClick={() => setDelModalOpen(true)} className="hover:cursor-pointer" >
                    <Trash2Icon size="19" color="red"/>
                </button>
            </div>
            <DeleteModal 
                isOpen={isDelModalOpen}
                onClose={() => { setDelModalOpen(false) }}
                onDelete={deleteTask}
            />
            <TaskModal
                isOpen={isUpdateModalOpen}
                onClose={() => { setUpdateModalOpen(false) }}
                oldTitle={title}
                oldDesc={description}
                oldStatus={status}
                oldPriority={priority}
                oldDueDate={dueDate}
                isUpdate={true}
                setTasks={setTasks}
                id={id}
            />
        </div>
    )
}

export default Task;