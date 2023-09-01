import "@/app/globals.css";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import GoogleButton from "@/components/GoogleBtn";

const Login = (props) => {
  
  const callbackUrl = props.searchParams.callbackUrl || '/'
  
  return (
    <div className="center">
      <div>
        <h3 style={{ textAlign: "center" }}>Welcome to App Name</h3>
        <p style={{ margin: "10px auto", textAlign: "center" }}>
          Login to Your Account
        </p>

        <GoogleButton callbackUrl={callbackUrl} />

        <LoginForm />
      </div>
      <p>
        Don't have an account ?{" "}
        <span>
          <Link href="/auth/signup" className="link-text">
            Signup
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
