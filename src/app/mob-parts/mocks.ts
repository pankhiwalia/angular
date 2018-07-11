import {MobPartDataType} from './mob-parts';

export const MOBPARTS: MobPartDataType[] = [{
    id: 203,
    name: 'samsung',
    description: 'loreum v loreum lipsumloreum lipsumloreum lipsumloreum lipsumlipsum',
    stock: 2,
    price: 11555,
    inStockCSS: true, /*we need to conditionally pass the class if this proprrty is true*/
    image: '/assets/img/mob.jpg',
    disabled: false,
    qty: 12
},
    {
        id: 205, name: 'moto',
        description: 'loreum v loreum lipsumloreum lipsumloreum lipsumloreum lipsumlipsum',
        stock: 3,
        price: 15000,
        inStockCSS: true,
        image: '/assets/img/mob.jpg',
        disabled: false,
        qty: 0
    },
    {
        id: 208, name: 'oneplus',
        description: 'loreum v loreum lipsumloreum lipsumloreum lipsumloreum lipsumlipsum',
        stock: 0,
        price: 30000,
        inStockCSS: false,
        image: '/assets/img/mob1.jpg',
        disabled: true,
        qty: 0
    },
    {
        id: 204, name: 'moto',
        description: 'loreum v loreum lipsumloreum lipsumloreum lipsumloreum lipsumlipsum',
        stock: 3,
        price: 15000,
        inStockCSS: true,
        image: '/assets/img/mob.jpg',
        disabled: false,
        qty: 0
    },
    {
        id: 209, name: 'oneplus',
        description: 'loreum v loreum lipsumloreum lipsumloreum lipsumloreum lipsumlipsum',
        stock: 0,
        price: 30000,
        inStockCSS: false,
        image: '/assets/img/mob1.jpg',
        disabled: true,
        qty: 0
    }];
