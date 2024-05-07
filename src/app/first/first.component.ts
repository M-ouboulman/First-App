import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private router: Router) {}

  goToCasheFlush() {
    this.router.navigate(['/cashe-flush']);
  }

  onResolve() {
    this.router.navigate(['/query']);
  }
}
