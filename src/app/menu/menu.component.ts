import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {bootstrapNumberInput} from '../../assets/js/bootstrap-number-input.js';
import {MenuService} from './menu.service';
import * as _ from 'lodash';
import {KeysPipe} from './menu.pipe';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})

export class MenuComponent implements OnInit {
  cities;
  selectedCities;
  cars: SelectItem[];
  productList;
  categoryList = [];
  product;

  constructor(private _menuService: MenuService) {
    this.cities = [
      {name: 'Most Selling', code: 'NY'},
      {name: 'Promotions', code: 'RM'},
      {name: 'Appetizer', code: 'LDN'},
      {name: 'Appetizers', code: 'IST'},
      {name: 'Beef', code: 'PRS'},
      {name: 'Beef noodle soup', code: 'PRS'},
      {name: 'Beverages', code: 'PRS'},
      {name: 'Breakfast', code: 'PRS'},
      {name: 'Burger', code: 'PRS'},
      {name: 'Combo', code: 'PRS'},
      {name: 'Desserts', code: 'PRS'},
      {name: 'Drinks', code: 'PRS'},
      {name: 'Fish and chips', code: 'PRS'},
      {name: 'Fresh', code: 'PRS'},
      {name: 'Fresh juices', code: 'PRS'},
      {name: 'Fried Chicken Meals', code: 'PRS'},
      {name: 'Hot drinks', code: 'PRS'},
      {name: 'Juice', code: 'PRS'},
      {name: 'Main course', code: 'PRS'},
      {name: 'Milkshakes', code: 'PRS'},
      {name: 'Oriental Grills Chicken', code: 'PRS'},
      {name: 'Pasta', code: 'PRS'},
      {name: 'Pizza', code: 'PRS'},
      {name: 'Rice', code: 'PRS'},
      {name: 'Rice &amp; Pasta', code: 'PRS'},
      {name: 'Salad With no Onion', code: 'PRS'},
      {name: 'Sandwich Meals', code: 'PRS'},
      {name: 'Side Items', code: 'PRS'},
      {name: 'Sides', code: 'PRS'},
      {name: 'Soups', code: 'PRS'},
      {name: 'Steak', code: 'PRS'},
      {name: 'Sushi', code: 'PRS'},
      {name: 'Sweets', code: 'PRS'},
      {name: 'Tender Meals', code: 'PRS'},
      {name: 'TICKA', code: 'PRS'},
      {name: 'Veg pizza', code: 'PRS'},
    ];

    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
    ];
    this.selectedCities = [{name: 'New York', code: 'NY'}];
  }

  ngOnInit() {
    this.getMenus();

  }

  getCatname(id) {
    const category = this.categoryList.find((cat) => {
      if (cat.category_id === Number(id)) {
        return true;
      }
    });
    return (category && category['category_name']) ? category['category_name'] : '';
  }

  getMenus() {
    this._menuService.getConfig()
      .subscribe((data) => {
        this.productList = data.response.products;
        //   this.productList = JSON.stringify(data.response.products);
        this.categoryList = _.valuesIn(data.response.categories);
        console.log(this.categoryList);
        // console.log(this.productList);
        // console.log('products: ', +JSON.stringify(this.productList));
        // console.log('category: ', +JSON.stringify(this.categoryList));
      });
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
