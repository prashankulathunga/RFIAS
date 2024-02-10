
function Signup(){
  return (
    <div className="wrapper">
      <div class="screen">
        <div class="screen__content">
      <form action="">
        <h1> Signup</h1>
        <div className="inputbox">
          <input type="text" placeholder="Employee NIC" required/>
        </div>
        <div className="inputbox">
          <input type="text" placeholder="Username" required/>
        </div>
        
        <div className="inputbox">
          <input type="password" placeholder="Password" required/>
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Confirm password" required/>
        </div>
       

        <button type="submit" class="button" role="button">Register</button>
       <br></br>

        <div className="backtologin">
          
            <a className="register" href="#" >Back to Login</a>
      
        </div>

      </form>
      </div>
      <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
    
    </div>
    </div>


  )


}
export default Signup;