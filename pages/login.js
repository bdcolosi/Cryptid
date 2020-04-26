

export default async (req, res) => {
    try {
        const {query:{id}} = req
        //not sure of correct sql statment below, have to install bcrypt
        const matchid = await db.one('SELECT * FROM users WHERE id = $1', id)
        res.status(200).json(matchid)
    } catch(error) {
        console.error(error);
        res.status(404).end();    }
};