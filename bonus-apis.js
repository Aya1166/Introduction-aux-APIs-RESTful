const axios = require("axios");


axios.get("https://randomuser.me/api/")
  .then(res => {
    const user = res.data.results[0];
    console.log("=== RANDOM USER ===");
    console.log(user.name.first, user.name.last);
  });


axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => {
    console.log("=== NASA ===");
    console.log(res.data.title);
  })
  .catch(err => console.log("NASA error"));


axios.get("https://openlibrary.org/subjects/javascript.json")
  .then(res => {
    console.log("=== OPEN LIBRARY ===");
    console.log(res.data.works[0].title);
  })
  .catch(err => console.log("Library error"));
