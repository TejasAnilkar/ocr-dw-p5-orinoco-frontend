/* eslint-disable func-names */
/* eslint-disable prefer-promise-reject-errors */
/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @desc Get xhr request with promise <https://gomakethings.com/promise-based-xhr/>
 *
 * @param {String} URL Request URL
 */
const getRequestQuery = function (...args) {
  // Create the xhr request
  const xhr = new XMLHttpRequest();

  // Return it as a Promise
  return new Promise((resolve, reject) => {
    // Setup our listener to process completed requests
    xhr.onreadystatechange = function () {
      // Only run if the request is complete
      if (this.readyState !== 4) return;

      // Process the response
      if (this.status >= 200 && this.status < 300) {
        // If successful
        resolve(JSON.parse(this.responseText));
      } else {
        // If failed
        reject({
          status: this.status,
          statusText: this.statusText,
        });
      }
    };

    // Setup our HTTP request
    xhr.open(...args, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // Send the request
    xhr.send();
  });
};

/**
 * @desc POST xhr request with promise <https://gomakethings.com/promise-based-xhr/>
 *
 * @param {String} URL Request URL
 */
const postRequestQuery = function (...args) {
  // Create the XHR request
  const xhr = new window.XMLHttpRequest();

  // Return it as a Promise
  return new Promise((resolve, reject) => {
    // Setup our listener to process completed requests
    xhr.onreadystatechange = function () {
      // Only run if the request is complete
      if (this.readyState !== 4) return;

      // Process the response
      if (this.status >= 200 && this.status < 300) {
        // If successful
        resolve(JSON.parse(this.response));
      } else {
        // If failed
        reject(
          new Error({
            status: this.status,
            statusText: this.statusText,
          })
        );
      }
    };

    // Setup our HTTP request
    xhr.open(...args, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const order = args[args.length - 1];
    // Send the request
    xhr.send(order);
  });
};

/**
 * @export modules
 */
export { getRequestQuery, postRequestQuery };
