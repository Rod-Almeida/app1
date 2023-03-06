import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaFipeComponent } from './tabela-fipe.component';
import { AppModule } from "../../app.module";



@NgModule({
    declarations: [
        TabelaFipeComponent
    ],
    exports: [
        TabelaFipeComponent
    ],
    imports: [
        CommonModule,
        AppModule
    ]
})
export class TabelaFipeModule { }
