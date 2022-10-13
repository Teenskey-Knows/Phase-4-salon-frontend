import React from "react";
import './Signup.css'

function Signup(){
    return (
<div>
    <h1>Signup</h1>
        <form action="action_page.php" style="border:1px solid #ccc">
  
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</input>
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>

</form>
</div>
    )
    
}

export default Signup;