var Todo = require("../model/schema");
const HTTP = require("../../constant/response.constant");

class class1 {
  static a = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      res.render("First", { OriginalData });
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static b = async (req, res) => {
    try {
      res.render("Add");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static c = async (req, res) => {
    try {
      if (req.body.Image && req.body.Primaryurl && req.body.Secondaryurl) {
        var OriginalData = await Todo.find({});
        if (OriginalData.length == 0) {
          var a = 1;
        } else {
          var a = OriginalData[OriginalData.length - 1].id + 1;
        }
        let data = new Todo({
          id: a,
          Image: req.body.Secondaryurl,
          Name: req.body.Image,
          Source: req.body.Primaryurl,
        });
        await data.save();
      }
      res.redirect("/Add");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static d = async (req, res) => {
    try {
      var Data = await Todo.find({});
      var OriginalData = [];
      for (var i = 0; i < Data.length; i++) {
        var a = {
          _id: Data[i]._id,
          Image: Data[i].Image,
          Name: Data[i].Name,
          Source: Data[i].Source,
          __v: 0,
        };
        OriginalData.push(a);
      }
      res.send(OriginalData);
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static e = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      res.render("Delete", { OriginalData });
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static f = async (req, res) => {
    try {
      await Todo.find({ id: req.params.id }).deleteOne();
      res.redirect("delete");
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static h = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      res.render("updatePage", { OriginalData });
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static i = async (req, res) => {
    try {
      var OriginalData = await Todo.find({ id: req.params.id });
      res.render("update", { OriginalData });
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static j = async (req, res) => {
    try {
      var data = await Todo.find({ id: req.params.id });
      data[0].Name = req.body.Image;
      data[0].Image = req.body.Secondaryurl;
      data[0].Source = req.body.Primaryurl;
      await data[0].save();
      res.redirect("page");
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
