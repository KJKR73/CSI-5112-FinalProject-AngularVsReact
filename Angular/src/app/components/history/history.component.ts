import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  // Declare the data to get
  historyData: any;

  // Init the constrcutor
  constructor(private http: HttpClient) {}

  // Declares what happens on init
  ngOnInit(): void {
      this.http.post('http://localhost:9999/user/getData', {userId: "6442bf2292b895822b0f3045"}).subscribe((data) =>{
        this.historyData = data;
      })
  }
}
