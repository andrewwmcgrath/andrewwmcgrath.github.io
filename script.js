// Define your questions
let questions = [
    {text: 'Question 1', description: 'This is a description for question 1'},
    {text: 'Question 2', description: 'This is a description for question 2'},
    {text: 'Question 3', description: 'This is a description for question 3'},
    {text: 'Q4', description: 'Testing testing'},

];

// Get the form container
let form = document.getElementById("myForm");

// Iterate over each question
questions.forEach((questionObj, index) => {
    // Create question header
    let header = document.createElement("h2");
    header.innerText = questionObj.text;
    form.appendChild(header);
});

function submitForm() {
    alert('Form submitted');
}
