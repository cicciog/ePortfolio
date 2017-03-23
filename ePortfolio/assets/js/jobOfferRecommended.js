$(document).ready(function () {

    var joboffers = [
        {
            title: 'Mobile Developer job',
            description: "We are looking for a qualified Mobile developer to join our Engineering team. You will be working with our engineers to develop and maintain high quality mobile applications. If you’re passionate about mobile platforms and translating code into user-friendly apps, we would like to meet you. As a Mobile developer, you’ll collaborate with internal teams to develop functional mobile applications, while working in a fast-paced environment. Ultimately, you should be able to design and build the next generation of our mobile applications.",
            responsibilities: "Support the entire application lifecycle (concept, design, test, release and support). Produce fully functional mobile applications writing clean code. Gather specific requirements and suggest solutions. Write unit and UI tests to identify malfunctions. Troubleshoot and debug to optimize performance. Design interfaces to improve user experience. Liaise with Product development team to plan new features. Ensure new and legacy applications meet quality standards. Research and suggest new mobile products, applications and protocols. Stay up-to-date with new technology trends.",
            requirements: "Proven work experience as a Mobile developer. Demonstrable portfolio of released applications on the App store or the Android market. In-depth knowledge of at least one programming language like Swift and Java. Experience with third-party libraries and APIs. Familiarity with OOP design principles. Excellent analytical skills with a good problem-solving attitude. Ability to perform in a team environment. BSc degree in Computer Science or relevant field.",
            domain: "Information Technology",
            location: "Roma (RM)",
            date: "01-03-2017"
        },
        {
            title: 'Software Security Engineer job',
            description: "We are looking for a skilled Security Engineer to analyze software designs and implementations from a security perspective, and identify and resolve security issues. You will include the appropriate security analysis, defences and countermeasures at each phase of the software development lifecycle, to result in robust and reliable software.",
            responsibilities: "Implement, test and operate advanced software security techniques in compliance with technical reference architecture. Perform on-going security testing and code review to improve software security. Troubleshoot and debug issues that arise. Provide engineering designs for new software solutions to help mitigate security vulnerabilities. Contribute to all levels of the architecture. Maintain technical documentation. Consult team members on secure coding practices. Develop a familiarity with new tools and best practices.",
            requirements: "Proven work experience as a software security engineer. Detailed technical knowledge of techniques, standards and state-of-the art capabilities for authentication and authorization, applied cryptography, security vulnerabilities and remediation. Software development experience in one of the following core languages: Ruby on Rails, Java, Javascript and .NET. Adequate knowledge of web related technologies (Web applications, Web Services and Service Oriented Architectures) and of network/web related protocols. Interest in all aspects of security research and development. BS degree in Computer Science or related field.",
            domain: "Information Technology",
            location: "Napoli (NA)",
            date: "10-03-2017"
        },
        {
            title: 'Back-end Developer job',
            description: "We are looking for an experienced Back-end developer to join our IT team. You will be responsible for the server side of our web applications. If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you’ll work closely with our engineers to ensure system consistency and improve user experience. Ultimately, you should be able to develop and maintain functional and stable web applications to meet our company’s needs.",
            responsibilities: "Participate in the entire application lifecycle, focusing on coding and debugging. Write clean code to develop functional web applications. Troubleshoot and debug applications. Perform UI tests to optimize performance. Manage cutting-edge technologies to improve legacy applications. Collaborate with Front-end developers to integrate user-facing elements with server side logic. Gather and address technical and design requirements. Provide training and support to internal teams. Build reusable code and libraries for future use. Liaise with developers, designers and system administrators to identify new features. Follow emerging technologies.",
            requirements: "Proven work experience as a Back-end developer. In-depth understanding of the entire web development process (design, development and deployment). Hands on experience with programming languages like Java, Ruby, PHP and Python. Working knowledge of CMS framework. Familiarity with front-end languages (e.g. HTML, JavaScript and CSS). Excellent analytical and time management skills. Teamwork skills with a problem-solving attitude. BSc degree in Computer Science or relevant field.",
            domain: "Information Technology",
            location: "Campobasso (CB)",
            date: "04-03-2017"
        },
        {
            title: 'Teacher job',
            description: "We are looking for a committed Teacher to complement our qualified workforce of educators. You will be responsible for preparing and implementing a full educational teaching plan according to the school’s requirements. It will be fundamental to provide knowledge and instruction to students while also helping them develop their personalities and skills. The ideal candidate will be passionate for the job with an ability to reach out to students and create a relationship of mutual trust. They will know how to organize a class and make learning an easy and meaningful process. The goal is to help cultivate the students’ interest in education and be their dedicated ally in the entire process of learning and development.",
            responsibilities: "Present lessons in a comprehensive manner and use visual/audio means to facilitate learning. Provide individualized instruction to each student by promoting interactive learning. Create and distribute educational content (notes, summaries, assignments etc.). Assess and record students’ progress and provide grades and feedback. Maintain a tidy and orderly classroom. Collaborate with other teachers, parents and stakeholders and participate in regular meetings. Plan and execute educational in-class and outdoor activities and events. Observe and understand students’ behavior and psyche and report suspicions of neglect, abuse etc. Develop and enrich professional skills and knowledge by attending seminars, conferences etc.",
            requirements: "Proven experience as a teacher. Thorough knowledge of teaching best practices and legal educational guidelines partnered with a willingness to follow the school’s policies and procedures. Excellent communicability and interpersonal skills. Well-organized and committed. Creative and energetic. Strong moral values and discipline. Knowledge of CPR. Degree in teaching or in a specialized subject with a certificate in education.",
            domain: "Educator & Education",
            location: "Milano (MI)",
            date: "06-03-2017"
        },
        {
            title: 'Mechanic job',
            description: "We are looking for a skilled Mechanic to assemble, maintain and repair machinery and vehicles. You will be responsible for ensuring functionality and reliability of machines, engines and mechanical systems. An excellent mechanic must have manual dexterity and great attention to detail. They must be able to work with various machines and tools as well as follow all safety precautions.",
            responsibilities: "Build and assemble machines or mechanical components according to requirements. Inspect machines, engines, transmissions etc. and run diagnostic tests to discover functionality issues. Conduct repairs aiming for maximum reliability. Troubleshoot reported problems and resolve them in a timely manner. Perform thorough maintenance on machinery, equipment and systems. Clean and apply lubricants to machinery components. Replenish fluids and components of engines and machinery. Provide consultation on correct maintenance and preventative measures to machine or vehicle users. Undertake other duties as assigned (e.g. repair of hydraulic systems, painting vehicles etc.). Keep logs of work and report on issues.",
            requirements: "Proven experience as Mechanic. Excellent knowledge of machinery and hydraulic, electrical and other systems and their components. Aptitude in using various hand tools (screwdrivers, hammers etc.) and precision measurement tools (e.g. calipers). Ability to follow established procedures and practices and read instruction, blueprints etc. A strong commitment to all health and safety guidelines. Very good communication skills. A problem-solving ability. Very good physical strength and stamina. High school diploma is preferred; Certification from a vocational school or completion of apprenticeship is a definite plus. Valid certification (e.g ASE) is preferred.",
            domain: "Production",
            location: "Roma (RM)",
            date: "01-03-2017"
        }
    ];

    $(this).click(function (event) {
        if (event.target.id.indexOf('viewJP') >= 0) {
            populateModalJobOffer(event.target.id.slice(6, 7), joboffers);
        }
    });

});

function populateModalJobOffer(i, joboffers) {
    $('#joboffers-titleJPM').text(joboffers[i].title);
    $('#descriptionJPM').text(joboffers[i].description);
    $('#responsabilitiesJPM').text(joboffers[i].responsibilities);
    $('#requirementsJPM').text(joboffers[i].requirements);
    $('#locationJPM').text(joboffers[i].location);
    $('#dateJPM').text(joboffers[i].date);
}

