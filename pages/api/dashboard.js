export default async (req, res) => {

    if (!req.cookies._id) {

        return res.status(301).redirect('/');

    }
}