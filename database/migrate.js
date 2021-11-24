const path = require('path');
const fs = require('fs');
const { sequelize } = require('./index');
const { print } = require('../app/helper');

(async () => {
  if (process.argv[2] == 'migrate') {
    await sequelize.sync();
    print('Success migrating database');
  } else if (process.argv[2] == 'fresh') {
    await sequelize.sync({ force: true });
    print('Success migrating a fresh database');
  } else {
    console.error(`ERROR: undefined parameter. Use 'migrate' or 'fresh' instead.`);
    process.exit(1);
  }

  if (process.argv[3] == 'seed') {
    print('Seeding database...');

    const seederPath = path.join(__dirname, 'seeders');
    const files = fs.readdirSync(seederPath);
    for (const file of files) {
      await require(path.join(seederPath, file))();
    }

    print('Database seeded.');
  }

  process.exit(0);
})();