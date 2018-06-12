const models = require('../models');
const serializers = require('../serializers');
const services = require('../services');

const index = async (req, res) => {
  const users = await models.user.all();
  const response = serializers.users(users);
  return res.json(response);
};

const show = async (req, res) => {
  const userId = req.params.userId;
  const user = await models.user.findById(userId);
  const response = serializers.user(user);
  return res.json(response);
};

const create = async (req, res) => {
  const userParams = services.userParams(req.body);
  const user = await models.user.create(userParams);
  const response = serializers.user(user);
  return res.json(response);
};

const update = async (req, res) => {
  const userId = req.params.userId;
  const user = await models.user.findById(userId);
  const userParams = services.userParams(req.body);
  await user.update(userParams);
  const response = serializers.user(user);
  return res.json(response);
};

const destroy = async (req, res) => {
  const userId = req.params.userId;
  const user = await models.user.findById(userId);
  await user.destroy();
  const response = serializers.user(user);
  return res.json(response);
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
