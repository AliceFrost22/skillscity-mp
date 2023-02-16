import sql from "@/utils/postgres";

export default async function handle(req, res) {
    // const { name, email, message } = req.query; THIS GOES WITH FETCH REQUEST

    const { name, email, message } = req.body; //this is through a body with a POST request
    

    if (name === undefined) {
        res.status(400).json({message: "Name is required"});
        return;
    }
    if (email === undefined) {
        res.status(400).json({message: "Email is required"});
        return;
    }
    if (message === undefined) {
        res.status(400).json({message: "Message is required"});
        return;
    }

    const response = await sql`
        insert into contact_messages
            (name, message, email)
        values
            (${name}, ${message}, ${email})
    `;

    res.json({ message: "Success" });
}