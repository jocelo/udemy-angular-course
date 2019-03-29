import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-main',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  loadedFeature: string = 'recipe';

  constructor() { }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
