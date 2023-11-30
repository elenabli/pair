import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const signupUrl = "/api/user/signup";
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const password2Input = useField("password");
  const email = emailInput.value;
  const password = passwordInput.value;
  const password2 = password2Input.value;
  const { handleSignup } = useSignup(email, password, password2, setIsAuthenticated, signupUrl);


  return (
    <div>
      <h2>Signup</h2>
      <label>
        Email:
        <input
          {...emailInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          {...passwordInput}
        />
      </label>
      <label>
        Confirm Password:
        <input
          {...password2Input}
        />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
