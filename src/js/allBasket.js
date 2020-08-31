/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
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
import { getRequestQuery } from './makeRequestQuery';
import { API_URL } from './config';
import { $, userBasket } from './global';

/**
 * @desc Generate URL API
 */
const GET_URL = API_URL.HOST + API_URL.DIR + API_URL.CATEGORY;

/**
 * @desc Select elements for the DOM
 */
const items = $('.js-allBasket');
const totalContent = $('.js-totalPay');

/**
 * @desc Dynamic management for all bracket
 */
const allBasket = () => {
  // Request XHR
  const promise = getRequestQuery('GET', GET_URL);
  promise.then((data) => {
    let totalPay = 0;
    for (let i = 0; i < data.length; i += 1) {
      for (let j = 0; j < userBasket.length; j += 1) {
        if (userBasket[j][0] === data[i]._id) {
          if (items) {
            items.innerHTML += `<td>${data[i].name}</td><td>${
              data[i].price / 100
            }</td><td>${userBasket[j][2]}</td><td>${userBasket[j][1]}</td><td>${
              (data[i].price / 100) * userBasket[j][1]
            }€</td>`;
            totalPay += (data[i].price / 100) * userBasket[j][1];
          }
        }
      }
    }
    if (totalPay >= 1) {
      if (totalContent) {
        totalContent.textContent = `Récapitulatif de votre commande d'un total de : ${totalPay}€`;
      } else {
        totalContent.textContent =
          "Vous n'avez pas d'article dans le panier actuellement";
      }
    }
  });
  promise.catch((err) => {
    console.log('Something went wrong', err);
  });
};

/**
 * @export modules
 */
export { allBasket };
