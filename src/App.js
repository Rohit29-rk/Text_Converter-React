import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React,{useState} from 'react'
import Alert from './components/Alert';




// here prop is use from navbar components
function App() {
  const [alert, setAlert] = useState(null);
  const salert= (message)=>{
    setAlert({
      msg: message

    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  
  const [mode, setMode] = useState('light');
  const toggle = () =>{
    if (mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor ='#0f131b';
      salert("Dark mode has been Enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      salert("Light mode has been Enabled");

    }
  }
  return (
    <>
    <Navbar homepage="Home" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Text heading='Enter Text Here' mode={mode} salert={salert}/>
    </div>
    
      
      

    </>
  );
}

export default App;
