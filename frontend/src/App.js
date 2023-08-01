import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [email, setEmail] =useState("");

  const sendMail = async (e) => {

    e.preventDefault();

    const data = {
      email
    }

    const response = await axios.post("http://localhost:4000/api/sendmail", data);

    console.log(response.data);
 
  }

  return (
    <div className="App">
      <form onSubmit={sendMail}>
        <div>
          <input type="email" value = {email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email'/>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
