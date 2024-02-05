import { VerticalTimeLine, VerticalTimeLineElement } from "react-vertical-timeline-component";
import getWorkData from "../utils/WorkData";

const WorkPage = () => {
    let workData = getWorkData();

    return (
        <>
            <div className="work-container">
                <p className="work-title">Work Experience</p>
                <VerticalTimeLine>
                    {
                        workData.map(workExperience => {
                            return (
                                <VerticalTimeLineElement>
                                
                                </VerticalTimeLineElement>
                            );
                        })
                    }
                </VerticalTimeLine>
            </div>
        </>
    );
}

export default WorkPage;