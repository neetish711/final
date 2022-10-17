import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUpComponent } from './contact-up.component';

describe('ContactUpComponent', () => {
  let component: ContactUpComponent;
  let fixture: ComponentFixture<ContactUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
