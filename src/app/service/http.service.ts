import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
  response : any;
  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .subscribe((res) =>{
        this.response = res
      })
  }
}
