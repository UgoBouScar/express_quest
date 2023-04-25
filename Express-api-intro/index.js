const express = require('express');
const port = 8000;
const app = express();

const heroes = [
    {
        id: 1,
        name: "Batman",
        race: "human",
        color: "Black, sometimes Gray and sometimes Dark-Blue",

    },
    { 
        id: 2,
        name: "Iron-Man",
        race: "human",
        color: "Red and Gold", 
    },

    {
        id: 3, 
        name: "Black-Panther" , 
        rase: "human",
        color: "Full-Black", 
        
        id: 4, 
        name: "Superman" , 
        race: "Kryptonian" , 
        color: "Blue and Red" , 
    }
]


app.get('/', (req, res) => {
    res.send(`My Favorites Heroes and they're rich AF`)
});


app.get("/api/heroes", (req, res)=> {
    console.log(req.query)
    res.status(200).json(heroes);
});


app.get("/api/heroes/:id", (req, res) => {
    console.log("Hello")
    const id = req.params.id;
    console.log(id)
    const hero = heroes.find((heroes) => heroes.id == id);
    console.log(hero)
    if (hero) {
      res.status(200).json(hero);
    } else {
      res.status(404).send("Not Found");
    }
});


app.listen(port, (err) => {
    if (err) {
       console.error("Something bad happened");
    } else {
         console.log(`Server is listening on ${port}`);
    }
 });
    