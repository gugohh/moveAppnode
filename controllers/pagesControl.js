//la logica
const getFilm  = require('../utils/move')

const pages = {
    home: (req, res) => {
        res.status(200).render('home') 
    },
    film: async (req, res) => {
        let name = req.params.title 
        let film = await getFilm .fetchFilm(name)
        res.status(200).render('film', { film }) 
    },
    filmPost: async (req, res) => { 
        console.log("************");
        let name = await req.body.title 
        res.status(308).redirect(`/film/${name}`) 
    },
    err: (req, res) => {
        res.status(404).send('Error 404 Not Found!') 
    }
}
module.exports = pages