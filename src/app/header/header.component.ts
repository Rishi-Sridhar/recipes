import { AuthService } from './../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  constructor(private store: DataStorageService, public auth: AuthService) { }

  onSave() {
    this.store.storeRecipes().subscribe(
      (response: Response) => { console.log(response); }
    );
    this.store.storeShoppingList().subscribe(
      (response: Response) => { console.log(response); }
    );
  }

  onFetch() {
    this.store.getRecipes();
    this.store.getShoppingList();
  }

  onLogout() {
    this.auth.logout();
  }
}
