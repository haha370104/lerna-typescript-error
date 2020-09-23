import {A} from './class';

export class B extends A {
    getA() {
        return {
            ...super.getA(),
            a: '123',
        };
    }
}
