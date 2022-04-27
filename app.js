const express = require("express");
const config = require("./config/config");
const mainRouter = require("./routes/main.route");
const loginRouter = require("./routes/login.route");
const regisRouter = require("./routes/reg.route");
const logoutRouter = require("./routes/logout.route");

const app = express();
config(app);
/////////////ROUTES
app.use("/", mainRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/regis", regisRouter);
// app.use("/login", loginRouter);
// app.use("/login", loginRouter);
// app.use("/login", loginRouter);

app.listen(3000, () => console.log("listen port 3000"));
