const express = require('express')
const Josiane = express()

const wilders = [
    {id : 1,
    name : "Camille 1 "},
    {id : 2,
    name : "Camille 2"},
    {id : 3,
    name : "Camille 3 "},
    {id : 4,
    name : "Camille 4"},
    {id : 5,
    name : "ça fait bcp là"},
]
/*notre standardiste s'appelle Josiane, anciennement App
Elle peut faire du get (rapporter), post (ajouter), put (mettre à jour); delete( supprimer)*/
/* le '/' c'est la question*/ 


/* Le ton de la réponse: 
send => cordial, rien de plus 
json => petit effort, je fais les choses bien
status => savoir comment ça c'est passé 
200 et plus => cela s'est bien passé 
404 => pas cool, pas trouvé 
*/


Josiane.get('/', function (req, res) {
  res.send('Josi asked : What do you need?')
})

Josiane.get('/name', function (req, res) {
    res.send('Je suis Josiane')
  })

  Josiane.get('/name/wilder/soutien', function (req, res) {
    res.send(wilders)
  })

Josiane.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
