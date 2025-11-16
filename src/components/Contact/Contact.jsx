import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "25abd1d6-577b-415b-b936-185cb87a0442";
const sanitizeInput = (value) => {
  return value
    .replace(/[<>]/g, "") 
    .replace(/script/gi, ""); 
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const safeValue = sanitizeInput(value);
    setFormData((prev) => ({
      ...prev,
      [name]: safeValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      newErrors.name = "Name should contain only letters and spaces.";
    }

    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = "Message is required.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("access_key", WEB3FORMS_ACCESS_KEY);
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("message", formData.message.trim());
      data.append("subject", "New message from portfolio contact form");
      data.append("from_name", "Portfolio Website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (json.success) {
        setPopup({
          open: true,
          type: "success",
          message: `Thank you, ${formData.name}! Your message has been sent.`,
        });

        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error(json.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setPopup({
        open: true,
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="text-white px-6 py-16 bg-[#020617]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-300">
              Have a project in mind or just want to say hello? Feel free to
              reach out. I'm always open to discussing new projects and
              opportunities.
            </p>
            <p className="text-gray-300">
              📧 Email:{" "}
              <span className="font-semibold text-orange-400">
                akshayHparande003@gmail.com
              </span>
            </p>
            <p className="text-gray-300">
              📍 Location:{" "}
              <span className="font-semibold text-orange-400">
                Pimpri-Chinchwad, India
              </span>
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://github.com/akshay-parande"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/akshay-parande"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/akshay-parande"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                LeetCode
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-[#0f172a] p-6 md:p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`p-3 rounded-md bg-[#020617] border text-white focus:outline-none focus:border-orange-400 transition
                  ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`p-3 rounded-md bg-[#020617] border text-white focus:outline-none focus:border-orange-400 transition
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
                className={`p-3 rounded-md bg-[#020617] border text-white focus:outline-none focus:border-orange-400 resize-none transition
                  ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {popup.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-[#0b1120] border border-gray-700 rounded-2xl p-6 max-w-sm mx-4 text-center shadow-xl">
            <h4
              className={`text-xl font-semibold mb-2 ${
                popup.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {popup.type === "success" ? "Success" : "Error"}
            </h4>
            <p className="text-gray-200 mb-4">{popup.message}</p>
            <button
              onClick={() =>
                setPopup((prev) => ({ ...prev, open: false }))
              }
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
