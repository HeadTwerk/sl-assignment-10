import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent implements OnInit {

  title = 'spacex-missions';

  data:any;
  link = 'https://api.spacexdata.com/v3/missions'

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData: any) => {
      this.data = responseData
    })
  }

}
