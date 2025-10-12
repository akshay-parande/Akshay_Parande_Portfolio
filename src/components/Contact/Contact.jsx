
import { useState } from "react";



const Contact = () =>{


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${formData.name}! I will get back to you soon.`);

        setFormData({
          name: '',
          email: '',
          message: '',
        });
    };


    return(
        <div className="text-white px-6 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Contact Me</h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-300">
                Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects and opportunities.
              </p>
              <p className="text-gray-300">
                📧 Email: <span className="font-semibold text-orange-400">akshayparande3522@gmail.com</span>
              </p>
              <p className="text-gray-300">
                📍 Location: <span className="font-semibold text-orange-400">Pimpri-Chinchwad, India</span>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/akshay-parande" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">GitHub</a>
                <a href="https://linkedin.com/in/akshay-parande" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">LinkedIn</a>
                <a href="https://leetcode.com/u/akshay-parande" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">LeetCode</a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex-1 bg-[#16213e] p-6 rounded-2xl shadow-lg flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0f172a] border border-gray-600 text-white focus:outline-none focus:border-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0f172a] border border-gray-600 text-white focus:outline-none focus:border-orange-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0f172a] border border-gray-600 text-white focus:outline-none focus:border-orange-400 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

    )
}

export default Contact;