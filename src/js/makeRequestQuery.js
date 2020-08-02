/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @site : <https://ocr-dw.s3.eu-west-3.amazonaws.com/orinoco/index.html>
 * @depot : <https://github.com/joellesenne/orinoco>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @desc Get XHR request with promise <https://gomakethings.com/promise-based-xhr/>
 *
 * @param {String} URL Request URL
 */
const getRequestQuery = function (...args) {
  // Create the XHR request
  const XHR = new window.XMLHttpRequest();

  // Return it as a Promise
  return new Promise((resolve, reject) => {
    // Setup our listener to process completed requests
    XHR.onreadystatechange = function () {
      // Only run if the request is complete
      if (XHR.readyState !== 4) return;

      // Process the response
      if (XHR.status >= 200 && XHR.status < 300) {
        // If successful
        resolve(JSON.parse(XHR.response));
      } else {
        // If failed
        reject(
          new Error({
            status: XHR.status,
            statusText: XHR.statusText,
          }),
        );
      }
    };

    // Setup our HTTP request
    XHR.open(...args, true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    // Send the request
    XHR.send();
  });
};

/**
 * @desc Get XHR request with promise <https://gomakethings.com/promise-based-xhr/>
 *
 * @param {String} URL Request URL
 */
const postRequestQuery = function (...args) {
  // Create the XHR request
  const XHR = new window.XMLHttpRequest();

  // Return it as a Promise
  return new Promise((resolve, reject) => {
    // Setup our listener to process completed requests
    XHR.onreadystatechange = function () {
      // Only run if the request is complete
      if (XHR.readyState !== 4) return;

      // Process the response
      if (XHR.status >= 200 && XHR.status < 300) {
        // If successful
        resolve(JSON.parse(XHR.response));
      } else {
        // If failed
        reject(
          new Error({
            status: XHR.status,
            statusText: XHR.statusText,
          }),
        );
      }
    };

    // Setup our HTTP request
    XHR.open(...args, true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    const order = args[args.length - 1];
    // Send the request
    XHR.send(order);
  });
};

/**
 * @export modules
 */
export { getRequestQuery, postRequestQuery };
