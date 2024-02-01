import Button from 'react-bootstrap/Button';

interface ITechLabelProps {
    techName: string
}

const TechLabel = (props: ITechLabelProps) => {
    return (
        <p className='tech-label'>{props.techName}</p>
    );
}

export default TechLabel;