/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @load modules APP
 */
import { USERS } from './config';
import { $, userBasket } from './global';

/**
 * @desc Select elements in the DOM
 */
const quantity = $('.js-quantityBasket');
const userConnect = $('.js-userConnect');

/**
 * @desc Dynamic management for the quantity basket
 */
const quantityBasket = async () => {
  const data = await userBasket;
  if (data.length >= 1) {
    quantity.innerHTML = data.length;
  } else {
    quantity.innerHTML = '';
  }
};

/**
 * @desc Dynamic management for the current year
 */
const getCurrentYear = () => {
  const date = new Date().getFullYear('Y');
  const dateFullYear = $('.js-currentYear');
  // eslint-disable-next-line no-return-assign
  dateFullYear.textContent = date;
};

/**
 * @desc Dynamic management for the users
 */
const getUserConnect = () => {
  if (userConnect !== null) {
    userConnect.textContent = `${USERS.firstName} ${USERS.lastName}`;
  } else {
    userConnect.textContent = 'Connectez-vous';
  }
};

/**
 * @export modules
 */
export { quantityBasket, getCurrentYear, getUserConnect };
