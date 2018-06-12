const userParams = requestBody => {
  return { email: requestBody.user.email };
};

module.exports = userParams;
