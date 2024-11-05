import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md font-gae">
                <h2 className="text-3xl font-bold text-white text-center mb-8 font-gae">
                    Create an Account
                </h2>

                <form className="space-y-6">
                    {/* Username Field */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
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

                    {/* Phone Number Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* User Type Dropdown */}
                    <div>
                        <label htmlFor="userType" className="block text-sm font-medium text-gray-300">
                            User Type
                        </label>
                        <select
                            id="userType"
                            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="person">Just a person looking for local events</option>
                            <option value="business">Business owner or representative</option>
                        </select>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-gray-400 text-center mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;

