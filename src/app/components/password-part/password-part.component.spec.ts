import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPartComponent } from './password-part.component';

describe('PasswordPartComponent', () => {
  let component: PasswordPartComponent;
  let fixture: ComponentFixture<PasswordPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
