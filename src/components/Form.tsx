const Form = () => {
  return (
    <section className="section contact-section" id="form">
      <p className="section-kicker">Contact</p>
      <h2>Let&apos;s Connect</h2>
      <form className="contact-form" action="">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />

        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What would you like to discuss?"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows={5}
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Form;
