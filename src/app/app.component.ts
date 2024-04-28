import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { PubpostComponent } from "./pubpost/pubpost.component";
import { AdminComponent } from "./admin/admin.component";
import { MenuLostPersonComponent } from "./menu-lost-person/menu-lost-person.component";
import { ModifyLostPersonComponent } from './modify-lost-person/modify-lost-person.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, RouterLink, HttpClientModule, PubpostComponent, AdminComponent, MenuLostPersonComponent,ModifyLostPersonComponent]
})
export class AppComponent {
  title = 'palestine-app-new';
}
