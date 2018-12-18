import { Component, OnInit } from '@angular/core';
import { ShopServiceService} from '../Services/Shop/shop-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {

  public pavadinimas;
  public ilgis;
  kategorija;
  kilme;
  pardavimo_kaina;
  paveikslelis;
  pirkimo_kaina;
  plotis;
  svoris;
  aukstis;

  constructor(private dbService:ShopServiceService, private router: Router)
   {

   }

  ngOnInit() {
  }

  AddDalis()
  {
    this.dbService.AddDalis(this.pavadinimas, this.aukstis, this.ilgis, this.kategorija, this.kilme, this.pardavimo_kaina, this.paveikslelis, this.pirkimo_kaina, this.plotis, this.svoris).subscribe(Response => {}, err => console.error(err), () => console.log());
    this.router.navigate(['/Shop']);
  }

}
