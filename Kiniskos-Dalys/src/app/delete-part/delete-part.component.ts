import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {ShopServiceService} from '../Services/Shop/shop-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-part',
  templateUrl: './delete-part.component.html',
  styleUrls: ['./delete-part.component.css']
})
export class DeletePartComponent implements OnInit {

  constructor(private route:ActivatedRoute, private _DBaseService:ShopServiceService, private router:Router) { }


  ngOnInit() {
    this.deletePart();
  }

  deletePart(): void {
    const ID = +this.route.snapshot.paramMap.get('ID');
      
    this._DBaseService.deleteDalis(ID).subscribe(Response => {}, err => console.error(err), () => console.log("Ištrinta prekė " + ID));
    this.router.navigate(['/Shop']);

  }
}
