const express = require("express");
const router = express.Router();
router.use(express.json())

router.get("/login", (req, res)=>{
    
    res.send("Get all")
})
router.get("/:id", (req, res)=>{
    res.send(`${req.params.id}`)
})
router.put("/:id", (req,res)=>{
    res.send(`${req.params.id}`)
})
