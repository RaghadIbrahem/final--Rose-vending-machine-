import { RoseVendingMachine } from "./Rose-vending-machin";

export enum RoseType {
    SUNFLOWER = 'SUNFLOWER',
    ROSE = 'ROSE',
    TULIP = 'TULIP',
    LAVENDER = 'LAVENDER',
    FLOWER='FLOWER'
  }
  
  export interface Rose {
    id:number;
    color: string;
    price: number;
    quantity: number;
    roseType: RoseType;
    rose_img_url:String;
    roseVendingMachine?: RoseVendingMachine;
  }