import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    if (strength <= 1) return "Weak";
    if (strength === 2 || strength === 3) return "Medium";
    return "Strong";
  };

  const navigate = useNavigate();

  const { register } = useAuthContext();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null | undefined>(null);
  const [message, setMessage] = useState<string | null | undefined>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      const strength = checkPasswordStrength(e.target.value);
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setIsSubmitting(true);

    const result = await register(formData);
    if (result.message) {
      setMessage(result.message);

      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } else {
      setError(result.error);
    }

    setIsSubmitting(false);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 sm:p-8 space-y-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Register
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <div
                  className={`mt-2 text-sm ${
                    passwordStrength === "Weak"
                      ? "text-red-500"
                      : passwordStrength === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {passwordStrength && `Password strength: ${passwordStrength}`}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
            {error && (
              <div
                className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {message && (
              <div
                className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Success: </strong>
                <span className="block sm:inline">{message}</span>
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                SignIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
