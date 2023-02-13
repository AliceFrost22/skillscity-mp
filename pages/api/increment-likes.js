export default async function handler(req, res){
    
    const id = +req.query.id;
    const likes = +req.query.likes;

    if (id === null || id=== undefined){
        res.status(400).json({message:"Like is required"});
    }

    const films = await sql`
        update films
        set likes = ${likes}
        where id = ${id}
    `;

    res.json({ message: "Number of likes updated"});
}