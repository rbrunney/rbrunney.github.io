class WorkExperience {
    id: number;
    companyName: string;
    title: string;
    location: string;
    description: string;
    date: string;
    companyLogo: string;

    constructor(id: number, companyName: string, title: string, location: string, description: string, date: string, companyLogo: string) {
        this.id = id;
        this.companyName = companyName;
        this.title = title;
        this.location = location;
        this.description = description;
        this.date = date;
        this.companyLogo = companyLogo
    }
}

const getWorkData = () => {

    let gpsSoftwareEngineer = new WorkExperience(
        1,
        "GPS Capital Markets",
        "Software Engineer",
        "South Jordan, UT",
        "Updated a legcay system to use a modernize tech stack, which included React, .NET Core, SQL Server, and Azure for cloud hosting.",
        "September 2023 - Present",
        require('../../assets/imgs/work-icons/gps-logo.png')
    );

    let gpsFullStackIntern = new WorkExperience(
        1,
        "GPS Capital Markets",
        "Full Stack Intern",
        "South Jordan, UT",
        "I applied my software skills to help continue work on a Full Stack Project to create an internal tool to help the development team easily produce/replicate bugs and fix them.",
        "June 2023 - August 2023",
        require('../../assets/imgs/work-icons/gps-logo.png')
    );

    let advancedMdDevOpsIntern = new WorkExperience(
        1,
        "AdvancedMd",
        "DevOps Intern",
        "South Jordan, UT",
        "I applied my software skills to integrate code analysis as a task for a CI/CD pipeline using SonarQube. I also made use of local servers to run CI/CD pipeline tasks for cheaper run costs.",
        "March 2023 - June 2023",
        require('../../assets/imgs/work-icons/advancedmd-logo.png')
    );

    let advancedMdQAIntern = new WorkExperience(
        1,
        "AdvancedMd",
        "SDET Intern",
        "South Jordan, UT",
        "I applied my software skills here working on QA Automation Tests and processes. We worked on a team following the SCRUM methodologies to keep track of where we were at and where we were headed!",
        "January 2023 - March 2023",
        require('../../assets/imgs/work-icons/advancedmd-logo.png')
    );

    let neumontTutor = new WorkExperience(
        1,
        "Neumont",
        "Academic Tutor",
        "Salt Lake City, UT",
        "I helped guide and teach many Neumont students through their current academic courses. I helped show new ways of thinking and working through their problems and errors. I also took time to meet with faculty to talk about current projection and how to help guide the students to the best they can possibly be!",
        "October 2021 - September 2023",
        require('../../assets/imgs/work-icons/neumont-logo.png')
    );

    return [
        gpsSoftwareEngineer,
        gpsFullStackIntern,
        advancedMdDevOpsIntern,
        advancedMdQAIntern,
        neumontTutor
    ];
}

export default getWorkData;