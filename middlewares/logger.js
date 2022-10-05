const apiLogger = (req, res, next) => {
  const apiRequestData = new Date();
  console.log(apiRequestData);
  next;
};
