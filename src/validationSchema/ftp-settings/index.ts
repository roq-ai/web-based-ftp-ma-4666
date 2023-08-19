import * as yup from 'yup';

export const ftpSettingValidationSchema = yup.object().shape({
  host: yup.string().required(),
  port: yup.number().integer().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
