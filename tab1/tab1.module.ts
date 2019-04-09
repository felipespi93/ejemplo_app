import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page'; 
import { CirugiasComponent } from '../cirugias/cirugias.component';

@NgModule({
  imports: [
    IonicModule, 
    CommonModule,
    FormsModule,
    //RouterModule.forChild([{ path: '', component: Tab1Page }]),
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: 'cirugias', component: CirugiasComponent }
    ])
  ],
  declarations: [Tab1Page,CirugiasComponent]  
})


export class Tab1PageModule{}
