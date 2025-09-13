import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        F
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <section id="Contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-700 mb-4 sm:mb-6 lg:mb-8">
                    Contact Me
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm open to opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl space-y-4 sm:space-y-5 lg:space-y-6 max-w-xs sm:max-w-md lg:max-w-xl mx-auto border border-gray-100"
                >
                    <div>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg p-3 sm:p-3.5 lg:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200 hover:border-purple-300"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg p-3 sm:p-3.5 lg:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200 hover:border-purple-300"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-3 sm:p-3.5 lg:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200 hover:border-purple-300 resize-none"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-3.5 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-purple-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Additional Contact Info */}
                <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
                    <p className="text-xs sm:text-sm text-gray-500">
                        or reach out directly at{" "}
                        <a href="mailto:your.email@example.com" className="text-purple-600 hover:text-purple-700 font-medium">
                            anshulrohilla111@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;