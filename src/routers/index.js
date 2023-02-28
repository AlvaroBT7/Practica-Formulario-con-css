const nodemailer = require("nodemailer");
const { Router } = require("express");
const { join, basename } = require("path");
const { readFile } = require("fs");
const router = Router();

router.post("/send", async (req, res) => {
  sendEmail(req.body);
  res.redirect("/sended.html");
});

const sendEmail = async (user) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "barreroalvaro2007@gmail.com",
      pass: "gjfrwlajejxjgvqr",
    },
  });
  await transporter.sendMail({
    from: "Nodemailer mail: <barreroalvaro2007@gmail.com>",
    to: user.email,
    subject: "New mail",
    text: user.text,
  });
};

module.exports = router;
