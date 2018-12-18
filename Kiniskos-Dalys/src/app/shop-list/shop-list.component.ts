import { Component, OnInit } from '@angular/core';
import { ShopServiceService} from '../Services/Shop/shop-service.service';
import { DeletePartComponent } from '../delete-part/delete-part.component';
import { Router, ActivatedRoute } from '@angular/router';

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

  public isAdmin = true;

  constructor(private _dbService:ShopServiceService,private router:Router,private route:ActivatedRoute) { }
  

  ngOnInit() {
    this.getProducts();
    console.log(this.isAdmin);    
  }

  change()
  {
    this.isAdmin = this._dbService.change();
    console.log("Pasikeitė į: " + this.isAdmin);  
  }

  getProducts()
  {
    var prod;
    this._dbService.getDalys().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          prod = Response[key];
        }
      }
      this.products = this.getRows(prod);

    }, err => console.error(err), () => console.log());
  }

  getRows(products) {
    this.index = 0;
    this.rowCnt = Math.ceil(products.length/4);
    var rows = new Array(this.rowCnt);
    var next = 0;
    for(var i = 0; i < this.rowCnt-1; i++)
    {
      rows[i] = new Array(4);
      for(var j = 0; j < 4; j++)
      {
        rows[i][j] = products[next++];
      }
    }
    var left = products.length-next;
    rows[this.rowCnt-1] = new Array(left);
    for(var i = 0; i < left; i++)
    {
      rows[this.rowCnt-1][i] = products[next++];
    }
    return rows;  
}

DeletePart()
{
  const ID = +this.route.snapshot.paramMap.get('ID');
      
  this._dbService.deleteDalis(ID).subscribe(Response => {}, err => console.error(err), () => console.log("Ištrinta prekė " + ID));
  this.router.navigate(['/Shop']);

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
