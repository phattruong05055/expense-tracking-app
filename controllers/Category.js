const mockdata = require("../config/data");

const getAllCategory = (page, perpage) => {
  const categories = mockdata.categories;
  return categories;
};

module.exports = {
  getAllCategory,
};
