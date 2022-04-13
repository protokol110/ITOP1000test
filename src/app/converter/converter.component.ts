import {Component, OnInit} from "@angular/core";
import {HttpClient,} from '@angular/common/http';
import {HttpService} from "../service/http.service";

@Component({
  selector: 'app-converter',
  templateUrl: 'converter.component.html',
  styleUrls: ['converter.component.css'],
  providers: [HttpService]
})
export class ConverterComponent {
  response: any;
  currencies:any = ['UAH','USD','EUR']
  inrToForeignRates:any  = {
    'UAH': 1,
    'USD': 0,
    'EUR': 0
  }
  inCurr: string = this.currencies[0];
  outCurr: string = this.currencies[1];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .subscribe((response) => {
        this.response = response;
        this.inrToForeignRates.USD = this.response.find((usd: any) => usd.cc === "USD").rate
        this.inrToForeignRates.EUR = this.response.find((eur: any) => eur.cc === "EUR").rate
        console.log(this.inrToForeignRates)
      })
  }
  inputValue: number = 1;
  outputValue = (input:any, inCurr:any, outCurr:any) => {
    return input * this.inrToForeignRates[outCurr] / this.inrToForeignRates[inCurr]
  }
  output = () => {
    return this.outputValue(this.inputValue, this.inCurr, this.outCurr);
  }
}
