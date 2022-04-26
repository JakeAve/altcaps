export const toAltcaps = (str: string) => {
  let isAlt = Math.random() > 0.5;
  let result = "";
  for (const c of str.toLowerCase()) {
    const u = c.toUpperCase();
    if (u !== c && isAlt) {
      result += u;
      isAlt = false;
    } else if (u !== c) {
      result += c;
      isAlt = true;
    } else result += c;
  }
  return result;
};
