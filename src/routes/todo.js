const router = require("express").Router();
const TodoSchema = require('../model/todo');

//REGISTER USER
router.post("/add_todo", async (req, res) => {
    //CREATE NEW TODO
    const todo = new TodoSchema({
        todo: req.body.todo,
        done: req.body.done,
        type: req.body.type
    });

    try{
        const savedTodo = await todo.save();
        res.status(200).json({message: "Todo added", todo: savedTodo});
    } catch(err) { 
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err });
    }
});

module.exports = router;