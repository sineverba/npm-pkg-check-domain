export const isInDomain = (mail: string, domain: string): boolean => {
  const mailDomain = mail.split("@")[1];
  return mailDomain === domain;
};
