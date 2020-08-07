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
import './sass/app.scss';
import './favicon.ico';
import './robots.txt';
import './manifest.json';
import { getUserConnect, quantityBasket, getCurrentYear } from './js/allPages';
import { getAllArticlesData } from './js/allProducts';
import { getArticleByIdData } from './js/oneProduct';
import { allBasket } from './js/allBasket';
import { validForm } from './js/validForm';
import { orderPlaced } from './js/orderPlaced';

window.addEventListener('load', () => {
  /**
   * @desc Get All Pages
   */
  getUserConnect();
  quantityBasket();
  getCurrentYear();

  /**
   * @desc Get Home Page all articles
   */
  getAllArticlesData();

  /**
   * @desc Get Home Page one article
   */
  getArticleByIdData();

  /**
   * @desc Get all basket page
   */
  allBasket();

  /**
   * @desc Get order Placed
   */
  orderPlaced();

  /**
   * @desc Get valid user for form
   */
  validForm();
});
