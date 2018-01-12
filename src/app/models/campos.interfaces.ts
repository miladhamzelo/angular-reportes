export interface IReportes {
  id: number;
  nombre: string;
  descripcion: string;
  campos: ICampos;
}

export interface ICampos {
  id: number;
  nombre: string;
  properties: ICamposProperties;
}

export interface ICamposProperties {
  id: number;
  nombre: string;
  clasecss: string;
  tipo: string;
  value: string;
}
