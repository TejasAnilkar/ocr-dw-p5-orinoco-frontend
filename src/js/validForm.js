/* eslint-disable no-console */
/* eslint-disable camelcase */
/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>
 * Licence : MIT <https://mit-license.org/>
 */

/**
 * @load modules APP
 */
import { postRequestQuery } from './makeRequestQuery';
import { API_URL, USERS, ORDER_ID } from './config';
import { $, userBasket, confirmShoppingCart } from './global';

/**
 * @desc Generate URL API
 */
const POST_URL = `${API_URL.HOST + API_URL.DIR + API_URL.CATEGORY}/${
  API_URL.ORDER
}`;
console.log(`POST_URL :${POST_URL}`);

/**
 * @desc Select elements for the DOM
 */
const familyName = $('.js-familyName');
const givenName = $('.js-givenName');
const email = $('.js-email');
const addressLine1 = $('.js-addressLine1');
const addressLevel1 = $('.js-addressLevel1');
const submitForm = $('.js-submitForm');

const validForm = () => {
  /**
   * @desc Auto complete user information
   */
  familyName.value = USERS.lastName;
  givenName.value = USERS.firstName;
  email.value = USERS.email;
  addressLine1.value = USERS.address;
  addressLevel1.value = USERS.city;

  submitForm.addEventListener('click', (event) => {
    event.preventDefault();
    if (familyName.value !== USERS.lastName) {
      console.log(
        'Votre Nom de famille ne correspond pas à notre base de données !'
      );
    } else if (givenName.value !== USERS.firstName) {
      console.log('Votre prénom ne correspond pas à notre base de données !');
    } else if (email.value !== USERS.email) {
      console.log('Votre email ne correspond pas à notre base de données !');
    } else if (addressLine1.value !== USERS.address) {
      console.log('Votre adresse ne correspond pas à notre base de données !');
    } else if (addressLevel1.value !== USERS.city) {
      console.log(
        'Le nom de votre ville ne correspond pas à notre base de données !'
      );
    } else {
      console.log("Tous c'est bien passée");
      confirmShoppingCart.push([
        ORDER_ID,
        USERS.firstName,
        USERS.lastName,
        userBasket,
      ]);
      // userBasket.clear();
      if (
        window.localStorage.getItem(
          'confirmShoppingCart',
          JSON.stringify(confirmShoppingCart)
        ) !== null
      ) {
        window.localStorage.setItem(
          'confirmShoppingCart',
          JSON.stringify(confirmShoppingCart)
        );
      }
      if (
        window.localStorage.getItem(
          'userBasket',
          JSON.stringify(userBasket)
        ) !== null
      ) {
        window.localStorage.setItem('userBasket', JSON.stringify(userBasket));
      }
    }
    window.setTimeout(() => {
      window.location = 'confirmation.html';
    }, 2000);
  });
};
const createOrder = () => {
  // Request XHR
  const promise = postRequestQuery('POST', POST_URL);
  promise.then((data) => {
    console.log(`data 'POST' ? ${data}`);
    const myOrder = JSON.stringify(confirmShoppingCart);
    console.log(`My ORDER : ${myOrder}`);
    // TODO request POST
  });
  promise.push(confirmShoppingCart);
  promise.catch((err) => {
    console.log('Something went wrong', err);
  });
};

/**
 * @export modules
 */
export { validForm, createOrder };
