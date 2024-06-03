import React, { useState } from "react";
     import axios from "axios";

     const EmailForm = () => {
       const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [message, setMessage] = useState("");

       const handleSubmit = async (e) => {
         e.preventDefault();

         try {
           const response = await axios.post("localhost:/3001/send-email", {
             name,
             email,
             message,
           });

           console.log(response.data);
           // Handle success or display an error message to the user
         } catch (error) {
           console.log(error);
           // Display an error message to the user
         }
       };

       return (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Name"
           />
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"
           />
           <textarea
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             placeholder="Message"
           ></textarea>
           <button type="submit">Send Email</button>
         </form>
       );
     };

     export default EmailForm;