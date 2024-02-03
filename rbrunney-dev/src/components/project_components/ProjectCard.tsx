import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub } from "react-icons/fa";

interface IProjectCardProps {
    name: string
    description: string
    imgPath: string
    technology: string[],
    githubLink: string
}

const ProjectCard = (props: IProjectCardProps) => {
    return (
        <>
            <Card className="project-card">
                <Card.Body>
                    <Row>
                        <Col className="project-tech">
                            {
                                props.imgPath !== '' ? <Card.Img variant="top" src={props.imgPath} className="project-img"/> 
                                                     : <Card.Subtitle className="project-img-coming-soon">COMING SOON!</Card.Subtitle>
                            }
                        </Col>
                        <Col className="project-description">
                            <Row>
                                <Col><Card.Title className="project-title">{props.name}</Card.Title></Col>
                                <Col className="project-links-section">
                                    {
                                        props.githubLink ? <a href={props.githubLink} target="_blank" className="project-links">
                                                                <FaGithub size={25}/>
                                                            </a>
                                                        : ""
                                    }
                                </Col>
                            </Row>
                            <Card.Text className="project-decription">{props.description}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default ProjectCard;