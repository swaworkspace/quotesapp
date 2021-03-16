import React, { useState,useEffect } from "react"
import './App.css';

function App() {

    const [quote,setQuote] = useState('');
    const [author,setAuthor]= useState('');
    var [category, setCategory] = useState('')
    const [data,setData] = useState(null);


  
    function getQuote() {
      if(category==='')
      {
            category='all';
      }
        fetch('https://famous-quotes4.p.rapidapi.com/random?category='+category+'&count=10',{method: 'GET',
        headers: {
          'x-rapidapi-key': '1b830908a2msh043b4a7a7091c4fp1c3ac2jsn8e32c6627c69',
          'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
          useQueryString: true}})
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data[0]!==undefined)
            {
            setQuote(data[0].text);
            setAuthor(data[0].author);
            setData(data);
            }else{
              setQuote("No quotes found with this category ");
            }
            
        })
    }

    function handleChange(e) {

setCategory(e.target.value);
    }
var quotesList=data?data.map(quoteObj=>
    <h3>{quoteObj.text}</h3>
  ):<h3></h3>;
  return (
    <div id="container">
    <div class="controls">
    <input
          type="text"
          placeholder="Category"
          onChange={handleChange}
        />
    <button type="button" onClick={getQuote}>INSPIRE ME</button>

  
    <h1>{quote}</h1>
    <p>- {author}</p>
    <br></br>
    
    <h2>More quotes like this..</h2>
<div>{quotesList}</div>
   
     </div>
     </div>
  );
  
}

export default App;

