import ProjectCard from "../project_components/ProjectCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import getCodeProjects from "../utils/ProjectData";

const ProjectsPage = () => {

    let projects = getCodeProjects();

    return (
        <div className="projects-container">
            <>
                {
                    projects.map((project, i) => {
                        if(i % 2 == 0) {
                            return (
                                <Row className="project-row">
                                    <Col>
                                        <ProjectCard 
                                            name={project.name}
                                            description={project.description}
                                            imgPath={project.imgPath}
                                            technology={project.technology}
                                        />
                                    </Col>
                                    <Col>
                                        <ProjectCard 
                                            name={projects[i + 1].name}
                                            description={projects[i + 1].description}
                                            imgPath={projects[i + 1].imgPath}
                                            technology={projects[i + 1].technology}
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