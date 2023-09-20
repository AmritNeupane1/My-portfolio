import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Movie4you",
      description:
        "Created a web app that displays movie information and recommendations from the TMDb API, with 16 genres to choose from.",
      imgUrl: projImg1,
    },
    {
      title: "Gmail-Clone",
      description:
        " Built a web app that mimics Gmail using React, Material-UI, Node.js, Express, and MongoDB, with a responsive user interface that supports 4 screen sizes.      ",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Music Player",
      description: "Architected using HTML, CSS, javascript",
      imgUrl: projImg4,
    },
    {
      title: "Calculator",
      description:
        "Full functioning calculator made using Html Css and Javascript. Used eval() to evaluate the result, added event listener for each buttons.",
      imgUrl: projImg5,
    },
    {
      title: "TicTacToe",
      description:
        "Build in C++. Gave both options : Player vs Player and Player vs Computer",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="Projectsy">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "Exploring Innovation: Our Portfolio of Projects"<br></br>
                    "Turning Ideas into Reality: Our Project Portfolio"<br></br>
                    "Journey Through Our Endeavors: Highlighted Projects"
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section"></Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
