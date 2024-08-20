import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div id='lop'>
      <div class="card" id='nol'>
        <img src="" alt="Card Image" id='bmn' />
        <div class="card-content">
            <p class="card-title" id='cname'>Card Name</p>
            <p class="card-description"id='card-description'>This is a brief description of the card content. It provides more information about the card name.</p>
        </div>
      </div>
    <div id='kol'>
    <h1>Submit Your Information</h1>
    
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="image-url">Image URL:</label><br />
        <input type="url" id="image-url" name="image-url" placeholder="https://example.com/image.jpg"  /><br /><br />

       
    <button onClick={function mlp(){
          var nol = document.getElementById("nol")
          var kol = document.getElementById("kol")
          var name = document.getElementById("name").value
          var description = document.getElementById("description").value
          var imageurl = document.getElementById("image-url").value
          var carddescription= document.getElementById("card-description")
          var bmn = document.getElementById("bmn")
          var cname = document.getElementById("cname")

          nol.style.display = "block"
          kol.style.display = "none"
          bmn.src = imageurl
          carddescription.innerText = description
          cname.innerText= name

        } }>submit</button>
</div>
</div>
  )
}


export default App
