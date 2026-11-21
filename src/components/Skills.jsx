
const skillCategories = [
  {
    title: "Programming",
    skills: [
      "Java",
      "JavaScript"
    ]
  },
  {
    title: "Web Development",
    skills: [
      "REST APIs",
      "JWT Authentication"
    ]
  },
  {
    title: "Core CS",
    skills: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Data Structures & Algorithms"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "VS Code",
      "Git",
      "Docker",
      "Ganache",
      "Metamask",
      "IPFS",
      "Figma",
      "Eclipse IDE",
      "ChatGPT",
      "Claude",
      "Prompt Engineering"
    ]
  },

{
  title: "Soft Skills",
  skills: [
    "Teamwork",
    "Quick Learner",
    "Problem Solving",
    "Adaptability",
    "Communication",
    "Time Management"
  ]
}

];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-items">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
