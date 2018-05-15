function promiseRequest(request) {
  return new Promise(function(resolve, reject) {
    let parsedRequest = request.toString();
    request(parsedRequest, function(responce, body, error) {
      if (error) reject(`There was an error with your request: \n\n${error}`);
      let promiseObject = {responce: responce, body: body, error: error};
      resolve(promiseObject);
    });
  });
}
