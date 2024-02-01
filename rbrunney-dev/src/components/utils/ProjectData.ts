class CodeProject {
    name: string;
    description: string;
    imgPath: string;
    technology: string[]

    constructor(name: string, description: string, imgPath: string, technology: string[]) {
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.technology = technology;
    }
}

const getCodeProjects = () => {
    let investEd = new CodeProject(
        "InvestEd",
        '"InvestEd" is currently a mobile application aimed at helping those who are seeking to start their journey into the financial world! Making use of a virtual space where users can place orders on the stock market following real-time data. Users can become equipped with how to start saving money. There is also a lessons section where users can dive into financial literacy. InvestEd is aimed at helping others get into and stay in the investment/savings world! InvestEd is here to help users become financially ready.',
        require('../../assets/imgs/projects/InvestEd/InvestEdLogo.png'),
        [
            "AWS ECR",
            "AWS ECS",
            "AWS Fargate",
            "AWS Route 53",
            "AWS RDS",
            "AWS Elasticache",
            "AWS MQ",
            "AWS VPC",
            "Spring Boot",
            "Spring Cloud",
            "Flask",
            "Java",
            "Python",
            "Dart",
            "Flutter",
            "MySQL",
            "Redis",
            "MongoDB",
            "RabbitMQ",
            "Docker",
            "Docker Compose",
            "Git",
            "Github",
            "Postman",
            "Trello",
            "Polygon.io API"
        ]
    );

    let fairShare = new CodeProject(
        "FairShare",
        '"FairShare" is currently a mobile application aimed at helping those who have shared finances! Whether you have to share a bill for dinner, or shared rent cost. "FairShare" is also here to help towards group financial goals. Plan ahead and get on track with "FairShare" today!',
        '',
        []
    )

    let recipelicious = new CodeProject(
        "Recipelicious",
        `"Recipelicious" is a mobile application made for helping answer the age-old question "What's For Dinner?" Having the ability to create, read, and view meals from across the world! Users can find themselves making friends and creating group chats to discuss "Recipelicious" by sending meal cards into the chat and voting upon what they would like. The majority vote wins the question "What's for Dinner"! "Recipelicious" applied Service Oriented Architecture to give the users a seamless experience!`,
        require('../../assets/imgs/projects/Recipelicious/Recipelicious.PNG'),
        []
    )

    let boomlingo = new CodeProject(
        "Boomlingo",
        '"Boomlingo" is a mobile application made for helping anyone with the language of gamers. Having the ability to take courses on the current lingo, you will be ready in no time. If that is not your jam talk to someone online face-to-face with a video call feature. "Boomlingo" applied Cloud Architecture using AWS.',
        require('../../assets/imgs/projects/Boomlingo/Duo_2019.png'),
        []
    )

    return [
        investEd,
        fairShare,
        recipelicious,
        boomlingo
    ];
}

export default getCodeProjects;