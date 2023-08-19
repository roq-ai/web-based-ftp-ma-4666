import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FtpSettingInterface {
  id?: string;
  host: string;
  port: number;
  username: string;
  password: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface FtpSettingGetQueryInterface extends GetQueryInterface {
  id?: string;
  host?: string;
  username?: string;
  password?: string;
  company_id?: string;
}
