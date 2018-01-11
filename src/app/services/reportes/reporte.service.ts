import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IListado} from "../../models/listareportes.interface";

@Injectable()
export class ReporteService{
  urlListado : string = `http://131.0.0.3:8000/reports/list/`;

  constructor(private http: HttpClient) {
  }

  getListado(): Observable<IListado[]> {
    return this.http.get<IListado[]>(this.urlListado);
  }
}
