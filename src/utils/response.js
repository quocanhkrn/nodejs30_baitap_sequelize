const successCode = (res, message, data) => {
  res.status(200).send({
    statusCode: 200,
    message,
    data,
  });
};

const failCode = (res, message) => {
  res.status(400).send({
    statusCode: 400,
    message,
  });
};

const errorCode = (res, message) => {
  res.status(500).send({
    statusCode: 500,
    message,
  });
};

module.exports = { successCode, failCode, errorCode };
