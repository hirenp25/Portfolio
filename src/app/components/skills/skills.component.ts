import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  frontend = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular (Learning)'];
  backend = ['C#','ASP.NET'];
  database = ['SSMS', 'PostgreSQL'];
  tools = ['Git'];
}
