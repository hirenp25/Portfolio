import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Mini Store',
      description: 'A web-based application for selling chocolates online with secure payments, cart management, and admin inventory control.',
      techStack: ['ASP.NET', 'C#', 'SQL'],
      github: '', // You can add link later
      demo: '',   // Optional: link to live project
    }
  ];
}
