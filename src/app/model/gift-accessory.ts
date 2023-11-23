import { RoseVendingMachine } from "./Rose-vending-machin";
export enum GiftAccessoryType {
    PACKAGING_PAPER = 'PACKAGING_PAPER',
    RIBBON = 'RIBBON',
    GREETING_CARDS = 'GREETING_CARDS',
    CHOCOLATE='CHOCOLATE',
    BOX='BOX',
    ACCESSORY='ACCESSORY',
    BOOK='BOOK',
    CUP='CUP'
  }

export interface GiftAccessory {
    id?: number;
    color: string;
    price: number;
    quantity: number;
    size: string;
    giftAccessoryType: GiftAccessoryType;
    gift_img_url:String;
    roseVendingMachine?: RoseVendingMachine;
  }