export function getDate(date) {
    const currentDate = date || new Date();
    return `${addZero(currentDate.getDate())}/${addZero(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`;
}
export function addZero(num) {
    return `0${num}`.slice(-2);
}