import React, { useState } from 'react';
import Task from '../components/Task';
import Popup from './Popup';

export default function Body({searchItem, dropdownValue, isDarkMode}) {
    const [isEdit, setIsEdit] = useState(false);
    const [popup, setPopup] = useState(false);
    const [tasks ,setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const [editInputValue, setEditInputValue] = useState({
        id: "",
        value: ""
    })

    // This will make the popup visible
    const addTask = () => {
        setPopup(true);
    }

    // This will close the popup after clicking cancel button
    const cancel = () => {
        setIsEdit(false);
        setPopup(false);
    }

    //This is adding new task to the list with id
    const apply = (newTask) => {
        // add new task
        if(popup && newTask){
            setTasks([...tasks, {
                id: count,
                completed: false,
                task: newTask
                }]);
            setCount(count+1);
            setPopup(false);
        }

        //Edit the existing task
        if(isEdit){
            const updatedTask = tasks.map(task => {
                if(task.task === editInputValue.value){
                    return{...task, task: newTask};
                }
                return task;
            });
            setTasks(updatedTask);
            setIsEdit(false);
        }
        
    }

    // This is handling delete
    const handleDelete = (id) => {
        const updateTasks = tasks.filter(task => task.id !== id);
        setTasks(updateTasks);
    }

    // Handling edit
    const handleEdit= (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        if(taskToEdit){
            setEditInputValue({
                id: id,
                value: taskToEdit.task
            });
            setIsEdit(true);
        }
    }

    // Handling the checkbox and updating the tasks
    const handleCheckbox = (checkedTask) => {
        const updateList = tasks.map(task => {
            if(task.id === checkedTask.id){
                return{
                    ...task,
                    completed: checkedTask.completed
                };
            }
            return task;
        })

        setTasks(updateList);
    }

    // Searching the keyword
    
    var renderTasks = searchItem ? 
        tasks.filter(task => task.task.toLowerCase().includes(searchItem.toLowerCase())) :
        tasks;

    if(dropdownValue !== "all"){
        switch (dropdownValue) {
            case "pending":
                renderTasks = renderTasks.filter(pendingTask => pendingTask.completed === false);
                break;
            case "done":
                renderTasks = renderTasks.filter(doneTask => doneTask.completed === true);
                break;
            default:
                break;
        }
    }
    
    
    return(
        <div id='body'>
            <div className='taskListContainer'>
                {renderTasks.length === 0 ? 
                    <div className='emptyState'>
                        <img src='Empty_list_image.png' alt='list-empty'/>
                        <label>Empty...</label> 
                    </div> : 
                    renderTasks.map(task => <Task key={task.id} task={task} addTask={addTask} handleDelete={handleDelete} handleEdit={handleEdit} handleCheckbox={handleCheckbox}/>)
                }
            </div>
            
            <div className='addButtonContainer'>
                <button className='addButton' onClick={addTask}>
                <span className="material-symbols-outlined">
                    add
                </span>
                </button>
            </div>
        
            {isEdit && <Popup isEdit={isEdit} cancel={cancel} apply={apply} editInputValue={editInputValue} isDarkMode={isDarkMode}/>}
            {popup && <Popup cancel={cancel} apply={apply} isDarkMode={isDarkMode}/>}
        </div>
    )
}