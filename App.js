// Example 

const questionInput = document.getElementById('questionInput');
const exampleBtn1 = document.querySelector('.exampleBtn1');
const exampleBtn2 = document.querySelector('.exampleBtn2');
const exampleBtn3 = document.querySelector('.exampleBtn3');
const exampleText1 = document.querySelector('.exampleText1');
const exampleText2 = document.querySelector('.exampleText2');
const exampleText3 = document.querySelector('.exampleText3');

exampleBtn1.addEventListener('click', (e) => {
  e.preventDefault()
  // alert(exampleText1.innerHTML)
  questionInput.value = exampleText1.innerHTML;
});

exampleBtn2.addEventListener('click', (e) => {
  e.preventDefault()
  // alert(exampleText2.innerHTML)
  questionInput.value = exampleText2.innerHTML;
});

exampleBtn3.addEventListener('click', (e) => {
  e.preventDefault()
  // alert(exampleText3.innerHTML)
  questionInput.value = exampleText3.innerHTML;
});

// JavaScript code
document.getElementById('questionForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const questionInput = document.getElementById('questionInput');
  const qContent = document.querySelector('.q-content');
  const question = questionInput.value;
  qContent.innerHTML = questionInput.value;
  // alert(questionInput.value)


  // Make API request
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Replace YOUR_API_KEY with your actual API key
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [{ 'role': 'system', 'content': 'You are a user' }, { 'role': 'user', 'content': question }]
    })
  })
    .then(response => response.json())
    .then(data => {
      const answer = data.choices[0].message.content;
      const ansContent = document.querySelector('.ans-content');
      const introContainer = document.querySelector('.intro-container');
      const ansContainer = document.querySelector('.ans-container');
      // Do something with the answer, e.g., display it on the page
      ansContent.innerHTML = answer;
      console.log(answer);

      // Switching to display Ans
      introContainer.classList.add('w3-hide')
      ansContainer.classList.remove('w3-hide')
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });

  // Clear the input field
  questionInput.value = '';
});