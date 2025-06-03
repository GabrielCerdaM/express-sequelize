const canEditYourSelf = (req, res, next) => {
  const user = req.user; // quien hace la solicitud
  const targetUserId = req.params.id; // a quien quiere editar

  if (!user) {
    return res.status(401).json({ message: 'No autenticado' });
  }
  console.log({ user });

  const isAdmin = user.role === 'admin';
  const isSelf = user.id === targetUserId;

  if (!isAdmin && !isSelf) {
    return res.status(403).json({ message: 'No tienes permiso para editar este usuario' });
  }

  next()
}

module.exports = canEditYourSelf
