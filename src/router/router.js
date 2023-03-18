const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/add", class1.b);
router.post("/add", class1.c);

router.get("/data", class1.d);

module.exports = router;
