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
