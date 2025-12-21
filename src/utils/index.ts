export const getInitials = (fullName: string) => {
  const parts = fullName.trim().toUpperCase().split(" ");
  if (parts.length >= 2) {
    return parts[0].charAt(0) + parts[1].charAt(0);
  }

  return parts[0].charAt(0);
};
