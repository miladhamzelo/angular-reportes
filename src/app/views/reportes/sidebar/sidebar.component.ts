import { Component, OnInit } from '@angular/core';
import {IListado} from '../../../models/listareportes.interface';
import {ReporteService} from '../../../services/reportes/reporte.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[ReporteService]
})
export class SidebarComponent implements OnInit {
  reporte:IListado[];
  constructor(private reporteService:ReporteService) {
  }
  ngOnInit() {

    this.reporteService.getListado().subscribe((data)=>{
      // console.log(data)
      this.reporte = data;
      console.log(this.reporte);
    })
  }

}
