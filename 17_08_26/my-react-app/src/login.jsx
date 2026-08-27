import "./login.css";

function Login() {
  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      alert("Login Successful! ✅");
    } else {
      alert("Please enter email and password.");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;