/* eslint-disable no-console */
/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @desc Select an element in the dom
 *
 * @param   {string}  args
 */
const $ = (...args) => document.querySelector(...args);

/**
 * @desc Build an element in the dom
 *
 * @param   {string}  args
 */
const $$ = (...args) => document.createElement(...args);

/**
 * @desc User basket Init Object
 *
 * @param {Object} userBasket
 */
if (window.localStorage.getItem('userBasket')) {
  console.log('User basket init and available in local browser storage');
} else {
  const userBasketInit = [];
  window.localStorage.setItem('userBasket', JSON.stringify(userBasketInit));
}

/**
 * @desc Confirm shopping cart
 *
 * @param {Object} confirmShoppingCart
 */
if (window.localStorage.getItem('confirmShoppingCart')) {
  console.log('Confirm shopping cart and available in local browser storage');
} else {
  const confirmShoppingCartInit = [];
  window.localStorage.setItem(
    'confirmShoppingCart',
    JSON.stringify(confirmShoppingCartInit)
  );
}

/**
 * @desc Initialize local Storage
 */
const userBasket = JSON.parse(window.localStorage.getItem('userBasket'));
const confirmShoppingCart = JSON.parse(
  window.localStorage.getItem('confirmShoppingCart')
);

/**
 * @export modules
 */
export { $, $$, userBasket, confirmShoppingCart };
