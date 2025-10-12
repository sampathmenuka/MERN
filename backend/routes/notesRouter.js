import express from "express";

const router = express.Router();

router.get("/",(req,res) => {
res.status(200).send("Note loaded successfully");
});

router.post("/",(req,res) => {
res.status(201).json({message:"Note created successfully!"});
});

router.put("/:id",(req,res) => {
res.status(200).send({message:"Note updated successfully"});
});

router.delete("/:id",(req,res) => {
res.status(200).send({message:"Note deleted successfully"});
});

export default router;