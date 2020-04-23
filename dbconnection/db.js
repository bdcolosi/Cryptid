const pgp = require('pg-promise')();

const host = localhost;
const port = 3000;
const database = userinformation;

const db = pgp(`postgres://@${host}:${port}/${database}`);

export default db;

