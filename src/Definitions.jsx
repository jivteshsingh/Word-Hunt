import React from 'react';
import "./Definitions.css"

function Definitions({ category, meanings, word, lightmode }){
  return(
    <div className="meanings">
    <div>
    {meanings[0] && word && category === "en" && (<audio className="audio" src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>your browser</audio>)}
    </div>
    {word === "" ? (<span className="subtitle">Start by typing a word in search</span>) :
    (meanings.map((mean) => (
      mean.meanings.map((item) => (
      item.definitions.map((def) => (
      <div className="singlemean" style={{backgroundColor: lightmode ? "#3b5360" : "white", color: lightmode ? "white" : "black",}}>
      <b>{def.definition}</b>
      <hr className="line" />
      {def.example && (<span><b>Example : </b>{def.example}</span>)}
      {def.synonyms && (<span><b>Synonyms : </b>{def.synonyms.map((s) => `${s}, ` )}</span>)}
      {def.antonyms && (<span><b>Antonyms : </b>{def.antonyms.map((a) => `${a}, `)}</span>)}
      </div>
      ))
    ))
    )))}
    </div>
  )
}

export default Definitions;
