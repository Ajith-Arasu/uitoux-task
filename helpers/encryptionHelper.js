const bcrypt = require('bcrypt');

// Function to hash a password
async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  return hashedPassword;
}
async function validatePassword(userProvidedPassword,hashedPasswordFromDatabase){
  const isValidPassword = await bcrypt.compare(userProvidedPassword, hashedPasswordFromDatabase);
  return isValidPassword;

}
module.exports = {
  hashPassword,
  validatePassword
};
