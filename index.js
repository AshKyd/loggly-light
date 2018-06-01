function Loggly(options) {
  if (!options) options = {};
  this.customerToken = options.customerToken || window._loggly_customer_token;
}

Loggly.prototype.log = function(tag, data) {
  var customerToken = this.customerToken;
  return new Promise(function(resolve, reject) {
    if (!customerToken) return reject(new Error("Missing customer token"));

    var encodedData;
    try {
      encodedData = encodeURIComponent(JSON.stringify(data));
    } catch (e) {
      return reject(e);
    }

    var src =
      "https://logs-01.loggly.com/inputs/" +
      encodeURIComponent(customerToken) +
      "/tag/" +
      encodeURIComponent(tag) +
      "/1*1.gif?PLAINTEXT=" +
      encodedData;

    return fetch(src)
      .then(resolve)
      .catch(reject);
  });
};

module.exports = Loggly;
