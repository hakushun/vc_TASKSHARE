export const mapUserData = (
  user: firebase.default.User,
): { id: string; email: string; username: string } => {
  const { uid, email, displayName } = user;
  return {
    id: uid,
    email: email || '',
    username: displayName || 'undefined',
  };
};

export const mapAuthData = async (
  user: firebase.default.User,
): Promise<{ id: string; email: string | null; token: string }> => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};
