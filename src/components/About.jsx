
function About() {
  const education = [
    {
      level: "Undergraduate UG:(2022-2026)",
      degree: "Bachelor of Engineering",
      stream: "Computer Science and Technology",
      institution: "Vivekanandha College of Engineering for Women",
      location: "Tiruchengode, Namakkal (Dt)",
      score: "7.6 CGPA (Up to 8th Semester)"
    },
    {
      level: "Higher Secondary 12th :(2021-2022)",
      institution: "Government Girls Higher Secondary School",
      Course: "Computer Science",
      location: "Komarapalayam, Namakkal (Dt)",
      score: "75%"
    },
    {
      level: "Secondary School 10th :(2019-2020)",
      institution: "Government Girls Higher Secondary School",
      location: "Komarapalayam, Namakkal (Dt)",
      score: "68%"
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <p>
          I am a Computer Science and Technology graduate
          passionate about software development and technology.

          I have knowledge of Java, Python, JavaScript,
          React.js and the MERN stack.

          I enjoy developing applications, exploring
          new technologies and continuously improving
          my programming skills.
        </p>
      </div>

      <h2 className="education-title">My Education</h2>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <span className="education-level">
              {item.level}
            </span>

            {item.degree && <h3>{item.degree}</h3>}

            {item.stream && (
              <p><strong>Stream:</strong> {item.stream}</p>
            )}

            <h3>{item.institution}</h3>

            <p>
              <strong>Location:</strong> {item.location}
            </p>

            <p className="education-score">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
