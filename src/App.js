import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/titlemessage.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Project from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact-form/contact-form.component";
import Footer from "./components/footer/footer.component";
import Container from "react-bootstrap/Container";
import Bgimage from "./assets/img/myimg/w3.jpg";
import Particles from "react-particles-js";
import { particleOption } from "./particleOption";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <Particles className="particles particles-box" params={particleOption} />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Bgimage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded pt-5 pb-5">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgColor="black"
          bgImageAlt=""
          strength={-200}
        >
          <hr />
          <div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <Project />
              </Slide>
            </Container>
          </div>
        </Parallax>
      </div>

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgColor="black"
          bgImageAlt=""
          strength={-200}
        >
          <hr />
          <div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <Experience />
              </Slide>
            </Container>
          </div>
        </Parallax>
      </div>

      <hr />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgColor="black"
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Skills />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <hr />
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImageAlt="" strength={-200}>
          <div>
            <Container className="container-box rounded pt-5 pb-5">
              <Fade duration={500}>
                <Contact />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
