import "./Registrationform.css";

function RegistrationForm() {
  function handleRegister(e) {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Registration Successful! ✅");
  }

  function handleLogin() {
    alert("Login page coming soon!");
  }

  return (
    <div className="registration-page">
      <div className="registration-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>

        </form>

        <div className="login-option">
          <span>Already registered?</span>
          <button onClick={handleLogin}>Login</button>
        </div>

      </div>
    </div>
  );
}

export default RegistrationForm;