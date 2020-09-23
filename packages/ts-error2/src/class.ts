export const enum TestEnum {
    Test1 = '123123',
    Test2 = '12312312312',
}

export interface ITest {
    [TestEnum.Test1]: string;
    [TestEnum.Test2]: string;
}

export class A {
    getA(): ITest {
        return {
            [TestEnum.Test1]: '123',
            [TestEnum.Test2]: '123',
        };
    }
}
