import React, { useEffect, useState } from "react";
import './App.css';
import Screen1 from "./Mycomponents/Screen1";
import Screen2 from "./Mycomponents/Screen2";

function App() {
	const [data,setData] = useState([])
	useEffect(()=>{

		fetch("https://api.tvmaze.com/search/shows?q=all").then((result)=>{
			result.json().then((res)=>{
				setData(res);
			})
		})
	},[])
	return (
    <div className="App flex">
		<Screen1 title={data}/>      
		<Screen2 title={data}/> 
    </div>
  );
}

export default App;
