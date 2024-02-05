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
        "",
        "September 2023 - Present",
        require('../../assets/imgs/work-icons/gps-logo.png')
    );

    let gpsFullStackIntern = new WorkExperience(
        1,
        "GPS Capital Markets",
        "Full Stack Intern",
        "",
        "South Jordan, UT",
        "June 2023 - August 2023",
        require('../../assets/imgs/work-icons/gps-logo.png')
    );

    let advancedMdDevOpsIntern = new WorkExperience(
        1,
        "AdvancedMd",
        "DevOps Intern",
        "",
        "South Jordan, UT",
        "March 2023 - June 2023",
        require('../../assets/imgs/work-icons/advancedmd-logo.png')
    );

    let advancedMdQAIntern = new WorkExperience(
        1,
        "AdvancedMd",
        "SDET Intern",
        "",
        "South Jordan, UT",
        "January 2023 - March 2023",
        require('../../assets/imgs/work-icons/advancedmd-logo.png')
    );

    let neumontTutor = new WorkExperience(
        1,
        "Neumont",
        "Academic Tutor",
        "",
        "Salt Lake City, UT",
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