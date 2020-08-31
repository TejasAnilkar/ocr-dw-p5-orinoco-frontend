/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @desc Build URL / ID
 */
const a = window.location.search;
const b = new URLSearchParams(a);
const ID_URL = b.get('id');

/**
 * @desc Object Category API
 */
const categories = {
  cat1: 'cameras',
  cat2: 'teddies',
  cat3: 'furniture',
};

/**
 * @desc Object Users
 */
const USERS = {
  firstName: 'Alain',
  lastName: 'Dupont',
  address: '20 rue Henry Durant',
  city: 'Lyon',
  email: 'alain-dupont@gmail.com',
};

/**
 * @desc Generate URL API
 */
const API_URL = {
  HOST: 'http://localhost:3000/',
  DIR: 'api/',
  CATEGORY: categories.cat1,
  ID: ID_URL,
  ORDER: 'order',
};

const ORDER_ID = Math.round(Math.random() * 9654782366987);

/**
 * @export module
 */
export { API_URL, USERS, ORDER_ID };
