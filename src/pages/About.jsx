import React from "react";
import ProfilePic from "../assets/profile-pic.jpg";
import Resume from "../assets/CV-21-03.pdf";
import { SMALL_SCREEN } from "../Constants";

function About() {
  /* Keeps track of the window dimensions.  Updates when window resizes */
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="content-container">
      <img
        src={ProfilePic}
        className={`profile-pic fade right ${
          dimensions.width < SMALL_SCREEN ? "center-2" : "float-left"
        }`}
        alt="Profile"
      ></img>
      <div className="fade left">
        <h1>About</h1>
        <p>
          I am a problem solver that loves to program. This has lead to a deep
          interest in robotics and a passion for coding and algorithms. I also
          enjoy design and I am good at coming up with creative solutions and
          work well in a team.
        </p>
        <p>
          I'm currently doing Computer Systems Engineering, conjoint with
          Science; Logic and Computation. During this I'm learning a range of
          programming languages, as well as logic, mathematics, proofs and
          electrical systems.
        </p>
        <h2>Background</h2>
        <p>
          I was born in New Zealand and enjoy travelling. I also enjoy
          badminton, skiing, art and piano. I am now studying a conjoint of
          Computer Systems Engineering and Science, majoring in Logic and
          Computation at the University of Auckland.
        </p>
        <h2>Education</h2>
        <p>
          I passed NCEA Level 3 with excellence endorsement. I attained 72
          excellence credits, achieving a rank score of 312/320.
        </p>
        <p>
          I am now in my fourth year of university, taking a conjoint in
          Computer Systems Engineering and Science, majoring in Logic and
          Computation. I expect to finish this degree in 2021.
        </p>
        <h2>Technologies</h2>
        <ul className="code-bullet-points">
          <li>Git</li>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Matlab</li>
          <li>VHDL</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <h2>Qualities</h2>
        <ul className="value-bullet-points">
          <li>
            <strong>Good problem solver</strong> – Designed solutions to
            problems in hackathons and programming competitions
          </li>
          <li>
            <strong>Organised</strong> – Ran a business that has been continued
            whilst taking 5 courses a semester at university
          </li>
          <li>
            <strong>Polite and friendly</strong> – I have worked in customer
            service, taught children to code and taken up the role of class rep
          </li>
          <li>
            <strong>Quick thinker</strong> – Been in competitions including,
            NZPC, Alice competition, Mathex, and other math competitions
          </li>
          <li>
            <strong>Hard worker</strong> – Often took 5 papers a semester,
            whilst working part-time
          </li>
        </ul>
        <h2>Resume</h2>
        <p>Like what you see?  <a href={Resume} download>Download my CV</a></p>
      </div>
    </div>
  );
}

export default About;
