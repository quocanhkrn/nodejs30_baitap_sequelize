const sequelize = require("../models/index");
const { successCode, errorCode, failCode } = require("../utils/response");
const initModel = require("../models/init-models");
const models = initModel(sequelize);

const createOrder = async (req, res) => {
  let { user_id, food_id, amount, arr_sub_id } = req.body;

  try {
    let orders = await models.order.findAll({
      where: { user_id, food_id },
    });
    if (orders.length !== 0) {
      failCode(res, "Duplicate!");
    } else {
      models.order.create({ user_id, food_id, amount, arr_sub_id });
      successCode(res, "Successfully");
    }
  } catch (err) {
    errorCode(res, "BE Error!");
  }
};

module.exports = { createOrder };
