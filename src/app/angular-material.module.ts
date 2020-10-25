import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule
          ],
  exports: [MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule
          ]
})

export class AngularMaterialModule{}
