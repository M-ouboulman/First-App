import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheFlushComponent } from './cache-flush.component';

describe('CacheFlushComponent', () => {
  let component: CacheFlushComponent;
  let fixture: ComponentFixture<CacheFlushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheFlushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CacheFlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
