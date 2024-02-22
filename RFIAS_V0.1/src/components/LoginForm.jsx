import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="screen">
        <div className="screen__content">
          <form action="">
            <div className="inputbox">
              <input typeof="text" placeholder="Username" required />
            </div>
            <div className="inputbox">
              <input typeof="password" placeholder="Password" required />
            </div>
            <div className="remember_me">
              <input type="checkbox"  id="rememberMe" />
              <label htmlFor='rememberMe'>Remember me </label>
            </div>
            <div className="forgotpassword?">
              <a  className="forgotpassword" href="#">Forgot password?</a>
            </div>

            <button type="submit" className="button" role="button">
              {" "}
              Login{" "}
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
            <div className="signup">
              <p>
                Dont have an account? <a className="register" href="#">Register</a>
              </p>
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
  );
};

export default LoginForm;
