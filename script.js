document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();

  // Get form data
  let formData = new FormData(event.target);
  
  // Collect answers
  let answers = [];
  for(let [name, value] of formData){
    answers.push(`${name} = ${value}`);
  }
  
  // Show user their answers
  alert(`You answered:\n${answers.join('\n')}`);
});
