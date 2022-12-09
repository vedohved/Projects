const studentEnrolled = document.querySelector(".record");
const studentList = [];

const studentCard = (details) => {
    studentEnrolled.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="enrolledstudent">
       
        <div class="right2">
        <img id ="image" alt="Student" height="125px" src="${details.image}" width="125px"/>
        </div>

        <div id="rdetails">
        <h3>
            <em> Name:      ${details.name}</em>
        </h3>

        <h3>
            <em>Gender:     ${details.gender}</em>
        </h3>

        <h3>
            <em>Email:      ${details.email}</em>
        </h3>

        <h3>
            <em>Website:        ${details.website}</em>
        </h3>

        <h3>
            <em>Skill:      ${details.skills}</em>
        </h3>

        </div>

        </div>

        `
    );
};

const studentAdded = (e) => {
    e.preventDefault();

    const details = {
        id: `${Date.now()}`,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        website: document.getElementById("website").value,
        image : document.getElementById("img").value,
        gender: document.querySelector("input[name='gender']:checked").value,
        skills: document.querySelector("input[name='skills']:checked").value,
    };

    studentCard(details);
    studentList.push(details);

    localStorage.setItem("studentList", JSON.stringify(studentList));
};

let btn = document.getElementById("submit");
btn.addEventListener("click", studentAdded);