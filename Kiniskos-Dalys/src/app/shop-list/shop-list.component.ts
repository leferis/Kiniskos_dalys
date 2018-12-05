import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  public product;
  public rowsData;
  public rowCnt;
  public index;
  public products; 

    productsData = [{
		id: 1,
		name: 'product1',
		price: 100.0,
		image: ''
	},{
		id: 2,
		name: 'product2',
		price: 14.5,
		image: ''
	},{
		id: 3,
		name: 'product3',
		price: 100.43,
		image: ''
	},{
		id: 4,
		name: 'product4',
		price: 99.9,
		image: ''
	},{
		id: 4,
		name: 'product5',
		price: 99.9,
		image: ''
	},{
		id: 4,
		name: 'product6',
		price: 99.9,
		image: ''
	},{
		id: 4,
		name: 'product7',
		price: 99.9,
		image: ''
	},{
		id: 4,
		name: 'product8',
		price: 99.9,
		image: ''
	},{
		id: 4,
		name: 'product9',
		price: 99.9,
		image: ''
	}];
  constructor() { }
  

  ngOnInit() {
    this.products = this.getRows();
    //console.log(this.rowCnt);
  }

  getRows = function() {
    this.index = 0;
    this.rowCnt = Math.ceil(this.productsData.length/3);
    var rows = new Array(this.rowCnt);
    var next = 0;
    for(var i = 0; i < this.rowCnt-1; i++)
    {
      rows[i] = new Array(3);
      for(var j = 0; j < 3; j++)
      {
        rows[i][j] = this.productsData[next++];
      }
    }
    var left = this.productsData.length-next;
    rows[this.rowCnt-1] = new Array(left);
    for(var i = 0; i < left; i++)
    {
      rows[this.rowCnt-1][i] = this.productsData[next++];
    }
    return rows;  
}

  addItemToCart = function(product){
		  
    if (this.cart.length === 0){
      product.count = 1;
      this.cart.push(product);
    } else {
      var repeat = false;
      for(var i = 0; i< this.cart.length; i++){
        if(this.cart[i].id === product.id){
          repeat = true;
          this.cart[i].count +=1;
        }
      }
      if (!repeat) {
        product.count = 1;
         this.cart.push(product);	
      }
    }
  }
}
