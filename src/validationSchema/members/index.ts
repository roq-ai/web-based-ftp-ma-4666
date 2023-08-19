import * as yup from 'yup';

export const memberValidationSchema = yup.object().shape({
  role: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
