// Define your questions
let questions = ['Question 1', 'Question 2', 'Question 3'];

// Get the form container
let form = document.getElementById("myForm");

// Iterate over each question
questions.forEach((question, index) => {
    // Create question header
    let header = document.createElement("h2");
    header.innerText = question;
    form.appendChild(header);

    // Create select fields for Probability, Impact and Preparation
    ['Probability', 'Impact', 'Preparation'].forEach(choice => {
        // Create label
        let label = document.createElement("label");
        label.setAttribute("for", `question${index + 1}${choice}`);
        label.innerText = `${choice}:`;
        form.appendChild(label);

        // Create select
        let select = document.createElement("select");
        select.setAttribute("id", `question${index + 1}${choice}`);
        select.setAttribute("name", `question${index + 1}${choice}`);
        for(let i = 1; i <= 6; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.innerText = i;
            select.appendChild(option);
        }
        form.appendChild(select);
    });

    // Add a line break for readability
    form.appendChild(document.createElement("br"));
});

function submitForm() {
    let elements = form.elements;
    let formData = new FormData();

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].tagName.toLowerCase() === 'select') {
            formData.append(elements[i].name, elements[i].value);
        }
    }

    // Collect answers
    let answers = [];
    for(let [name, value] of formData){
        answers.push(`${name} = ${value}`);
    }
    
    // Show user their answers
    alert(`You answered:\n${answers.join('\n')}`);
}
