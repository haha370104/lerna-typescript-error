import {A, TestEnum} from './class';

const a = TestEnum.Test2;
console.log(TestEnum.Test2, a);
export {
    TestEnum
}

export class B extends A {
    getA() {
        return {
            ...super.getA(),
            a: '123',
        };
    }
}
