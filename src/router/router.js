const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/add", class1.b);
router.post("/add", class1.c);

router.get("/data", class1.d);

router.get("/delete", class1.e);
router.get("/delete/:id", class1.f);

router.get("/update/page", class1.h);

router.get("/update/:id", class1.i);
router.post("/update/:id", class1.j);

module.exports = router;
