import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  titles: string[] = ['Junior .NET Developer', 'Backend Engineer', 'Aspiring Full-Stack Developer'];
  displayText: string = '';
  titleIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect(): void {
    const currentTitle = this.titles[this.titleIndex];

    if (this.isDeleting) {
      this.displayText = currentTitle.substring(0, this.charIndex--);
    } else {
      this.displayText = currentTitle.substring(0, this.charIndex++);
    }

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      this.isDeleting = true;
      setTimeout(() => this.startTypingEffect(), 1200); // Pause before deleting
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
    }

    setTimeout(() => this.startTypingEffect(), this.isDeleting ? 50 : 100);
  }
}
