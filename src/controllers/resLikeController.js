const sequelize = require("../models/index");
const { successCode, errorCode, failCode } = require("../utils/response");
const initModel = require("../models/init-models");
const models = initModel(sequelize);

const getResLike = async (req, res) => {
  const by = req.query.by;

  try {
    let data;

    switch (by) {
      case "restaurant":
        data = await models.restaurant.findAll({
          include: [{ model: models.like_res, as: "like_res", attributes: ["user_id"] }],
        });
        break;

      case "user":
        data = await models.user.findAll({
          include: [{ model: models.like_res, as: "like_res", attributes: ["res_id"] }],
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

const likeRes = async (req, res) => {
  const { user_id, res_id, date_like } = req.body;

  try {
    const likeList = await models.like_res.findAll({
      where: { user_id, res_id },
    });
    if (likeList.length !== 0) {
      const data = await models.like_res.destroy({ where: { user_id, res_id } });
      successCode(res, "Successfully unlike!", data);
    } else {
      const data = await models.like_res.create({ user_id, res_id });
      successCode(res, "Successfully like!", data);
    }
  } catch (err) {
    errorCode(res, "BE Error!");
  }
};

module.exports = { getResLike, likeRes };
