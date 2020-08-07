/**
 * @name : orinoco
 * @create : 2020/04/05
 * @version : 1.0.0
 * @author : François, Joël Lesenne
 * @site : <https://joellesenne.github.io/ocr-dw-p5-orinoco/index.html>
 * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco>
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
const GET_URL = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY;

/**
 * @desc Select elements for the DOM
 */
const items = $('.js-allArticlesByCategory');

/**
 * @desc Dynamic management for get all articles
 */
const getAllArticlesData = () => {
  try {
    const data = getRequestQuery('GET', GET_URL);
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
  } catch (ex) {
    console.log('will not execute');
  }
};

/**
 * @export modules
 */
export { getAllArticlesData };
