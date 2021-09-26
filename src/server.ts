import 'reflect-metadata';
import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as rotas from './routes'
import './database/connect'
import routes from "./routes/routes";


dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)


// Configure routes
// rotas.register(app);

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`🔥 Server started at http://localhost:${port}`);
});
