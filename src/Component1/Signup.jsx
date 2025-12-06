function Signup() {
  return (
    <form>
      <h1>Signup</h1>
      <label>
        Email:
        <input type="text" name="email" />
      </label><br />
      <label>
        Password:
        <input type="password" name="password" />
      </label><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;