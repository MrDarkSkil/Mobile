export interface MirrorDto {
  id: string;
  name: string;
  ip: string;
  created_at: string;
  updated_at: string;
  modules: Array<ModuleDto>;
  link: LinkDto;
}

export interface ModuleDto {
  id: string;
  commit: string;
  version: string;
  changelog: string;
  module_id: string
  created_at: string;
  updated_at: string;
  link: ModuleLinkDto;
  module: ModuleInfosDto;
}

export interface ModuleLinkDto {
  link_id: string;
  module_id: string;
  id: string;
  settings: string;
}

export interface ModuleInfosDto {
  id: string;
  title: string;
  name: string;
  repository: string;
  description: string;
  publisher_id: string;
  created_at: string;
  updated_at: string;
}

export interface LinkDto {
  user_id: string;
  mirror_id: string;
}
