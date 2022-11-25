import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretDataComponent } from './secret-data.component';

describe('SecretDataComponent', () => {
  let component: SecretDataComponent;
  let fixture: ComponentFixture<SecretDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
