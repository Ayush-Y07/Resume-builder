// ===============================
// GET ELEMENTS
// ===============================

const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const locationInput = document.getElementById("location");
const aboutInput = document.getElementById("about");
const skillsInput = document.getElementById("skills");


// ===============================
// OPEN BUILDER
// ===============================

function openBuilder() {

    document.getElementById("builder").scrollIntoView({
        behavior: "smooth"
    });

}


// ===============================
// SCROLL TO TEMPLATES
// ===============================

function scrollToTemplates() {

    document.getElementById("templates").scrollIntoView({
        behavior: "smooth"
    });

}


// ===============================
// LIVE PREVIEW
// ===============================

function updatePreview() {

    document.getElementById("previewName").textContent =
        nameInput.value || "Your Name";


    document.getElementById("previewTitle").textContent =
        titleInput.value || "Frontend Designer";


    document.getElementById("previewEmail").textContent =
        emailInput.value || "email@example.com";


    document.getElementById("previewPhone").textContent =
        phoneInput.value || "+91 0000000000";


    document.getElementById("previewLocation").textContent =
        locationInput.value || "Your Location";


    document.getElementById("previewAbout").textContent =
        aboutInput.value ||
        "Write a professional summary about yourself.";


    updateSkills();

    updateEducation();

    updateExperience();

}


// Add live change event

const inputs = [
    nameInput,
    titleInput,
    emailInput,
    phoneInput,
    locationInput,
    aboutInput,
    skillsInput
];


inputs.forEach(function(input) {

    input.addEventListener("input", function() {

        updatePreview();

        saveData();

    });

});


// ===============================
// SKILLS
// ===============================

function updateSkills() {

    const skills =
        skillsInput.value
            .split(",")
            .map(skill => skill.trim())
            .filter(skill => skill !== "");


    const container =
        document.getElementById("previewSkills");


    container.innerHTML = "";


    if (skills.length === 0) {

        container.innerHTML =
            "<span>HTML</span><span>CSS</span><span>JavaScript</span>";

        return;
    }


    skills.forEach(function(skill) {

        const span = document.createElement("span");

        span.textContent = skill;

        container.appendChild(span);

    });

}


// ===============================
// ADD EDUCATION
// ===============================

function addEducation() {

    const container =
        document.getElementById("educationContainer");


    const div =
        document.createElement("div");


    div.className = "education-item";


    div.innerHTML = `

        <input
            type="text"
            class="degree"
            placeholder="Degree / Course"
        >

        <input
            type="text"
            class="college"
            placeholder="College / University"
        >

        <input
            type="text"
            class="education-year"
            placeholder="2022 - 2026"
        >

    `;


    container.appendChild(div);


    addDynamicListeners();

}


// ===============================
// EDUCATION PREVIEW
// ===============================

function updateEducation() {

    const degrees =
        document.querySelectorAll(".degree");


    const colleges =
        document.querySelectorAll(".college");


    const years =
        document.querySelectorAll(".education-year");


    const preview =
        document.getElementById("previewEducation");


    preview.innerHTML = "";


    degrees.forEach(function(degree, index) {

        const degreeValue =
            degree.value || "Your Degree";


        const collegeValue =
            colleges[index].value || "University";


        const yearValue =
            years[index].value || "2022 - 2026";


        const div =
            document.createElement("div");


        div.className = "preview-entry";


        div.innerHTML = `

            <h4>${degreeValue}</h4>

            <strong>${collegeValue}</strong>

            <p>${yearValue}</p>

        `;


        preview.appendChild(div);

    });

}


// ===============================
// ADD EXPERIENCE
// ===============================

function addExperience() {

    const container =
        document.getElementById("experienceContainer");


    const div =
        document.createElement("div");


    div.className = "experience-item";


    div.innerHTML = `

        <input
            type="text"
            class="job"
            placeholder="Job Title"
        >

        <input
            type="text"
            class="company"
            placeholder="Company"
        >

        <textarea
            class="job-description"
            placeholder="Describe your work..."
        ></textarea>

    `;


    container.appendChild(div);


    addDynamicListeners();

}


// ===============================
// EXPERIENCE PREVIEW
// ===============================

function updateExperience() {

    const jobs =
        document.querySelectorAll(".job");


    const companies =
        document.querySelectorAll(".company");


    const descriptions =
        document.querySelectorAll(".job-description");


    const preview =
        document.getElementById("previewExperience");


    preview.innerHTML = "";


    jobs.forEach(function(job, index) {

        const jobValue =
            job.value || "Job Title";


        const companyValue =
            companies[index].value || "Company Name";


        const descriptionValue =
            descriptions[index].value ||
            "Your work experience will appear here.";


        const div =
            document.createElement("div");


        div.className = "preview-entry";


        div.innerHTML = `

            <h4>${jobValue}</h4>

            <strong>${companyValue}</strong>

            <p>${descriptionValue}</p>

        `;


        preview.appendChild(div);

    });

}


// ===============================
// DYNAMIC INPUT LISTENERS
// ===============================

function addDynamicListeners() {

    const dynamicInputs =
        document.querySelectorAll(
            ".degree, .college, .education-year, .job, .company, .job-description"
        );


    dynamicInputs.forEach(function(input) {

        input.addEventListener("input", function() {

            updateEducation();

            updateExperience();

            saveData();

        });

    });

}


// ===============================
// GENERATE RESUME
// ===============================

function generateResume() {

    updatePreview();

    saveData();


    alert(
        "Resume generated successfully! 🎉"
    );


    document
        .getElementById("resumePreview")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ===============================
// TEMPLATE SELECTOR
// ===============================

function selectTemplate(template) {

    const resume =
        document.getElementById("resumePreview");


    resume.classList.remove(
        "modern-template",
        "classic-template",
        "minimal-template"
    );


    resume.classList.add(
        template + "-template"
    );


    document.querySelectorAll(".template-card")
        .forEach(function(card) {

            card.classList.remove("selected");

        });


    event.currentTarget
        .closest(".template-card")
        .classList.add("selected");

}


// ===============================
// PHOTO UPLOAD
// ===============================

const photoInput =
    document.getElementById("photo");


photoInput.addEventListener("change", function(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload = function(e) {

        const imageURL =
            e.target.result;


        document.getElementById("photoPreview")
            .innerHTML =
            `<img src="${imageURL}">`;


        document.getElementById("previewPhoto")
            .innerHTML =
            `<img src="${imageURL}">`;


        localStorage.setItem(
            "resumePhoto",
            imageURL
        );

    };


    reader.readAsDataURL(file);

});


// ===============================
// DARK / LIGHT MODE
// ===============================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

}


// ===============================
// PRINT / PDF
// ===============================

function printResume() {

    window.print();

}


// ===============================
// LOCAL STORAGE
// ===============================

function saveData() {

    const data = {

        name: nameInput.value,

        title: titleInput.value,

        email: emailInput.value,

        phone: phoneInput.value,

        location: locationInput.value,

        about: aboutInput.value,

        skills: skillsInput.value

    };


    localStorage.setItem(
        "resumeData",
        JSON.stringify(data)
    );

}


// ===============================
// LOAD SAVED DATA
// ===============================

function loadData() {

    const saved =
        localStorage.getItem("resumeData");


    if (!saved) {
        return;
    }


    const data =
        JSON.parse(saved);


    nameInput.value =
        data.name || "";


    titleInput.value =
        data.title || "";


    emailInput.value =
        data.email || "";


    phoneInput.value =
        data.phone || "";


    locationInput.value =
        data.location || "";


    aboutInput.value =
        data.about || "";


    skillsInput.value =
        data.skills || "";


    updatePreview();

}


// ===============================
// INITIALIZE
// ===============================

loadData();

addDynamicListeners();

updatePreview();