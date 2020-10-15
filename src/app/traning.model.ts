import { TraningType } from './traning-type.model';

export interface Traning {
    id: number;
    date: string;
    maxbooking: number;
    type: TraningType;
  }