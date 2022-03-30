import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCliComponent } from './component-cli.component';

describe('ComponentCliComponent', () => {
  let component: ComponentCliComponent;
  let fixture: ComponentFixture<ComponentCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
