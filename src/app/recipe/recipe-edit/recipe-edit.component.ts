import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  mode = '';
  paramsObs: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsObs = this.route.params.subscribe((params: Params)=>{
      this.id = +params.id;
      this.editMode = params['id'] != null;
      this.mode = this.editMode ? 'EDIT' : 'new!!';
    })
  }

  ngOnDestroy() {
    this.paramsObs.unsubscribe();
  }
}
