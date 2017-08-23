import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  constructor() { }

}
