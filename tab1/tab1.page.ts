import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']

})


export class Tab1Page{
  
  
campos: any[]; 

constructor( private route: ActivatedRoute,private router: Router){ 

this.campos = [

      {id: 1, nombre:'Hospital Clínico Universidad de Chile' , sigla: 'HCUCH' ,imgRef: 'https://campoclinico.med.uchile.cl/CAMPOS_CLINICOS/cclinicos/iconos/hcuch.jpg' },
      {id: 2, nombre:'Clínica Las Condes' , sigla: 'CLC' , imgRef: 'https://campoclinico.med.uchile.cl/CAMPOS_CLINICOS/cclinicos/iconos/clinica_las_condes.jpg' },
      {id: 3, nombre:'Hospital San Borja Arriarán' , sigla: 'HSBA' , imgRef: 'https://campoclinico.med.uchile.cl/CAMPOS_CLINICOS/cclinicos/iconos/hospital_san_borja.jpg' },
      {id: 4, nombre:'Hospital del Salvador' , sigla: 'HDS' , imgRef: 'https://campoclinico.med.uchile.cl/CAMPOS_CLINICOS/cclinicos/iconos/Hospital_del_Salvador.jpg' }
];

}

redirect() {
  this.router.navigate(['./cirugias'], { relativeTo: this.route });
}

}
