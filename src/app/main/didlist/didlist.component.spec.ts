import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidlistComponent } from './didlist.component';

describe('DidlistComponent', () => {
  let component: DidlistComponent;
  let fixture: ComponentFixture<DidlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DidlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
