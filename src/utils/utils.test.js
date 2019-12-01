import { getDate, addZero } from './date';
import serialize from './serialize-form';

it('UTILS: getDate', () => {
    const currentDate = new Date();
    expect(getDate()).toBe(`${addZero(currentDate.getDate())}/${addZero(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`);
});
it('UTILS: serialize form', () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.id = 'name';
    input.value = 'Nikolai';
    form.append(input);
    expect(serialize(form)).toEqual({
        name: 'Nikolai'
    });
});