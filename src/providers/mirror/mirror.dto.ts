export interface MirrorDto {
  id: string;
  name: string;
  ip: string;
  created_at: string;
  updated_at: string;
  pivot: PivotDto;
}

export interface PivotDto {
  user_id: string;
  mirror_id: string;
}
