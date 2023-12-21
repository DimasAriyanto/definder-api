const createTokenUser = (user) => {
  return {
    userId: user.id,
    name: user.name,
    email: user.email,
  };
};

module.exports = { createTokenUser };
