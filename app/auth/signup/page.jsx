import "@/app/globals.css";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import GoogleButton from "@/components/GoogleBtn";

const Signup = () => {
  return (
    <div className="center">
      <div>
        <h3 style={{ textAlign: "center" }}>Welcome to App Name</h3>
        <p style={{ margin: "10px auto", textAlign: "center" }}>
          Create Your Account
        </p>
        <GoogleButton />
        <SignupForm />
      </div>
      <p>
        Already have an account ?{" "}
        <span>
          <Link href="/auth/login" className="link-text">
            Login
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
