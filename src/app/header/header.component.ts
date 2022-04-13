import {Component, OnInit} from "@angular/core";
import {HttpClient,} from '@angular/common/http';
import {HttpService} from "../service/http.service";

@Component({
  selector: 'app-header',
  template: `
    <div>Current usd course: {{usd}}</div>
    <div>Current eur course: {{eur}}</div>
  `,
  styleUrls: ['header.component.css'],
  providers: [HttpService]
})
export class HeaderComponent implements OnInit {
  usd: string = '';
  eur: string = '';
  response: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .subscribe((response) => {
        this.response = response;
        this.usd = this.response.find((usd: any) => usd.cc === "USD").rate
        this.eur = this.response.find((eur: any) => eur.cc === "EUR").rate
      })
  }
}
