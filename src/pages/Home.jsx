/* eslint-disable */
import { useState } from 'react';
import React from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input,setInput] = useState('');
  const onInputChange = (ev) =>{
    setInput(ev.target.value);
    // console.log(input);
    console.log(ev.target.value);
  };

const onSearch = () => {
  // https://api.tvmaze.com/search/shows?q=girls

  fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
  .then(r=>r.json())
  .then(result=>{
    console.log(result)
  });
}

const onKeyDown = (ev)=>{
  // console.log(ev.keyCode)
  if(ev.keyCode==13){
    onSearch();
  }
}

  return (
    <div>
    <MainPageLayout>
      <input type = "text" onChange={onInputChange} onKeyDown = {onKeyDown} value = {input}/>
      <button type = "button" onClick = {onSearch}> Search </button>
      </MainPageLayout>
    </div>
  );
}

export default Home
