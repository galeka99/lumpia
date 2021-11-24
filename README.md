# Lumpia Framework
#### Simple Rest API Framework for NodeJS
---
Lumpia is a Framework for building a rest API service on NodeJS engine with simple step to use.
### How to use:
1. Clone the repository
```bash
git clone https://github.com/galeka99/lumpia.git
```
2. Install packages
```bash
npm install
```
1. Duplicate file `env.json.example` and rename it to `env.json`
2. Edit the `env.json` file to match with your configuration
3. Customize `model`,`seeder`,`controller`,`middleware`, and `route` to match with your project.
4. Run this command to migrate the model into your database, add `seed` parameter if you want to seed a starter data. You can use `db:fresh` instead of `db:migrate` for clean migration.
```bash
npm run db:migrate
```
5. Start the service
```bash
npm run start
```   
---
### Components Location
| No | Component | Location |
| --- | --- | --- |
| 1 | Model | `app/models/` |
| 2 | Seeder | `database/seeders/` |
| 3 | Controller | `app/controllers/` |
| 4 | Middleware | `app/middlewares/` |
| 5 | Route | `app/routes.js` |
---
### Modules used:
- [x] [express](https://expressjs.com/)
- [x] [cors](https://www.npmjs.com/package/cors)
- [x] [bcrypt](https://www.npmjs.com/package/bcrypt)
- [x] [moment](https://momentjs.com)
- [x] [sequelize](https://sequelize.org/master/)
---
### Notes:
- Default database engine (driver) is ***mysql***, if you want to use another driver you could install additional modules ([see here](https://sequelize.org/master/manual/getting-started.html)).
- You can add template engine or public directories for html response instead of JSON response with a little modifications.
---
Get in touch? go hit these **[LinkedIn](https://linkedin.com/in/galeka99)** or **[Instagram](https://instagram.com/galangep_/)** links :)