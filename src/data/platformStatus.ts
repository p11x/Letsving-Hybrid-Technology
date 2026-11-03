export type StatusState = 'operational' | 'degraded' | 'down';

export interface PlatformStatusItem {
  label: string;
  status: StatusState;
}

export const platformStatusList: PlatformStatusItem[] = [
  { label: 'API GATEWAY', status: 'operational' },
  { label: 'DATABASE CLUSTER', status: 'operational' },
  { label: 'CLOUD INFRASTRUCTURE', status: 'operational' },
  { label: 'CLIENT PORTAL', status: 'operational' },
  { label: 'SECURITY LAYER', status: 'operational' },
];
