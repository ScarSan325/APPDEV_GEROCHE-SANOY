function Login() {
  return (
    <form>
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" name="username" />
      </label><br />
      <label>
        Password:
        <input type="password" name="password" />
      </label><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;