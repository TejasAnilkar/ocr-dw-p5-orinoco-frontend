/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
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
import { $ } from './global';

/**
 * @desc Generate URL API
 */
const GET_URL = API_URL.HOST + API_URL.DIR + API_URL.CATEGORY;

/**
 * @desc Select elements for the DOM
 */
const items = $('.js-allArticlesByCategory');

/**
 * @desc Dynamic management for get all articles
 */
const getAllArticlesData = async () => {
  try {
    const data = await getRequestQuery('GET', GET_URL);
    for (let i = 0; i < data.length; i += 1) {
      items.innerHTML += `<li class="articles__lists--item cards__item">
      <div class="cards__item__thumb">
        <img class="cards__item__thumb--img" src="${
          data[i].imageUrl
        }" alt="Appareil photo vintage ${data[i].name}">
      </div>
      <div class="cards__item__body">
        <h3 class="cards__item__body--title">Appareil photo vintage ${
          data[i].name
        }</h3>
        <p class="cards__item__body--name"><strong>Marque : </strong>${
          data[i].name
        }</p>
        <p class="cards__item__body--lenses"><strong>Lentilles : </strong>${data[
          i
        ].lenses.join(' – ')}</p>
        <P class="cards__item__body--description"><strong>Description : </strong>${data[
          i
        ].description.substr(0, 50)}...</P>
        <p class="cards__item__body--price"><strong>Prix : </strong>${
          data[i].price / 100
        }€</p>
        <div class="cards__item--button">
        <a class="btn" href="produit.html?id=${
          data[i]._id
        }" aria-label="Sélectionner l’appareil photo vintage ${
        data[i].name
      }">Sélectionner</a>
      </div>
      </div>
    </li>`;
    }
  } catch (err) {
    console.log('Something went wrong', err);
  }
};

/**
 * @export modules
 */
export { getAllArticlesData };
