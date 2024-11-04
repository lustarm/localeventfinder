import Navbar from "../components/navbar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-800 text-gray-100 font-gae flex flex-col">
            <Navbar />
            <div className="flex flex-col items-center py-10 px-4">
                <h1 className="text-3xl font-bold font-gae mb-4">
                    Get in Touch
                </h1>
                <p className="font-semibold text-lg max-w-2xl text-center leading-relaxed mb-8">
                    Have a question, suggestion, or just want to say hello? We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
                </p>

                <form className="bg-gray-700 p-6 rounded-lg shadow-md max-w-md w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="resize-none w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                            rows="4"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;

