import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListExpanseComponent } from './users-list-expanse.component';

describe('UsersListExpanseComponent', () => {
  let component: UsersListExpanseComponent;
  let fixture: ComponentFixture<UsersListExpanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListExpanseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersListExpanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
