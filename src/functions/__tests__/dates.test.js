import { date, dateTime } from '../dates';

test('ISO date is converted to string', () => {
    const formatted = date('2016-11-30T14:59:38Z');

    expect(formatted).toEqual('30/11/2016');
});

test('ISO datetime is converted to string', () => {
    const formatted = dateTime('2016-11-30T14:59:38Z');

    expect(formatted).toEqual('30/11/2016 at 14:59');
});

test('ISO datetime is converted to string with a separator', () => {
    const formatted = dateTime('2016-11-30T14:59:38Z', '$$');

    expect(formatted).toEqual('30/11/2016 $$ 14:59');
});
