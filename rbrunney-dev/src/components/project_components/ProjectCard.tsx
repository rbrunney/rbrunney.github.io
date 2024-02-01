import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TechLabel from "./TechLabel";

interface IProjectCardProps {
    name: string
    description: string
    imgPath: string
    technology: string[]
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
                            <Card.Subtitle className="project-tech-title">Technology:</Card.Subtitle>
                        </Col>
                        <Col className="project-description">
                            <Card.Title className="project-title">{props.name}</Card.Title>
                            <Card.Text className="project-decription">{props.description}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default ProjectCard;