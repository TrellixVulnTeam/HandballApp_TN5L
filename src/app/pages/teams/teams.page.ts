import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  teams: any;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TeamsPage{
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'No' },
      { name: 'From' },
      { name: 'To' },
      { name: 'Schiedsrichter 1' },
      { name: 'Schiedsrichter 2' },
      { name: 'Schiedsrichter 3'}
    ];

    this.http.get<Data>('../../../assets/teams.json')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.teams;
      });
  }
}
