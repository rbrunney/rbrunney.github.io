import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import getWorkData from "../utils/WorkData";

const WorkPage = () => {
    let workData = getWorkData();

    return (
        <>
            <div className="work-container">
                <p className="work-title">Work Experience</p>
                <VerticalTimeline>
                    {
                        workData.map(workExperience => {
                            return (
                                <VerticalTimelineElement>
                                
                                </VerticalTimelineElement>
                            );
                        })
                    }
                </VerticalTimeline>
            </div>
        </>
    );
}

export default WorkPage;