import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
declare var html2pdf: any;


@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent {
  resumeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      name: ['Hiren Pankhaniya'],
      title: ['Junior .NET Developer'],
      summary: ['Highly motivated .NET developer with skills in C#, ASP.NET, and SQL.'],
      skills: ['HTML, CSS, JS, TS, Angular, C#, SSMS, PostgreSQL, Git']
    });
  }

  downloadResume() {
  const resume = document.getElementById('resume-preview');
  if (resume) {
    html2pdf().from(resume).save('Hiren_Resume.pdf');
  }
}


}
