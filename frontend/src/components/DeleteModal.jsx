import Modal from "./Modal";
import useDeleteTask from "../hooks/useDeleteTask";

const DeleteModal = ({id, isOpen, onClose, onDelete, refreshList}) => {
    const { loading, deleteTask } = useDeleteTask();

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <h2 className="font-medium text-lg">Are you sure, you want to delete this task?</h2>
                <p className="text-gray-700">This cannot be undone.</p>
            </div>
            <div className="flex flex-row-reverse gap-2 mt-8">
                <button
                    className="bg-red-500 text-white font-medium px-4 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
                    onClick={() => {
                        deleteTask(id);
                        refreshList(prev => prev + 1)
                        onClose();
                    }}
                >
                    Delete
                </button>
                <button
                    className="bg-gray-400 text-white font-medium px-4 py-2 rounded-md hover:cursor-pointer hover:opacity-90"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </Modal>
    )
}

export default DeleteModal;