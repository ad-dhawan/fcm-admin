const router = require("express").Router();
const TodoSchema = require('../model/todo');

/** CREATE TODO*/
router.post("/create", async (req, res) => {
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
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.toString() });
    }
});

/** GET ALL TODO SETTINGS */
router.get('/get_all', (req, res) => {
    try{
        TodoSchema.find({}, function(err, todo){
            if(err) res.status(502).json({error: err});
            else res.status(200).json(todo)
        })
    } catch(err){
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.toString() });
    }
})

/** GET TODO BY TYPE */
router.get('/get/:type', async (req, res) => {
    try{
        TodoSchema.find({type: req.params.type}, function(err, todo){
            if(err) res.status(404).json({error: err.toString()});
            else res.status(200).json(todo)
        })
    } catch(err){
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.toString() });
    }
})

/** UPDATE TODO */
router.put('/update/:id', async (req, res) => {
    try{
        const todo = await TodoSchema.findOne({ _id: req.params.id })
        await todo.updateOne({ $set : { done: !todo.done } })
        todo.done ? res.status(200).json({message: `unchecked`, todo: todo}) : res.status(200).json({message: `checked`, todo: todo})
    } catch(err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.toString() });
    }
})

/** DELETE TODO */
router.delete('/delete/:id', async (req, res) => {
    try{
        TodoSchema.deleteOne({ _id: req.params.id }, function(err, count){
            if(err) res.status(404).json({error: err.toString()});
            else res.status(200).json(count)
        })
    } catch(err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.toString() });
    }
})

module.exports = router;