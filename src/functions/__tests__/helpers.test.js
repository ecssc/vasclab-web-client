import { leftPad, rightPad } from '../helpers';

test('Number is left padded', () => {
    const padded = leftPad(1, 5);

    expect(padded).toEqual('00001');
});

test('Number is left padded with specifed value', () => {
    const padded = leftPad(1, 5, 2);

    expect(padded).toEqual('22221');
});

test('Number is not left padded if same length as padding', () => {
    const padded = leftPad(11, 2);

    expect(padded).toEqual('11');
});

test('Number is right padded', () => {
    const padded = rightPad(1, 5);

    expect(padded).toEqual('10000');
});

test('Number is right padded with specifed value', () => {
    const padded = rightPad(1, 5, 2);

    expect(padded).toEqual('12222');
});

test('Number is not right padded if same length as padding', () => {
    const padded = rightPad(11, 2);

    expect(padded).toEqual('11');
});
