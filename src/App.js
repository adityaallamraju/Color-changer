import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { Dropdown } from 'bootstrap';
// import DropdownButton from 'react-bootstrap';



function App() {
  var colors = [
    {
      value:1,
      label:"Lime"
    },
    {
      value:2,
      label:"lavender"
    },
    {
      value:'Crimson',
      label:"crimson"
    },
    {
      value:4,
      label:"darkblue"
    },
    {
      value:5,
      label:"Teal"
    },
    {
      value:6,
      label:"ghostwhite"
    },
    {
      value:7,
      label:"aquamarine"
    },
    {
      value:5,
      label:"aliceblue"
    }

  ];

  const[input,setinput]=useState(colors.label)
  function changeHandle(e){
    setinput(e.label)
    console.log(e.label)
  }
  return (
    
    <div className="dropdownbar">
      <h1>Color Changer</h1>
          <Select options={colors} onChange={changeHandle} className="option"></Select>
          <center><button style={{backgroundColor:`${input}`}}></button></center>
    </div>
  );
}

export default App;
