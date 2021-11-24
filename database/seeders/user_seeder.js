const { User } = require('../index');
const { print, makeHash } = require('../../app/helper');

module.exports = async () => {
  await User.create({
    name: 'John Doe',
    email: 'john.doe@mail.com',
    password: makeHash('jdoe112233'),
    phone: '081234567890',
  });

  print('Success seeding users.');
}