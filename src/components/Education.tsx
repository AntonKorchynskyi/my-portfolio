const Education = () => {
  return (
    <section className="section" id="education">
      <p className="section-kicker">Education</p>
      <h2>Education & Credentials</h2>
      <article className="card">
        <h3>Georgian College - Barrie, Ontario</h3>
        <p>Computer Programming and Analysis (Advanced Diploma), GPA 93.22</p>
      </article>
      <div className="grid-cards">
        <article className="card">
          <h3>AZ-900</h3>
          <p>Microsoft Azure Fundamentals</p>
        </article>
        <article className="card">
          <h3>AI-900</h3>
          <p>Microsoft Azure AI Fundamentals</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
