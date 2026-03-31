import * as CategoryModel from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};