import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city = 'Rennes,fr'

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.city = params.city;
    });
  }

  ngOnInit() {
  }

}
