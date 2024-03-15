import React, { useState } from 'react';
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [dropdownValue, setDropdownValue] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`App ${isDarkMode && 'darkMode'}`}>
      <div className='parentContainer'>
        <Header setSearchItem={setSearchItem} setDropdownValue={setDropdownValue} handleMode={handleMode}/>
        <Body searchItem={searchItem} dropdownValue={dropdownValue} isDarkMode={isDarkMode}/>
      </div>
     
    </div>
  );
}

export default App;
