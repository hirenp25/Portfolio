import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'; // ✅ Import this
import { RouterOutlet } from '@angular/router'; // needed if you use <router-outlet>
import { FooterComponent } from './components/footer/footer.component'; // if footer is also standalone

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet], // ✅ Register imports here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
