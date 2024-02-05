import ProjectCard from "../project_components/ProjectCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import getCodeProjects from "../utils/ProjectData";

const ProjectsPage = () => {

    let projects = getCodeProjects();

    return (
        <div className="projects-container">
            <p className="work-title">My Projects</p>
            <>
                {
                    projects.map((project, i) => {
                        if(i % 2 == 0) {
                            return (
                                <Row className="projects-row">
                                    <Col>
                                        <ProjectCard 
                                            name={project.name}
                                            description={project.description}
                                            imgPath={project.imgPath}
                                            technology={project.technology}
                                            githubLink={project.githubLink}
                                        />
                                    </Col>
                                    <Col>
                                        <ProjectCard 
                                            name={projects[i + 1].name}
                                            description={projects[i + 1].description}
                                            imgPath={projects[i + 1].imgPath}
                                            technology={projects[i + 1].technology}
                                            githubLink={projects[i + 1].githubLink}
                                        />
                                    </Col>
                                </Row>
                            );
                        }
                    })
                }
            </>
        </div>
    );
}

export default ProjectsPage;