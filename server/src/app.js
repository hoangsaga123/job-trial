import cors from "cors";
import morgan from "morgan";
import categoryRoutes from "./routes/categoryRoutes.js";
import express from "express";

const app = express();

const corOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"]
}    

// Middlewares
app.use(cors(corOptions));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);

// Root route 

export default app;