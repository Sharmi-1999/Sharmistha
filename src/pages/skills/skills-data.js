import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_CPLUSPLUS from "../../assets/img/skills/c++.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";

export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link:
        "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
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
      link: "https://www.php.net/",
      imgAltText: "Php",
      imgSrc: L_PHP,
      skillName: "PHP",
    },
    {
      link: "https://www.djangoproject.com/",
      imgAltText: "Django",
      imgSrc: L_DJANGO,
      skillName: "Django",
    },
    {
      link: "https://flask.palletsprojects.com/",
      imgAltText: "Flask",
      imgSrc: L_FLASK,
      skillName: "Flask",
    },
  ],
  hostingPlatforms: [
    {
      link: "https://www.heroku.com/",
      imgAltText: "Heroku",
      imgSrc: L_HEROKU,
      skillName: "Heroku",
    },
    {
      link: "https://pages.github.com/",
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    },
  ],
  programmingLanguages: [
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "C++",
      imgSrc: L_CPLUSPLUS,
      skillName: "C++",
    },

    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: L_PYTHON,
      skillName: "Python",
    },
  ],
  databases: [
    {
      link: "https://www.postgresql.org/",
      imgAltText: "PostgreSQL",
      imgSrc: L_POSTGRESQL,
      skillName: "PostgreSQL",
    },
    {
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
  ],
};
