import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCaseComponent } from './type-case.component';

describe('TypeCaseComponent', () => {
  let component: TypeCaseComponent;
  let fixture: ComponentFixture<TypeCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
