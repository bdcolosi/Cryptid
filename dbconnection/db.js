const pgp = require('pg-promise')();

const host = localhost;
const port = 3001;
const database = userinformation;

const db = pgp(`postfres://@${host}:${port}/${database}`);

export default db

