import React from "react";
import ProfilePic from "../assets/profile-pic.jpg";
import Resume from "../assets/Kimberley CV-25-03.pdf";
import { SMALL_SCREEN } from "../helpers/Constants";
import { AUnderline, LinkUnderline } from "./components/underline links";

export const About = () => {
  /* Keeps track of the window dimensions.  Updates when window resizes */
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
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
          I am a problem solver that loves to program. This has led to a deep
          interest in robotics and a passion for coding and algorithms. I also
          enjoy design, am good at coming up with creative solutions and work
          well in a team.
        </p>
        <p>
          I am currently a software engineer at Xero. I have also had other
          jobs, such as working at Drone Deploy, Bricks4Kidz, Ooma and FlexWare.
          These have mainly been software jobs, but I have also gained
          experience teaching, working with electrical systems and a little bit
          of robotics.
        </p>
        <p>
          I have completed a degree in Computer Systems Engineering, conjoint
          with Science; Logic and Computation. During this I learnt a range
          of programming languages, as well as logic, mathematics, proofs and
          electrical systems.
        </p>
        <h2>Background</h2>
        <p>
          I was born in New Zealand and enjoy travelling. I also enjoy
          badminton, skiing, art and piano. 
        </p>
        <h2>Experience</h2>
        <p>I have worked at several internships, done many hackathons and personal projects.  
          My main work experience is at Xero!  
        </p>
        <LinkUnderline text="Check out my experience here" href="/experience" width="260px" />
        <h2>Education</h2>
        <h4>University</h4>
        <p>
          I have completed a conjoint degree, gaining First Class Honours in
          Computer Systems Engineering and a Bachelor of Science, majoring in 
          Logic and Computation. 
        </p>
        <h4>High School</h4>
        <p>
          I passed NCEA Level 3 with excellence endorsement. I attained 72
          excellence credits, achieving a rank score of 312/320.
        </p>
        <h2>Technologies</h2>
        <ul className="code-bullet-points">
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
        <h2>Tools</h2>
        <ul className="code-bullet-points">
          <li>Git</li>
          <li>TeamCity</li>
          <li>Sumo Logic</li>
          <li>New Relic</li>
          <li>Lighthouse</li>
          <li>Mixpanel</li>
          <li>Launch Darkly</li>
        </ul>
        <h2>Qualities</h2>
        <ul className="value-bullet-points">
          <li>
            <strong>Good problem solver</strong> – Designed solutions to
            problems in hackathons and programming competitions
          </li>
          <li>
            <strong>Organised</strong> – Ran a business that has been continued
            during University and Work
          </li>
          <li>
            <strong>Friendly and approachable</strong> – I have worked in customer
            service, taught children to code, taken up the role of class rep and 
            mentored grads and students developing their tech careers
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
        <p>
          Like what you see?{" "}
          <AUnderline text="Download my CV" href={Resume} width="159px" />
        </p>
      </div>
    </div>
  );
}
