const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// serve the public directory as a static content here
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/randomize", (req, res) => {
  let a = Math.round(Math.random() * 2 + 1);
  let b = Math.round(Math.random() * 2 + 1);
  let c = Math.round(Math.random() * 2 + 1);
  let success = false;
  if (a == b) {
    if (b == c) {
      success = true;
    }
  }

  if (success) {
    res.send(
      "number1: " +
        a +
        "<br>" +
        "number2: " +
        b +
        "<br>" +
        "number3: " +
        c +
        "<br>" +
        "Success!"
    );
  } else {
    res.send(
      "number1: " + a + "<br>" + "number2: " + b + "<br>" + "number3: " + c
    );
  }
});
