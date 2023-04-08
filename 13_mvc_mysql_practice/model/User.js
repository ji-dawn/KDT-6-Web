// DONE: DB(mysql) 연결
// DONE: 모델 코드
const mysql = require("mysql");

// database 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.postSignUp = (data, callback) => {
  // data : req.body
  // callback : sql문 실행 후 할 일에 대한 함수

  const sql = `INSERT INTO user (userid, name, pw) VALUES (${data.userid}, ${data.name}, ${data.pw});`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model User.js postSignUp: ", rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 5,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0
    // }
    callback();
  });
};

exports.postSignIn = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid = ${data.userid} and pw = '${data.pw} LIMIT 1;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model User.js postSignIn: ", rows);
    callback(rows);
  });
};

exports.postProfile = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid = ${userid} LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model User.js postProfile: ", rows);
    callback(rows);
  });
};

exports.postProfileDelete = (id, callback) => {
  const sql = `DELETE FROM user WHERE id =${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model User.js postProfileDelete: ", rows);
    callback();
  });
};

exports.postProfileEdit = (data, callback) => {
  const sql = `UPDATE user SET userid=${data.userid}, name=${data.name}, pw=${data.pw} WHERE id=${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model User.js postProfileEdit: ", rows);
    callback();
  });
};
