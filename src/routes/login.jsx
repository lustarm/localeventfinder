import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md font-gae">
                <h2 className="text-3xl font-bold text-white text-center mb-8 font-gae">
                    Login to Your Account
                </h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username or email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-400 text-center mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;

