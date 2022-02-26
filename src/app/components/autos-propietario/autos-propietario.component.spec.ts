import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosPropietarioComponent } from './autos-propietario.component';

describe('AutosPropietarioComponent', () => {
  let component: AutosPropietarioComponent;
  let fixture: ComponentFixture<AutosPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
