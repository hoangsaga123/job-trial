import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("fetch successfully");
})

router.post('/', (req, res) => {
    res.status(201).json({ "message": "Create Successfully" });
})

router.put('/:id', (req, res) => {
    res.status(200).json({ "message": "Update Successfully" });
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ "message": "Delete Successfully" });
})

export default router;