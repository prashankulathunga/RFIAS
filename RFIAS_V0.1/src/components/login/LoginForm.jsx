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
              <label for='rememberMe'>Remember me </label>
            </div>
            <div className="forgotpassword?">
              <a  className="forgotpassword" href="#">Forgot password?</a>
            </div>

            <button type="submit" class="button" role="button">
              {" "}
              Login{" "}
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <div className="signup">
              <p>
                Dont have an account? <a className="register" href="#">Register</a>
              </p>
            </div>
          </form>
        </div>

        <div class="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
