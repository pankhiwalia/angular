import {Injectable} from '@angular/core';
import {MOBPARTS} from './mocks';

@Injectable({
    providedIn: 'root'
})
export class MobPartsService {

    constructor() {
    }

    getMobParts() {
        return MOBPARTS;
    }
}