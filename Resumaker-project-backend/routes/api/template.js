const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Template = require("../../Model/Template");
const auth = require("../../middleware/auth");
const User = require("../../Model/User");
const {
  postSwitchCase,
  putSwitchCase,
  deleteSwitchCase,
  compareTemplate,
} = require("../../util/helper");

//Add a new template to the database
router.post(
  "/",
  [
    auth,
    [
      check("name").not().isEmpty(),
      check("additional-info").optional().isArray(),
      check("education").optional().isArray(),
      check("experience").optional().isArray(),
      check("personal-info").optional().isArray(),
      check("project").optional().isArray(),
      check("Skill").optional().isArray(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name } = req.body;
      const user = await User.findById(req.userId);
      const template = new Template({
        lastUpdated: new Date().toISOString(),
        name,
      });
      await postSwitchCase(template, res, req.body);
      await template.save();
      user.templates = [...user.templates, template._id];
      await user.save();
      res.json(template);
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

//Find all the template that the user has
router.post("/myTemplates", auth, async (req, res) => {
  try {
    const { firstIndex, secondIndex } = req.body;
    const userTemplates = await User.findById(req.userId)
      .select("templates")
      .populate("templates");
    const { templates } = userTemplates;
    if (secondIndex >= templates.length) {
      res.header("X-Custom-Header", "lastIndex");
    } else {
      res.header("X-Custom-Header", "keepGoing");
    }
    templates.sort(compareTemplate);
    const slicedTemplates = templates.slice(firstIndex, secondIndex);
    res.json(slicedTemplates);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

//id: templateId
//TODO:
router.get("/:id", async (req, res) => {
  try {
    const templateId = req.params.id;
    const template = await Template.findById(templateId)
      .populate("additionalInfo")
      .populate("education")
      .populate("experience")
      .populate("personalInfo")
      .populate("project")
      .populate("skill");
    if (!template) {
      return res.status(404).json({ errors: [{ msg: "Template Not Found" }] });
    }
    res.json(template);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const templateId = req.params.id;
    const template = await Template.findById(templateId);
    if (!template) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Template doesn't exist" }] });
    }

    const user = await User.findById(req.userId);
    if (!user.templates.includes(templateId)) {
      return res.status(403).json({ errors: [{ msg: "Forbidden Request" }] });
    }
    deleteSwitchCase(user, template, templateId, template._doc);
    res.json({ msg: "Successfully removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

router.put("/", auth, async (req, res) => {
  try {
    console.log(req.body);
    const templateId = req.body._id;
    const user = await User.findOne({ _id: req.userId, templates: templateId });
    const template = await Template.findById(templateId);
    if (!template) {
      return res.status(404).json({ errors: [{ msg: "Template Not Found" }] });
    }

    if (!user) {
      return res.status(403).json({ errors: [{ msg: "Forbidden Request" }] });
    }
    template.lastUpdated = new Date().toISOString();
    putSwitchCase(template, res, req.body);
    res.json({ msg: "Successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

module.exports = router;
