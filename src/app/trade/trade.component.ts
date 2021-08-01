import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TradeService} from "./trade.service";
import {catchError, tap} from "rxjs/operators";
import {Trade} from "./Trade";


/** @title Select with custom trigger text */
@Component({
  selector: 'trade',
  templateUrl: 'trade.component.html',
  styleUrls: ['trade.component.css']
})
export class TradeComponent implements OnInit  {
  contactForm = this.fb.group({
    sector: [null]
  });

  trade: Trade = {};
  errorMessage = '';

  sectors = [
    { id: 1, name: "Nifty 500" },
    { id: 2, name: "Nifty 50" },
    { id: 3, name: "Nifty Bank" },
    { id: 4, name: "F&O stocks" }
  ];

  constructor(private fb:FormBuilder, private tradeService: TradeService) {

  }

  ngOnInit() {

    this.contactForm = this.fb.group({
      sector: [null]
    });
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
   // console.log(this.tradeService.getMarketTrend());
    /* .pipe(
       tap(data => console.log('All: ', JSON.stringify(data))),
       catchError(this.handleError)
     );*/

    this.tradeService.getMarketTrend(this.contactForm.value.sector).subscribe({
      next: trade => {this.trade = trade; console.log(this.trade)},
      error: err => this.errorMessage = err
    });
  //  console.log(this.trade);
  }

}
