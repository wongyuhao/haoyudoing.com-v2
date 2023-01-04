import clientPromise from "../../lib/mongodb";

const getProjects = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);

        const projects = await db.collection("ProjectData").find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
        });

        res.json(projects);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};

export default getProjects;