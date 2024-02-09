
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className = 'wrapper'> 
        <form action=''>
            <h1> Login</h1>
            <div className= "input-box">
                <input type='text' placeholder='Username' required></input>
            </div>
            <div className= "input-box">
                <input type='password' placeholder='Password' required></input>
            </div>
            <div className='remember-forget'>
                <label> <input type= 'checkbox'> Remember me </input></label>
                <a href='#'>Forget password</a>
            </div>

            <button type="submit"> Login</button>
            
            <div className="signup">
                <p>Dont have an account? <a href='#'>Register</a></p>
            </div>
        </form>

         
        </div>
    );
}

export default LoginForm;