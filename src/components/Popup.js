import { useState } from "react"

export default function Popup({cancel, apply, isEdit, editInputValue, isDarkMode}) {
    const [inputValue, setInputValue] = useState(editInputValue ? editInputValue.value : "");

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }


    return(
        <div className="background">
            <div className={`popupContainer ${isDarkMode && "darkMode"}`}>
                {isEdit ? <h2>EDIT NOTE</h2> : <h2>NEW NOTE</h2>}
                <input 
                    className={`popupInput ${isDarkMode && "darkMode"}`} 
                    type="text" 
                    placeholder="Input your note" 
                    onChange={handleInput}
                    value={inputValue}
                />
                <div className="buttonContainer">
                    <button className="cancel button" onClick={cancel}>CANCEL</button>
                    <button className="apply button" onClick={() => apply(inputValue)}>APPLY</button>
                </div>
            
            </div>
        </div>
        
    )
}