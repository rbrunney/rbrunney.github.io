class WorkExperience {
    id: number;
    title: string;
    location: string;
    description: string;
    date: string;
    companyLogo: string;

    constructor(id: number, title: string, location: string, description: string, date: string, companyLogo: string) {
        this.id = id;
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
        "",
        "",
        "",
        "",
        ""
    );

    let gpsFullStackIntern = new WorkExperience(
        1,
        "",
        "",
        "",
        "",
        ""
    );

    let advancedMdDevOpsIntern = new WorkExperience(
        1,
        "",
        "",
        "",
        "",
        ""
    );

    let advancedMdQAIntern = new WorkExperience(
        1,
        "",
        "",
        "",
        "",
        ""
    );

    let neumontTutor = new WorkExperience(
        1,
        "",
        "",
        "",
        "",
        ""
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