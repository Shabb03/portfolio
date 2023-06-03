const education = [
    /*
    {year: "", 
    title: "", 
    description: ""},
    */

    {year: "2020-2024", 
    title: "Bachelors in Computer Science", 
    description: "Currently studying to finish my degree in 2024 with internship experience. I hope to make a change in improving human lifestyle and increase efficiency"},

    {year: "2022", 
    title: "Static Security", 
    description: "Completed with David Kelly, Mackin Consultancy Certification, Training for one week plus home study element (30 hours plus)"},

    {year: "2022", 
    title: "Safepass", 
    description: "Certified in working at a construction site."},

    {year: "2022", 
    title: "Manual Handling", 
    description: "Certified in lifting heavy load."},

    {year: "2015-2020", 
    title: "Leaving Certificate: 525 points", 
    description: "Design and Communication Graphics: H1<br>Engineering: H2<br>Applied Maths: H3<br>Maths: H3<br>Physics: H3<br>English: H3<br>Irish: H3"},
];

const work = [
    /*
    {year: "", 
    title: "", 
    description: ""},
    */

    {year: "12/2021-08/2022", 
    title: "Dublin Airport - Burger King", 
    description: "Worked as a team member with roles including:<br>Taking orders at the till<br>Serving customers at the checkpoint<p>Preparing sandwhiches, sides and beverages<br>Cleaning the dining area"},

    {year: "10/2022-01/2023", 
    title: "Security Guard", 
    description: "Worked as a security guard for Integrity Security, roles include:<br>Authorizing entry of select individuals<br>Patrolling inside and outside areas<br>Documenting suspicious activities"},

    {year: "03/2023-08/2023", 
    title: "Software Engineer Intern", 
    description: "Worked as Software Engineer Business Intelligence Intern<br>Ensured data integrity and accuracy<br>Automated tasks using SQL, PowerShell, and SSIS<br>Completed data fixes<br>Communicating and problem-solving with other teams"},
];

const skills = [
    /*
    {name: "", 
    percent: "", 
    icon: ``},
    */

    {name: "Python", 
    percent: "85", 
    icon: `<i class="fa-brands fa-python"></i>`},

    {name: "Java", 
    percent: "70", 
    icon: `<i class="fa-brands fa-java"></i>`},

    {name: "Django", 
    percent: "85", 
    icon: `<i class="fa-solid fa-d"></i>`},

    {name: "SQL Server", 
    percent: "90", 
    icon: `<i class="fa-solid fa-database"></i>`},

    {name: "React.js", 
    percent: "80", 
    icon: `<i class="fa-brands fa-react"></i>`},

    {name: "Node JS", 
    percent: "65", 
    icon: `<i class="fa-brands fa-node"></i>`},

    {name: "TypeScript", 
    percent: "70", 
    icon: `<i class="fa-brands fa-js"></i>`},

    {name: "C", 
    percent: "80", 
    icon: `<i class="fa-solid fa-c"></i>`},

    {name: "AI", 
    percent: "30", 
    icon: `<i class="fa-solid fa-brain"></i>`},

    {name: "Microsoft Suite", 
    percent: "90", 
    icon: `<i class="fa-brands fa-microsoft"></i>`},

    {name: "Graphic Design", 
    percent: "70", 
    icon: `<i class="fa-solid fa-palette"></i>`},
];

const projects = [
    /*
    {name: "", 
    image: "",
    link: ""},
    */

    {name: "Student Project Management System", 
    image: "studentproject.png",
    link: "https://github.com/Shabb03/Student-Project-Management-System"},

    {name: "Sorting Algorithm Visualiser", 
    image: "sortingvisualiser.png",
    link: "https://github.com/Shabb03/Python-Projects/blob/main/sorting_visualiser.py"},

    {name: "Gym Shop", 
    image: "gymshop.png",
    link: "https://github.com/Shabb03/Gym-Shop"},

    {name: "Landing Page", 
    image: "landing.png",
    link: "https://shabb03.github.io/headphones/"},

    {name: "Tic Tac Toe", 
    image: "tictactoe.png",
    link: "https://github.com/Shabb03/Python-Projects/blob/main/tic_tac_toe.py"},

    {name: "Typing Speed Test", 
    image: "typing.png",
    link: "https://github.com/Shabb03/Python-Projects/blob/main/typing.py"},

    {name: "C Shell", 
    image: "c_shell.png",
    link: "https://github.com/Shabb03/shell"},

    {name: "Colorful Rain", 
    image: "colorfulrain.png",
    link: "https://shabb03.github.io/rain/"},

    {name: "Notes Page", 
    image: "notes.png",
    link: "https://shabb03.github.io/notes/"},
];

const hobbies = [
    /*
    {name: "", 
    image: ""},
    */

    {name: "Basketball", 
    image: "basketball.png"},

    {name: "Gym", 
    image: "gym.png"},

    {name: "Reading", 
    image: "reading.png"},

    {name: "Puzzles", 
    image: "puzzles.png"},

    {name: "Graphic Designing", 
    image: "graphic.png"},

    {name: "Investing", 
    image: "investing.png"},

    {name: "Coding", 
    image: "coding.png"},
];


function addEducation() {
    let section = document.getElementById("education-timeline");
    let htmlString = "";
    education.forEach(item=>{
        htmlString += `<div class="timeline-item">
                            <div class="circle-dot"></div>
                                <h3 class="timeline-date">
                                    <i class="fa fa-calendar"></i> ${item['year']}
                                </h3>
                            <h4 class="timeline-title">${item['title']}</h4>
                            <p class="timeline-text">${item['description']}</p>
                        </div>`;
    })
    section.innerHTML += htmlString;
}

function addExperience() {
    let section = document.getElementById("experience-timeline");
    let htmlString = "";
    work.forEach(item=>{
        htmlString += `<div class="timeline-item">
                            <div class="circle-dot"></div>
                                <h3 class="timeline-date">
                                    <i class="fa fa-calendar"></i> ${item['year']}
                                </h3>
                            <h4 class="timeline-title">${item['title']}</h4>
                            <p class="timeline-text">${item['description']}</p>
                        </div>`;
    })
    section.innerHTML += htmlString;
}

function addSkills() {
    let section = document.getElementById("skills-section");
    let htmlString = "";
    skills.forEach(item=>{
        htmlString += `<div class="box">
                        <div class="icon-text is-size-4">
                            <span class="icon has-text-primary">
                                ${item['icon']}
                            </span>
                            <span>&nbsp;${item['name']}</span>
                        </div>
                        <br>
                        <progress class="progress" value="${item['percent']}" max="100">${item['percent']}%</progress>
                    </div>`;
    })
    section.innerHTML += htmlString;
}

function addProjects() {
    let section = document.getElementById("projects-section");
    let htmlString = "";
    let i = 0;
    projects.forEach(item=>{
        if (i == 0) {
            htmlString += `<div class="columns">`;
        }

        htmlString += `<div class="column is-one-third">
                            <div class="card">
                                <a href="${item['link']}" target="_blank"> 
                                    <div class="card-image">
                                        <img src="img/${item['image']}" alt="">
                                    </div>
                                    <div class="card-content">${item['name']}</div>
                                </a>
                            </div>
                        </div>`;

        i += 1;
        if (i == 3) {
            htmlString += `</div>`
            i = 0;
        }
    })
    section.innerHTML += htmlString;
}

function addHobbies() {
    let section = document.getElementById("hobby-images");
    let dots = document.getElementById("hobby-dots");
    let htmlString = "";
    let htmlString2 = "";
    let len = hobbies.length;
    let i = 1;
    hobbies.forEach(item=>{
        htmlString += `<div class="mySlides fade">
                        <div class="numbertext">${i} / ${len}</div>
                        <img class="hobby-img" src="img/${item['image']}" style="width:100%">
                        <div class="text">${item['name']}</div>
                    </div>`;
        htmlString2 += `<span class="dot" onclick="currentSlide(${i})"></span>`;
        i += 1;
    })
    section.innerHTML += htmlString;
    dots.innerHTML += htmlString2;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
        
function currentSlide(n) {
    showSlides(slideIndex = n);
}
        
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

addEducation();
addExperience();
addSkills();
addProjects();
addHobbies();

let slideIndex = 1;
showSlides(slideIndex);
