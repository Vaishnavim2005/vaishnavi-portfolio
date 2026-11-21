
const projects = [
  {
    title: "RFID-Based Attendance System",
    duration: "Sep 2023 – Mar 2024",
    description: [
      "Used RFID cards/tags for student identification, with an MFRC522 RFID reader connected to an ESP8266 to scan each card's unique ID and match it against registered student details.",
      "Automatically recorded the student's name, ID, date, and time upon successful identification, eliminating manual attendance and reducing errors.",
      "Sent attendance data from the ESP8266 to Google Sheets via Google Apps Script, allowing teachers and administrators to access and maintain attendance records online."
    ],
    tech: "Arduino • RFID • ESP8266 • Google Sheets • IoT",
    github: ""
  },
  {
    title: "Discussion Forum (MERN Stack)",
    duration: "Aug 2024 – Dec 2024",
    description: [
      "Enabled user registration and login using JWT authentication to securely verify users and protect authorized features.",
      "Allowed users to create posts and participate in discussions, with REST APIs handling create, view, update, and delete operations.",
      "Built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for storing user and discussion data."
    ],
    tech: "MongoDB • Express.js • React.js • Node.js • JWT • REST API",
    github: "https://github.com/Vaishnavim2005/front-discussion-main"
  },
  {
    title: "Smart Property Locator",
    duration: "Nov 2024 – Jun 2025",
    description: [
      "Allowed users to search for properties based on location and property requirements, making it easier to identify suitable properties.",
      "Used Leaflet-based interactive maps to display properties geographically, helping users understand property locations and nearby surroundings.",
      "Applied location intelligence and historical price data to analyze property value and potentially predict future price trends."
    ],
    tech: "Java • Leaflet • Maps • Algorithms",
    github: ""
  },
  {
    title: "Blockchain-Based Health Insurance Claim Verification",
    duration: "Aug 2025 – Apr 2026",
    description: [
      "Stored key health insurance claim information on blockchain, providing a tamper-resistant and traceable record.",
      "Used smart contracts to automatically verify policy validity, claim eligibility, and required information, reducing manual work.",
      "Created a transparent record shared between customers, hospitals, and insurers, reducing duplicate or fraudulent claims."
    ],
    tech: "Blockchain • Smart Contracts • IPFS • Database",
    github: ""
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p className="duration">
              <strong>Duration:</strong> {project.duration}
            </p>

            <p><strong>Description:</strong></p>
            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="tech">
              <strong>Technology Used:</strong> {project.tech}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗ | Source Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
