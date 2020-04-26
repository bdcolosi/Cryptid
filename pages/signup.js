
export default async (req, res) => {
    try {
        // need to put submit handler, change this function to handling input/ add sql insert statement
        const //state change = event.target.value
        
        //not sure of correct sql statment below, have to install bcrypt
        const matchid = await db.one('')
        res.status(200).json(matchid)
    } catch(error) {
        console.error(error);
        res.status(404).end();    }
};