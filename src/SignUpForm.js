// import React, {useState} from 'react'

// function SignUpForm({setUser}){
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");

// // creating new login credentials to created in database
// // post request because it is a create request

//     function handleSubmit(e){
//         e.preventDefault()
//         setUsername("")
//         setPassword("")
//         setPasswordConfirmation("")
//         fetch("/signup",{
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 user: {username, password, 
//                  password_confirmation: passwordConfirmation}})
//         }).then(r => {
//             (r.json().then(user => setUser(user)))
//         }).then(
//             setUsername('')
//         )
//     }

//     return(
//         <>
//             <div className="app">
//             <form onSubmit = {handleSubmit}>
//                 <label>Username:</label>
//                 <input 
//                 type = "text" 
//                 id = "signupUsername" 
//                 value = {username} 
//                 onChange = {e => setUsername(e.target.value)}/>
//                 <br></br>
//                 <label htmlFor="password">Password: </label>
//                 <input
//                 type="password"
//                 id="password2"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="current-password"
//                 />
//                 <br></br>
//                 <label htmlFor="password">Password{<br></br>}Confirmation:</label>
//                 <input
//                 type="password"
//                 id="password_confirmation"
//                 value={passwordConfirmation}
//                 onChange={(e) => setPasswordConfirmation(e.target.value)}
//                 autoComplete="current-password"
//                 />
//                 <button type = "submit" variant = "contained" size = "small">Create</button>
//             </form>
//             </div>
//         </>
//     )
// }

//export default SignUpForm;