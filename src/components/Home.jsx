
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="intro">HELLO, I'M</p>

        <h1>
          Vaishnavi <span>Madheswaran</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="description">
          I am a passionate software developer interested in
          building modern, responsive and user-friendly web
          applications. I love learning new technologies and
          solving real-world problems through code.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="/Vaishnavi.M resume.pdf" download className="btn secondary">
            ⬇ Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Vaishnavim2005"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vaishnavi1025"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
  href="https://mail.google.com/mail/?view=cm&to=vaishnavimatheswaran@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  ✉ Email Me
</a>
<a
  href="https://leetcode.com/u/Vaishnavimadheswaran/"
  target="_blank"
  rel="noreferrer"
>
  LeetCode
</a>

        </div>
      </div>

      
    </section>
  );
}

export default Home;
