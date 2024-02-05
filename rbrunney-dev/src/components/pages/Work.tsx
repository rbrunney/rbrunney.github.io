import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import getWorkData from "../utils/WorkData";

const WorkPage = () => {
    let workData = getWorkData();

    return (
        <>
            <div className="work-container">
                <p className="work-title">Work Experience</p>
                <VerticalTimeline
                    animate={false}
                    layout={"1-column-left"}
                >
                    {
                        workData.map(workExperience => {
                            return (
                                <VerticalTimelineElement
                                    key={workExperience.id}
                                    date={workExperience.date}
                                    dateClassName="date"
                                    iconStyle={{background : "#fefdfd"}}
                                    icon={<img height={40} width={40} src={workExperience.companyLogo}/>}
                                >
                                    <h3 className="vertical-timeline-element-title">
                                        {workExperience.companyName} - {workExperience.title}
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle">
                                        {workExperience.location}
                                    </h5>
                                    <p id="description">
                                        {workExperience.description}
                                    </p>
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