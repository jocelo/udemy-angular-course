import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  // Not needed due implementation of routers 
  /*
  onSelect(url: string) {
    this.featureSelected.emit(url);
  }
  */

}
