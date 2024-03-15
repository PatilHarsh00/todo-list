import { useState } from "react";

export default function Task({task, handleDelete, handleEdit, handleCheckbox}){
    const [isChecked, setIsChecked] = useState(task.completed);

    const handleCheck = () => {
        task.completed = !isChecked;
        setIsChecked(!isChecked)
        handleCheckbox(task);
    }

    return (
        <div className="taskContainer">
            <input 
                type="checkbox" 
                id="checkbox"
                onChange={handleCheck}
                checked = {isChecked}
            />
            <label  
                id="taskInfo"
                className={isChecked ? "checkedLabel" : ""}
            >{task.task}</label>
            <button id="edit" onClick={() => handleEdit(task.id)}>
                <span className="material-symbols-outlined">
                    edit
                </span>
            </button>
            <button id="delete" onClick={() => handleDelete(task.id)}>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}