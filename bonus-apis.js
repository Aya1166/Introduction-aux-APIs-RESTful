fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => console.log("User:", data.results[0].name));

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => res.json())
  .then(data => console.log("NASA:", data.title));

fetch("https://openlibrary.org/subjects/javascript.json")
  .then(res => res.json())
  .then(data => console.log("Book:", data works?.[0]?.title));
