import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  handball: any;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePage {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'No.', prop: 'id'},
      { name: 'Date', prop: 'datum' },
      { name: 'Home', prop: 'name' },
      { name: 'Guest', prop: 'name2' },
      { name: 'Result', prop: 'ergebnis' }
    ];

    this.http.get<Data>('http://localhost:3000/games/a')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.handball.map(element=>{
          element.datum = (new Date(element.datum)).toLocaleDateString('de-DE');
          return element;
        });
      });
  }
}
