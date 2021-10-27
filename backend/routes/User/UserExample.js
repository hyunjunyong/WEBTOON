var express = require("express");
var router = express.Router();

const Pool = require("../../pool");
const Mydb = require("../../db");
const pool = new Pool();

router.post("/", (req, res) => {
  datas = {};

  const mydb = new Mydb(pool);

  const query = ``;

  mydb.execute((conn) => {
    conn.query(query, (err, result) => {
      console.log(query);
      res.send(result);
    });
  });
});

module.exports = router;
