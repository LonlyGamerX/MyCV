import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  })
  .promise();

// Info DB
export async function getInfo() {
  const [rows] = await pool.query("SELECT * FROM `Info`");
  return rows;
}

export async function getInfoId(id) {
  const [rows] = await pool.query("SELECT * FROM `Info` WHERE `id` = ?", [id]);
  return rows[0];
}

export async function createInfo(name, mail, phone, content) {
  const [rows] = await pool.query(
    "INSERT INTO `Info` (`name`, `mail`, `phone`, `content`) VALUES (?, ?, ?, ?)",
    [name, mail, phone, content]
  );
  const id = rows.insertId;
  return await getInfoId(id);
}

export async function updateInfo(id, name, mail, phone, content) {
  const [rows] = await pool.query(
    "UPDATE `Info` SET `name` = ?, `mail` = ?, `phone` = ?, `content` = ? WHERE `id` = ?",
    [name, mail, phone, content, id]
  );
  return await getInfoId(id);
}

export async function deleteInfo(id) {
  const [rows] = await pool.query("DELETE FROM `Info` WHERE `id` = ?", [id]);
  const deleteText = "Data deleted successfully";
  return deleteText;
}

// User DB
export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM `users`");
  return rows;
}

export async function getUsersId(id) {
  const [rows] = await pool.query("SELECT * FROM `users` WHERE `id` = ?", [id]);
  return rows[0];
}

export async function createUsers(username, email, password) {
  const [rows] = await pool.query(
    "INSERT INTO `users` (`username`, `email`, `password`) VALUES (?, ?, ?)",
    [username, email, password]
  );
  const id = rows.insertId;
  return await getUserId(id);
}

export async function updateUsers(id, username, email, password) {
  const [rows] = await pool.query(
    "UPDATE `users` SET `username` = ?, `email` = ?, `password` = ? WHERE `id` = ?",
    [username, email, password, id]
  );
  return await getUserId(id);
}

export async function deleteUsers(id) {
  const [rows] = await pool.query("DELETE FROM `users` WHERE `id` = ?", [id]);
  const deleteText = "Data deleted successfully";
  return deleteText;
}
