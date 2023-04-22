import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQrCodeComponent } from './show-qr-code.component';

describe('ShowQrCodeComponent', () => {
  let component: ShowQrCodeComponent;
  let fixture: ComponentFixture<ShowQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQrCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
