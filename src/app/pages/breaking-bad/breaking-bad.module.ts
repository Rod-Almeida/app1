import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadComponent } from './breaking-bad.component'
import { BreakingBadService } from './breaking-bad.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [BreakingBadComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    BreakingBadService
  ],
  exports: [
    BreakingBadComponent
  ]
})
export class BreakingBadModule { }
