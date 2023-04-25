console.log("hello")

fetch('http://localhost:8000/questions/')
.then((res) => res.json())
.then ((questions) => console.log(questions));