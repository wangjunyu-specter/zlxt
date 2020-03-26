import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgtitleComponent } from './imgtitle/imgtitle.component';
import { RightButtonComponent } from './right-button/right-button.component';
import { ViewerComponent } from './viewer/viewer.component';



@NgModule({
  declarations: [
    ImgtitleComponent,
    RightButtonComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RightButtonComponent,
    ImgtitleComponent,
    ViewerComponent
  ],
})
export class SharedmoduleModule { }
