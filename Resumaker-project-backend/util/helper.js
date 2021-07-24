const AdditionalInfo = require("../Model/AdditionalInfo");
const Education = require("../Model/Education");
const Experience = require("../Model/Experience");
const PersonalInfo = require("../Model/PersonalInfo");
const Project = require("../Model/Project");
const Skill = require("../Model/Skill");

module.exports.postSwitchCase = async (template, res, body) => {
  for (const [model, values] of Object.entries(body)) {
    switch (model) {
      case "additionalInfo":
        template.additionalInfo = await uploadData(values, AdditionalInfo, res);
        break;
      case "education":
        template.education = await uploadData(values, Education, res);
        break;
      case "experience":
        template.experience = await uploadData(values, Experience, res);
        break;
      case "personalInfo":
        template.personalInfo = await uploadData(values, PersonalInfo, res);
        break;
      case "project":
        template.project = await uploadData(values, Project, res);
        break;
      case "skill":
        template.skill = await uploadData(values, Skill, res);
        break;
      default:
        break;
    }
  }
  await template.save();
};

module.exports.putSwitchCase = async (template, res, body) => {
  for (const [model, values] of Object.entries(body)) {
    switch (model) {
      case "additionalInfo":
        template.additionalInfo = await updateData(
          values,
          AdditionalInfo,
          res,
          template.additionalInfo
        );
        break;
      case "education":
        template.education = await updateData(
          values,
          Education,
          res,
          template.education
        );
        break;
      case "experience":
        template.experience = await updateData(
          values,
          Experience,
          res,
          template.experience
        );
        break;
      case "personalInfo":
        template.personalInfo = await updateData(
          values,
          PersonalInfo,
          res,
          template.personalInfo
        );
        break;
      case "project":
        template.project = await updateData(
          values,
          Project,
          res,
          template.project
        );
        break;
      case "skill":
        template.skill = await updateData(values, Skill, res, template.skill);
        break;
      default:
        break;
    }
  }
  await template.save();
};

module.exports.deleteSwitchCase = async (user, template, templateId, _doc) => {
  try {
    for (const [model, values] of Object.entries(_doc)) {
      switch (model) {
        case "additionalInfo":
          await AdditionalInfo.deleteMany({ _id: { $in: values } });
          break;
        case "education":
          await Education.deleteMany({ _id: { $in: values } });
          break;
        case "experience":
          await Experience.deleteMany({ _id: { $in: values } });
          break;
        case "personalInfo":
          await PersonalInfo.deleteMany({ _id: { $in: values } });
          break;
        case "project":
          await Project.deleteMany({ _id: { $in: values } });
          break;
        case "skill":
          await Skill.deleteMany({ _id: { $in: values } });
          break;
        default:
          break;
      }
    }
    await template.remove();
    user.templates = user.templates.filter((e) => e != templateId);
    await user.save();
  } catch (error) {
    throw "Server Error";
  }
};

const uploadData = async (values, model, res) => {
  try {
    const ids = [];
    for (const value of values) {
      const newData = new model(value);
      await newData.save();
      ids.push(newData._id);
    }

    return ids;
  } catch (error) {
    console.log(error);
    throw "Server Error";
  }
};

const updateData = async (values, model, res, originalIds) => {
  try {
    const ids = [];
    for (const value of values) {
      const id = value._id;
      let data;
      if (!id) {
        data = new model(value);
        await data.save();
      } else {
        originalIds = originalIds.filter((e) => e != id);
        data = await model.findOneAndUpdate({ _id: id }, value, { new: true });
        if (!data) {
          continue;
        }
      }
      ids.push(data._id);
    }
    await model.deleteMany({ _id: { $in: originalIds } });
    return ids;
  } catch (error) {
    throw "Server Error";
  }
};

module.exports.compareTemplate = (a, b) => {
  const date1 = new Date(a.lastUpdated).getTime();
  const date2 = new Date(b.lastUpdated).getTime();
  if (date1 < date2) {
    return 1;
  }
  if (date1 > date2) {
    return 0;
  }
  return 0;
};
