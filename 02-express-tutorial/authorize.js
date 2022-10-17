const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    console.log("authorized");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
