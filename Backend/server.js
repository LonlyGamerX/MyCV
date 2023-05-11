import {
  getInfo,
  getInfoId,
  createInfo,
  updateInfo,
  deleteInfo,
  getUsers,
  getUsersId,
  createUsers,
  updateUsers,
  deleteUsers,
} from "./database.js";
import express from "express";
import bycrpt from "bcrypt";
import fs from "fs";
import https from "https";
import http from "http";

//Secure and unsecure port
const UnsecurePort = 5080;
const SecurePort = 5443;
// const privatekey = fs.readFileSync("./WebDev/key.pem");
// const cert = fs.readFileSync("./WebDev/cert.pem");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/images"));

// Start server, secure and unsecure
// http.createServer(app).listen(UnsecurePort);
// https.createServer({ key: privatekey, cert: cert }, app).listen(SecurePort);

app.listen(UnsecurePort, () => {
  console.log(`Server running on port ${UnsecurePort}`);
});

// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

// allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Info
app.get("/info", async (req, res) => {
  const info = await getInfo();
  res.send(info);
});

app.get("/info/:id", async (req, res) => {
  const id = req.params.id;
  const infoID = await getInfoId(id);
  res.send(infoID);
});

app.post("/info", async (req, res) => {
  const { name, mail, phone, content } = req.body;
  const info = await createInfo(name, mail, phone, content);
  res.send(info);
});

app.put("/info/:id", async (req, res) => {
  const id = req.params.id;
  const { name, mail, phone, content } = req.body;
  const info = await updateInfo(id, name, mail, phone, content);
  res.send(info);
});

app.delete("/info/:id", async (req, res) => {
  const id = req.params.id;
  const info = await deleteInfo(id);
  res.send(info);
});

// User
app.get("/users", async (req, res) => {
  const user = await getUsers();
  res.send(user);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const userID = await getUsersId(id);
  res.send(userID);
});

app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);
    const user = await createUsers(username, email, hashedPassword);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const { username, email, password } = req.body;
  const user = await updateUsers(id, username, email, password);
  res.send(user);
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await deleteUsers(id);
  res.send(user);
});

// Login
app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUsers();
  const userFound = user.find((user) => user.email === email);
  if (userFound) {
    const validPassword = await bycrpt.compare(password, userFound.password);
    if (validPassword) {
      res.send("Login successful");
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  } else {
    res
      .status(404)
      .json({ message: "Can not find the user you are looking for!" });
  }
});
