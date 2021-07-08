import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  handball: string;
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
      { name: 'No.' },
      { name: 'Date' },
      { name: 'Home' },
      { name: 'Guest' },
      { name: 'Result' },
      { name: 'Score' }
    ];

    this.http.get<Data>('../../assets/handball.json')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.handball;
      });
  }
}
