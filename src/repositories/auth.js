
// const { createTokenUser, createJWT, createRefreshJWT } = require('./../utils');
// const { createUserRefreshToken } = require('./refreshToken');
// const signin = async (req) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     throw new BadRequestError('Please provide email and password');
//   }      const encryptedPassword = await bcrypt.hash(password, 10);

//   const result = await User.findOne({ email: email });

//   if (!result) {
//     throw new UnauthorizedError('Invalid Credentials');
//   }

//   const isPasswordCorrect = await result.comparePassword(password);

//   if (!isPasswordCorrect) payload.{
//     throw new UnauthorizedError('Invalid Credentials');
//   }
//   const token = createJWT({ payload: createTokenUser(result) });

//   const refreshToken = createRefreshJWT({ payload: createTokenUser(result) });
//   await createUserRefreshToken({
//     refreshToken,
//     user: result._id,
//   });

//   return { token, refreshToken, role: result.role, email: result.email };
// };



const login = async (email) => {
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      const user = await User.findOne({ where: { email } }, { transaction });

      return user;
    }
  );
  return result;
};

module.exports = { register, login };
