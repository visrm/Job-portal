// import dependecies
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/connectdb.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobsRoute from "./routes/jobs.route.js";
import  applicationRoute from "./routes/application.route.js";
dotenv.config({});

// initialise application
const app = new express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// api's
app.use("/api/v0/user", userRoute);
app.use("/api/v0/company", companyRoute)
app.use("/api/v0/jobs", jobsRoute);
app.use("/api/v0/application", applicationRoute);

// dummy api
// app.get("/hello", async (req, res) => {
//   res.send({ message: "Hello World!" });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port:${PORT}`);
});
