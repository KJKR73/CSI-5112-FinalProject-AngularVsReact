import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ScanButtonComponent } from './components/scan-button/scan-button.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';
import { HistoryComponent } from './components/history/history.component';

import { HttpClientModule } from '@angular/common/http';
import { ShowQrCodeComponent } from './components/show-qr-code/show-qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScanButtonComponent,
    ShowButtonComponent,
    HistoryComponent,
    ShowQrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
