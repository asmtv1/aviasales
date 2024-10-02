const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action); // передать экшен следующему мидлвару или редьюсеру
  console.log("next state", storeAPI.getState());
  return result;
};

export default loggerMiddleware;
