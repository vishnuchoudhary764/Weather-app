
import './App.css'
import Container from './component/Container'
import Theme from './component/Theme'
import React, {  useState } from 'react';


function App() {
  const [theme, setTheme] = useState("light");
  
    const toggleTheme = () => {
      setTheme((prevMode) => !prevMode);
    };
     

  return (
   <div className='app'>
     <Theme setTheme={setTheme} toggleTheme={toggleTheme}/>
    <Container theme={theme} />
   </div>
  )
}

export default App
