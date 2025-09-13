import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_vuisjvf",   // replace with your Service ID
                "template_zbeonk9",  // replace with your Template ID
                form.current,
                "CqyyEffGf8eE-kviV"    // replace with your Public Key
            )
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
        <section id="Contact" className="py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-purple-700 mb-8">Contact Me</h2>
                <p className="text-gray-700 mb-12">
                    I’m open to opportunities, collaborations, or just a friendly chat.
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white p-8 rounded-2xl shadow-md space-y-6 max-w-xl mx-auto"
                >
                    <div>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-pink-500 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
