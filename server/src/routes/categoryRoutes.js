import express from "express";
import * as CategoryController from "../controllers/categoryControllers.js";

const router = express.Router();

router.get("/", CategoryController.getAllCategories);

router.post("/", CategoryController.createCategory);

router.put("/:id", CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteCategory);
