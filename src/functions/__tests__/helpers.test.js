import { leftPad, rightPad } from '../helpers';

test('Number is left padded', () => {
    const padded = leftPad(1, 5);

    expect(padded).toEqual('00001');
});

test('Number is left padded with specifed value', () => {
    const padded = leftPad(1, 5, 1);

    expect(padded).toEqual('11111');
});

test('Number is right padded', () => {
    const padded = rightPad(1, 5);

    expect(padded).toEqual('10000');
});

test('Number is right padded with specifed value', () => {
    const padded = leftPad(1, 5, 1);

    expect(padded).toEqual('11111');
});
