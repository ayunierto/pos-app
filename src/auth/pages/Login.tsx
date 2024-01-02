import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login to your account </h1>
        <div className="social-login">
          <button className="google">
            <i className="bx bxl-google"></i>
            Google
          </button>
          <button className="google">
            <i className="bx bxl-apple"></i>
            Apple
          </button>
        </div>
        <div className="divider">
          <div className="line"></div>
          <p>Or</p>
          <div className="line"></div>
        </div>
        <form>
          <label htmlFor="email">Email</label>
          <div className="custome-input">
            <input type="email" name="email" placeholder="Your email" />
            <i className="bx bx-at"></i>
          </div>
          <label htmlFor="password">Password</label>
          <div className="custome-input">
            <input
              type="password"
              name="password"
              placeholder="Your password"
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <button className="btn-login">Login</button>
          <div className="links">
            <a href="#">Reset Password</a>
            <a href="#">Don't have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};
