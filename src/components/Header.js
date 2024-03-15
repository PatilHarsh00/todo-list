import React from 'react';


export default function Header({setSearchItem, setDropdownValue, handleMode}) {

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value)
    }

    const handleDropdown = (e) => {
        e.preventDefault();
        setDropdownValue(e.target.value)
    }

    return(
        <div id='header'>
            <div className='heading'>
                <h2>TODO LIST</h2>
            </div>
            <div className='inputContainer'>
                <div className='search'>
                    <input placeholder='Search note...' onChange={handleSearch} />
                    <button>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    </button>
                </div>

                <select id='dropdown' name="status" onChange={handleDropdown}>
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>

                <button id="mode" onClick={handleMode}>
                <span className="material-symbols-outlined">
                    dark_mode
                </span>
                </button>
            </div>
        </div>
    )
}