import {MirrorDto} from '../mirror/mirror.dto';

export interface UserDto {
  id: string;
  name: string;
  email: string;
  email_verified_at: null;
  email_token: null;
  created_at: string;
  updated_at: string;
  mirror: Array<MirrorDto>;
}
