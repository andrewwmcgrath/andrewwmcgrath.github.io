// Define your questions
let questions = [
    {text: 'Question 1', description: 'This is a description for question 1'},
    {text: 'Question 2', description: 'This is a description for question 2'},
    {text: 'Question 3', description: 'This is a description for question 3'},
    {text: 'Ques', description: 'This is a  for question 4'},
    {text: 'Question 5', description: 'This is a description for question 5'},
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

// Assuming previous data 
let prevCycleData = [
    {prevValue: 3, avgValue: 4},
    {prevValue: 3, avgValue: 4},
    {prevValue: 3, avgValue: 4},
];

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

    // Save data as CSV
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Participant ID,Question,Probability,Impact,Preparation\n";

    let questionIndex = 0;
    for (let i = 0; i < selectElements.length; i += 3) {
        csvContent += `${participantId},${questions[questionIndex].text},${selectElements[i].value},${selectElements[i+1].value},${selectElements[i+2].value}\n`;
        questionIndex++;
    }

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "form_data.csv");
    document.body.appendChild(link);

    link.click();

    // Redirect to the thank you page
    window.location.href = 'thanks.html';
}
