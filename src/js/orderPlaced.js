/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/*
  @name : orinoco
  @create : 2020/04/05
  @version : 1.0.0
  @author : François, Joël Lesenne
  @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>
  @licence : MIT <https://mit-license.org/>
*/

/**
 * @load modules APP
 */
import { getRequestQuery } from './makeRequestQuery';
import { API_URL } from './config';
import { $, confirmShoppingCart } from './global';

/**
 * @desc Generate URL API
 */
const GET_URL = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY;

/**
 * @desc Select elements
 */
const orderInfo = $('.js-orderInfo');
const returnPageHome = $('.js-retourHome');

const orderPlaced = () => {
  const promise = getRequestQuery('GET', GET_URL);
  promise.then((data) => {
    if (orderInfo) {
      if (confirmShoppingCart !== null) {
        orderInfo.innerHTML = `<h2 class="modal__title">Votre commande a bien été validée</h2><p>Mr. <strong>${
          confirmShoppingCart[0][1]
        } ${
          confirmShoppingCart[0][2]
        }</strong>, voici votre numéro ID : <strong>${
          confirmShoppingCart[0][0]
        }</strong> de votre commande d'un prix total de : <strong>${
          /* EXEMPLE */ data.length /* TODO All Price */
        }</strong>€.<br>Nous restons à votre disposition pour toutes vos réclamations.<br>Toute l'équipe vous remercie pour votre achat en espérant qu'il vous conviendra.</p>`;
      } else {
        orderInfo.innerHtml =
          '<h2 class="modal__title">Il y a un problème avec votre commande</h2><p><a href="./panier.html">Retour au panier</a></p>';
      }
    }
    if (returnPageHome) {
      returnPageHome.addEventListener('click', (event) => {
        event.preventDefault();
        window.localStorage.clear();
        window.setTimeout(() => {
          window.location = 'index.html';
        }, 2000);
      });
    }
  });
  promise.catch((err) => {
    console.log('Something went wrong', err);
  });
};

/**
 * @export modules
 */
export { orderPlaced };
