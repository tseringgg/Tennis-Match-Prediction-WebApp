import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchLookupComponent } from './match-lookup.component';

describe('MatchLookupComponent', () => {
  let component: MatchLookupComponent;
  let fixture: ComponentFixture<MatchLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchLookupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
