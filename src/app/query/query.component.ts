import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // Import to read query parameters

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
})
export class QueryComponent  {
  constructor (private router: Router) { }
  goToCasheFlush() {
    this.router.navigate(['/cashe-flush']);
  }
  }
