import app from "./src/app.js";
import dotenv from "dotenv";
import * as CategoryModel from "./src/models/categoryModel.js"
import * as UserModel from "./src/models/userModel.js"
import * as PostModel from "./src/models/postModel.js"

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        // Initialize database tables
        await CategoryModel.initTable();
        await UserModel.initTable();
        await PostModel.initTable();

        console.log("Successfully synch models.");


        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
            console.log(`Press CTRL+C to stop the server`);

        }); 

    } catch (error) {
        console.log("Fail to synch models");
    }
}

startServer();