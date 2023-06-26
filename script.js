// Define your questions
let questions = [
    {text: 'Question 1', description: 'This is a description for question 1'},
    {text: 'Question 2', description: 'This is a description for question 2'},
    {text: 'Question 3', description: 'This is a description for question 3'},
    {text: 'Question 4', description: 'This is a description for question 4'},
    {text: 'Question 5', description: 'This is a description for question 5'},
    {text: 'Question 6', description: 'This is a description for question 6'},

];
// Get the form container
let form = document.getElementById("myForm");

// Iterate over each question
questions.forEach((questionObj, index) => {
    // Create question header
    let header = document.createElement("h2");
    header.innerText = questionObj.text;
    form.appendChild(header);

    let desc = document.createElement("p");
    desc.innerText = questionObj.description;
    form.appendChild(desc);

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
    let selectElements = form.getElementsByTagName('select');
    let participantId = document.getElementById('participantId').value;
    let formData = new FormData();

    formData.append('participantId', participantId);
    for(let i = 0; i < selectElements.length; i++) {
        formData.append(selectElements[i].name, selectElements[i].value);
    }

    // Collect answers
    let answers = [];
    for(let [name, value] of formData){
        answers.push(`${name} = ${value}`);
    }
    
    // Show user their answers
    alert(`You answered:\n${answers.join('\n')}`);
}
