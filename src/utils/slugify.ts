const slugify = (str: string) => {
  const slug = str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return slug;
};

export default slugify;
