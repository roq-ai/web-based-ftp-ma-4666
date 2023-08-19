const mapping: Record<string, string> = {
  companies: 'company',
  'ftp-settings': 'ftp_setting',
  invitations: 'invitation',
  members: 'member',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
