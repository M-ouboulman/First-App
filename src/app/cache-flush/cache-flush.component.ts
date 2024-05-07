import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-cache-flush',
  standalone: true,
  imports: [],
  templateUrl: './cache-flush.component.html',
  styleUrls: ['./cache-flush.component.css']
})
export class CacheFlushComponent {
  constructor (private router: Router) { }
  goToCasheFlush() {
    this.router.navigate(['/cashe-flush']);
  }
}
