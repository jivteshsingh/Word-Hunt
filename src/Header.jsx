import React from 'react';
import "./Header.css"
import { MenuItem, ThemeProvider, TextField, createTheme } from '@mui/material';
import categories from "./categories"

function Header({ category, setCategory,word, setWord, lightmode }){

  const darkTheme = createTheme({
  palette: {
    primary:{
      main: lightmode ? "#000" : "#fff",
    },
    mode: lightmode ? "light" : 'dark',
  },
});

  const handlechange = (e) => {
    setCategory(e.target.value);
    setWord("");
  }

  return(
    <div className="header">
    <span className="title">{word ? word:"Word Hunt"}</span>
    <div className="inputs">
    <ThemeProvider theme={darkTheme}>
    <TextField  className="search" value={word} onChange={(e) => setWord(e.target.value)}  label="Type your Word" variant="standard" />
    <TextField
         className="select"
         select
          label="Language"
          value={category}
          onChange={handlechange}
         variant="standard"
       >

       {categories.map((option) => (
         <MenuItem key={option.label} value={option.label} >{option.value}</MenuItem>
       ))}


       </TextField>
    </ThemeProvider>
    </div>
    </div>
  )
}

export default Header;
