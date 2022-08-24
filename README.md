# cashSuffixes TypeScript

### function ย่อค่าเงิน TypeScript และ JavaScript

**Function TypeScript [cashSuffixes.ts](TypeScript/cashSuffixes.ts)<br>
Function TypeScript [cashSuffixes.js](JavaScript/cashSuffixes.js)**

- สมมุต cashSuffixes(0) จะได้ผลลัพธ์ 0
- สมมุต cashSuffixes(10) จะได้ผลลัพธ์ 16
- สมมุต cashSuffixes(100) จะได้ผลลัพธ์ 195
- สมมุต cashSuffixes(1200) จะได้ผลลัพธ์ 1.2k
- สมมุต cashSuffixes(55000)  จะได้ผลลัพธ์ 55k
- สมมุต cashSuffixes(956243) จะได้ผลลัพธ์ 956.24k
- สมมุต cashSuffixes(1060715) จะได้ผลลัพธ์ 1.06M
- สมมุต cashSuffixes(5054098846) จะได้ผลลัพธ์ 5.05B

1,000^ = k

1,000,000^ = M

1,000,000,000^ = B

เพิ่มค่าเงินตรง types ได้เท่าไหร่ก็ได้ หรือจะเปลี่ยนก็ได้ เช่น
const types = ['', 'k', 'M', 'B', 'T', 'qd', 'Qn', 'sx', 'Sp', 'O', 'N'];


wiki fandom: [Cash Suffixes](https://minershaven.fandom.com/wiki/Cash_Suffixes)