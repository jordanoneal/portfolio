import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_PYTHONANYWHERE from "../../assets/img/skills/pythonanywhere.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_GOLANG from "../../assets/img/skills/go-6.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";

const skills = {
  frontend: [
    {
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
    {
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://reacttraining.com/react-router/",
      imgAltText: "React Router",
      imgSrc: L_REACT_ROUTER,
      skillName: "React Router",
    },
    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: L_REACT_BOOTSTRAP,
      skillName: "React Bootstrap",
    },
  ],

  backend: [
    {
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: "Node.js",
    },
    {
      imgAltText: "Express",
      imgSrc: L_EXPRESS,
      skillName: "Express",
    },
  ],
  hostingPlatforms: [
    {
      imgAltText: "Heroku",
      imgSrc: L_HEROKU,
      skillName: "Heroku",
    },
    {
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    },
  ],
  programmingLanguages: [
    {
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      imgAltText: "TypeScript",
      imgSrc: L_TYPESCRIPT,
      skillName: "TypeScript",
    },
  ],
  databases: [
    {
      imgAltText: "PostgreSQL",
      imgSrc: L_POSTGRESQL,
      skillName: "PostgreSQL",
    },
    {
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
  ],
  versionControl: [
    {
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],
};

export default skills;
