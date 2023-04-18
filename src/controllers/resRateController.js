const sequelize = require("../models/index");
const { successCode, errorCode, failCode } = require("../utils/response");
const initModel = require("../models/init-models");
const models = initModel(sequelize);

const getResRate = async (req, res) => {
  const by = req.query.by;

  try {
    let data;

    switch (by) {
      case "restaurant":
        data = await models.restaurant.findAll({
          include: [{ model: models.rate_res, as: "rate_res", attributes: ["user_id"] }],
        });
        break;

      case "user":
        data = await models.user.findAll({
          include: [{ model: models.rate_res, as: "rate_res", attributes: ["res_id"] }],
        });
        break;

      default:
        failCode(res, "Unsuccessfully!");
        return;
    }

    successCode(res, "Successfully!", data);
  } catch (err) {
    errorCode(res, "BE Error!");
  }
};

const rateRes = async (req, res) => {
  const { user_id, res_id, amount, date_rate } = req.body;

  try {
    const rateList = await models.rate_res.findAll({ where: { user_id, res_id } });
    if (rateList.length !== 0) {
      if (amount === 0) {
        models.rate_res.destroy({ where: { user_id, res_id } });
        successCode(res, "Successfully unrate!");
        return;
      } else {
        models.rate_res.update({ amount, date_rate }, { where: { user_id, res_id } });
      }
    } else {
      amount !== 0 && models.rate_res.create({ user_id, res_id, amount, date_rate });
    }

    successCode(res, "Successfully!");
  } catch (err) {
    errorCode(res, "BE Error!");
  }
};

module.exports = { getResRate, rateRes };
