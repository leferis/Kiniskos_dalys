import { Component, OnInit } from '@angular/core';
import {VINService} from '../Services/VIN/vin.service';
import {Observable} from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vin-decode',
  templateUrl: './vin-decode.component.html',
  styleUrls: ['./vin-decode.component.css']
})
export class VinDecodeComponent implements OnInit {

  public data;
  public vin:string;
 
  constructor(private _vinService: VINService) { }

  ngOnInit() {
    //this.decodeVin("1XPFDB9X7ND314415");
    console.log('dekodavo');
  }
  decodeVin() {
    this._vinService.decodeVin(this.vin).subscribe(data => { this.data = data}, err => console.error(err), () => console.log('done loading data'));
    console.log(this.vin);
  }
}
