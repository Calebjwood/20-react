
import { useState } from 'react';


const Contacts = () => {

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
  
    const [notValid, setNotValid] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
      
        

    }

    const handleChange = (event) => {
        const { name, value } = event.target
       
        if(name === "name" && event.target.value.length === 0){
            setNotValid('Please enter your name')
        }
        if(name === "email" && event.target.value.length === 0){
            setNotValid('Please enter your email')
        }
        if(name === "email" && !validateEmail(value)){
            setNotValid('Please enter a valid email');
        }else(setNotValid(''))
        if(name === "message" && event.target.value.length === 0){
            setNotValid('Please enter your message')
        } 
    }

  return (
    <div>
      <h3>Contact Me</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
            <textarea 
                name="name" 
                placeholder="Name"
                onChange={handleChange}
            ></textarea>
        </div>
        <div>
            <textarea 
                name="email" 
                placeholder="Email"
                onChange={handleChange}
            ></textarea>
        </div>
        <div>
            <textarea 
                name="message" 
                placeholder="Message"
                onChange={handleChange}
            ></textarea>
        </div>
        <div>
            <button type="submit">send</button>
        </div>
        <div>
           <h2>{notValid}</h2>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
