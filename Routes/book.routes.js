const express = require("express");
const {BookModel} = require("../Models/book.model");

const bookRoute = express.Router();

bookRoute.get("/books", async (req,res) => {
    try{
        const allBooks = await BookModel.find();
        res.send(allBooks);
    }
    catch(err){
        res.send({"message":err.message});
    }
})

bookRoute.post("/books", async(req,res) => {
    try{
        const {title,author,genre,description,price} = req.body;
        const newBook = new BookModel({title,author,genre,description,price});
        await newBook.save();
        res.send({"message":"Book Added"});
    }
    catch(err){
        res.send({"message":err.message});
    }
})

bookRoute.delete("/books/:id",async(req,res) => {
    const {id} = req.params;
    try{
        const deletedBook = await BookModel.findByIdAndDelete(id);
        res.send({"message":"Book Deleted"});
    }
    catch(err){
        res.send({"message":err.message});
    }
})

module.exports = {bookRoute};