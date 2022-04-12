import {Component, OnInit} from "@angular/core";
import {HttpClient,} from '@angular/common/http';
import {HttpService} from "../service/http.service";

@Component({
  selector: 'app-converter',
  template: `
  `,
  styleUrls: ['converter.component.css'],
  providers: [HttpService]
})
export class ConverterComponent {

  constructor(private http: HttpClient) {
  }



}
