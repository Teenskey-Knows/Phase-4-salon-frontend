import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ setProvider }) {
    const history = useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // function handleChange(e) {
    //   setFormData({
    //     ...formData,
    //     [e.target.email]: e.target.value,
    //   });
    // }
  
    function handleSubmit(e) {
      console.log(JSON.stringify({email, password}))
      e.preventDefault();
      fetch("https://thawing-journey-77356.herokuapp.com/provider/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })
        .then((r) => {
         if(r.ok){
          r.json()
          .then((provider) => {
            setProvider(provider);
            history("/posts");
            // alert('Login successful')
          });
         }
         else{
          alert('Login failed')
         }
        })
        
        
    }
  

  return (
    <div className="login">
    <form className="sign" onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;