export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "No estás autorizado para entrar aquí.");
  res.redirect("/users/signin");
};
