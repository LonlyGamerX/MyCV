import {
  getInfo,
  getInfoId,
  createInfo,
  updateInfo,
  deleteInfo,
  getUser,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} from "./database.js";
import express from "express";
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
app.get("/user", async (req, res) => {
  const user = await getUser();
  res.send(user);
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const userID = await getUserId(id);
  res.send(userID);
});

app.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await createUser(username, email, password);
  res.send(user);
});

app.put("/user/:id", async (req, res) => {
  const id = req.params.id;
  const { username, email, password } = req.body;
  const user = await updateUser(id, username, email, password);
  res.send(user);
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await deleteUser(id);
  res.send(user);
});
