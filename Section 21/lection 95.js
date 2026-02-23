//95. Статичні методи: Додай до класу MathHelper статичний метод square(n), який працює без створення об'єкта.

class MathHelper{
    static square(n) {
        return n * n;
    }
}
const result = MathHelper.square(4);
console.log(result);