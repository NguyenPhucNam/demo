import { Component, OnInit } from '@angular/core';
import { HomeService } from './homepage.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HomeService]
})
export class HomepageComponent implements OnInit {

  objectProducts: String[];
  url = "";

  constructor(private HomeService: HomeService) {}

  ngOnInit(): void {
    this.HomeService.getProducts()
    .then(apiHome => this.objectProducts = apiHome)
    .catch((err) => {console.log(err)});
  }
}