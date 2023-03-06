import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakingBadModule } from './pages/breaking-bad/breaking-bad.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelaFipeModule } from './pages/tabela-fipe/tabela-fipe.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    DynamicTableComponent,
    SideMenuComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    BreakingBadModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    TabelaFipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [DynamicTableComponent]
})
export class AppModule { }
