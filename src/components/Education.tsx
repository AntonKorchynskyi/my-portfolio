const Education = () => {
  return (
    <section className="section" id="education">
      <p className="section-kicker">Education</p>
      <h2>Education & Certifications</h2>
      <article className="card">
        <h3>Georgian College - Barrie, Ontario</h3>
        <p>Computer Programming and Analysis (Advanced Diploma)</p>
        <p>September 2022 - April 2025 | GPA: 93.22 (4.68)</p>
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
