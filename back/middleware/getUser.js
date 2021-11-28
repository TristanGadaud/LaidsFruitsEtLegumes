import { getUserByEmail } from '../utilities/connectDb.utilities.js'

export async function getUser(req, res, next) {
  var { userEmail } = res.locals;
  let user 
  try {
      let email = ''
      if ('email' in req.body)
        email = req.body.email
      else if ('email' in req.query)
        email = req.body.email
      else if (userEmail)
        email = res.locals.userEmail
      user = await getUserByEmail(email);
    } catch (err) {
      console.log(err)
      return res.status(500).send({ message: err.message });
    }
    if (!user) {
      return res.status(400).send({
        message: "It doesn't match any of our credentials...",
      });
    }
    res.locals.user = user;
    console.log(user)
    next();
}