import axios from 'axios';
import queryString from 'query-string';
import { FtpSettingInterface, FtpSettingGetQueryInterface } from 'interfaces/ftp-setting';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFtpSettings = async (
  query?: FtpSettingGetQueryInterface,
): Promise<PaginatedInterface<FtpSettingInterface>> => {
  const response = await axios.get('/api/ftp-settings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFtpSetting = async (ftpSetting: FtpSettingInterface) => {
  const response = await axios.post('/api/ftp-settings', ftpSetting);
  return response.data;
};

export const updateFtpSettingById = async (id: string, ftpSetting: FtpSettingInterface) => {
  const response = await axios.put(`/api/ftp-settings/${id}`, ftpSetting);
  return response.data;
};

export const getFtpSettingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ftp-settings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFtpSettingById = async (id: string) => {
  const response = await axios.delete(`/api/ftp-settings/${id}`);
  return response.data;
};
