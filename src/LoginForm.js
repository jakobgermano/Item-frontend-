// import React from "react";
// import { useState } from "react";
// //import SignUpForm from "./SignUpForm";

// function LoginForm({setUser}){
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [error, setError] = useState("")

    
// // containing fetch create request for creating the user session apon login
// //and input form for entering login credentials

//     function handleSubmit(e){
//         e.preventDefault()
//         fetch('/login',{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         }).then(r => {
//             if(r.ok){
//             r.json().then(user => setUser(user)).then(setUsername('')).then(setPassword(''))
//             }
//             else {
//                 r.json().then(error => setError(error.error))
//             }
//         })
//     }

//     return(
//         <>
//         <div id = "welcomeContainer">
//             <h1 id="welcome">whatta buy inc.</h1>
//             <div id = "login">
//                 <h4>Login to your account</h4>
//                 <form onSubmit = {handleSubmit}>
//                     {error ? <span>{error}</span> : <span></span>}
//                     <br></br>
//                     <label>Username:</label>
//                     <div className="usernameInput">
//                     <input 
//                     type = "text" 
//                     id = "username"
//                     value = {username}
//                     onChange = {e => setUsername(e.target.value)}/>
//                     </div>
//                     <br></br>
//                     <label>Password: </label>
//                     <div className="passwordInput">
//                     <input
//                     type = "password"
//                     value = {password}
//                     onChange = {e => setPassword(e.target.value)}/>
//                     </div>
//                     <div className="loginButton">
//                     <button type = "submit" >Login</button>
//                     </div>
//                 </form>
//                 <h4>Need to create an account?</h4>
//                 
//             </div>
//         </div>
//         </>
//     )
// }


//export default LoginForm;