import { useState, FormEvent } from "react";
import { config } from "../config";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      // TODO: Implement form submission based on chosen service
      // Example for EmailJS:
      // await emailjs.send(
      //   config.contactFormServiceId,
      //   "template_id",
      //   formData
      // );

      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent. I'll get back to you soon.");
      setFormData({ name: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setStatusMessage("Sorry, there was an error sending your message. Please try again or contact me directly via email.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section contact-section" id="form">
      <p className="section-kicker">Contact</p>
      <h2>Let&apos;s Connect</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What would you like to discuss?"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />

        {statusMessage && (
          <div
            className={`form-status ${
              status === "success" ? "form-status-success" : "form-status-error"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        <p className="contact-alternative">
          Prefer email? Contact me at{" "}
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </p>
      </form>
    </section>
  );
};

export default Form;
