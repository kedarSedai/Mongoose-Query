const express = require('express');
const router = express.Router();
const Book = require('../model/Books');

router.get('/get', async (req, res) => {

    //finds return all data
    const book = await Book.find({});
    try{
        res.json(book)
    }
    catch(err){
        res.json({message: err})
    }
});


router.get('/books/:id', async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id })
    //const book = await Book.findOne({ name: 'Mobile' })
    try{
        res.json(book)
    }
    catch(err) {
        console.log({message: err})
    }
});

//save data to database
router.post('/add', async (req, res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        category: req.body.category
    })
    try{
        const saveBoook = await book.save();
        res.json(saveBoook)
    }
    catch(err){
        console.log(err)
    }
});

router.patch('/edit/:id', async (req, res) => {
    
    try{
        const edit = await Book.updateOne({_id: req.params.id},  {$set: {category: req.body.category}});
        res.json(edit)
    }
    catch(err){
        console.log({message: err})
    }
});

router.delete('/delete/:id', async (req, res) => {
    try{
        const remove = await Book.remove({_id: req.params.id});
        res.json(remove);
    }
    catch(err) {
        res.send({message: err})
    }
})


module.exports = router;