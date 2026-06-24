export type OfficeType =
  | 'vergi_dairesi'
  | 'defterdarlik'
  | 'malmudurlugu'
  | 'sube'
  | 'other';

export interface TaxOffice {
  province: string;
  district: string | null;
  office_name: string;
  office_type: OfficeType;
  office_code: string | null;
}

export interface TaxOfficesDataset {
  metadata: {
    source: string;
    url: string;
    generated_at: string;
    version: string;
    total: number;
  };
  data: TaxOffice[];
}

declare const dataset: TaxOfficesDataset;
export = dataset;
