import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHealthComponent } from './user-health.component';

describe('UserHealthComponent', () => {
  let component: UserHealthComponent;
  let fixture: ComponentFixture<UserHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
