import { FtpSettingInterface } from 'interfaces/ftp-setting';
import { InvitationInterface } from 'interfaces/invitation';
import { MemberInterface } from 'interfaces/member';
import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  ftp_setting?: FtpSettingInterface[];
  invitation?: InvitationInterface[];
  member?: MemberInterface[];
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    ftp_setting?: number;
    invitation?: number;
    member?: number;
    task?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
