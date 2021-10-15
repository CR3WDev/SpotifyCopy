const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const profileName = req.body.profileName;

  db.query("select * from users where email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      db.query(
        "insert into users (email,password,profileName) values (?,?,?)",
        [email, password, profileName],
        (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send({ msg: "Cadastrado com sucesso" });
        }
      );
    } else {
      res.send({ msg: "Usuario já cadastrado" });
    }
  });
});
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "select * from users where email = ? and password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send({ msg: "Usuario logado com sucesso" });
      } else {
        res.send({ msg: "Conta não encontrada" });
      }
    }
  );
});
app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
