export default function verifyBodyParameters(parameters) {
  return (req, res, next) => {
    for (let p of parameters) {
      if (!req.body.hasOwnProperty(p))
        return res.status(400).send({
          message: `${p} parameter is missing.`
        });
    }
    next()
  }
}