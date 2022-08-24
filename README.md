# Cash Suffixes TypeScript

### **function ย่อค่าเงิน TypeScript และ JavaScript**
**Wiki :** [Cash Suffixes](https://minershaven.fandom.com/wiki/Cash_Suffixes)

**English Sub :** [README.eng.md](README.eng.md)

**Function cashSuffixes TypeScript [cashSuffixes.ts](TypeScript/cashSuffixes.ts)<br>
Function cashSuffixes JavaScript [cashSuffixes.js](JavaScript/cashSuffixes.js)**

- ถ้า cashSuffixes(0) จะได้ผลลัพธ์ 0
- ถ้า cashSuffixes(10) จะได้ผลลัพธ์ 16
- ถ้า cashSuffixes(100) จะได้ผลลัพธ์ 195
- ถ้า cashSuffixes(1200) จะได้ผลลัพธ์ 1.2k
- ถ้า cashSuffixes(55000)  จะได้ผลลัพธ์ 55k
- ถ้า cashSuffixes(956243) จะได้ผลลัพธ์ 956.24k
- ถ้า cashSuffixes(1060715) จะได้ผลลัพธ์ 1.06M
- ถ้า cashSuffixes(5054098846) จะได้ผลลัพธ์ 5.05B

**ตัวอย่างการใช้งาน :<br>**
1. ```js
   console.log(cashSuffixes(50000000000))
   //Output: 50B
   ```
2. ```js
   console.log(cashSuffixes(50060000000))
   //Output: 50.06B
   ```
3. ```js
   console.log(cashSuffixes(50500013502))
   //Output: 50.50B
   ```
4. ```js
   console.log(cashSuffixes(50500013502, 5))
   //Output: 50.50001B
   ```
5. ```js
   console.log(cashSuffixes(50500013502, 5))
   //Output: 50.50001B
   ```
6. ```js
   console.log(cashSuffixes(50568200000, 20))
   //Output: 50.5682B
   ```
7. ```js
   console.log(cashSuffixes(50568200001, 20))
   //Output: 50.568200001B
   ```
8. ```js
   console.log(cashSuffixes(505682000154654998400, 20))
   //Output: 505.682000154655undefined
   ```

เพิ่มคำต่อท้ายเงินสดได้ที่ตัวแปร `types` ได้เท่าไหร่ก็ได้เท่าที่ต้องการ<br>
**ตัวอย่าง :**<br>
```js
const types = ['', 'k', 'M', 'B', 'T', 'qd', 'Qn', 'sx', 'Sp', 'O', 'N'];
```

## Developer
- 👨‍💻 Developer : `wuw.sh (pain)`
- <img src="https://imgs.search.brave.com/dwDLTvAner6mjAuj64pg2I_hMBZQbC0corI8sX7hOlE/rs:fit:128:128:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/Mzg3X1hib3hfbG9n/by0xMjgucG5n" title="Xbox" alt="Xbox" width="23" height="23"/>&nbsp; Xbox : [`wuwShPain`](https://account.xbox.com/en-us/profile?gamertag=wuwShPain)

- <img src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n" title="Github" alt="Github" width="22" height="22"/>&nbsp; Github : [`wuw-sh`](https://github.com/wuw-sh)

- <img src="https://imgs.search.brave.com/Lh3Jd1lMq38Zi5xeGFs2Yt8nddBASMDyjCZpshserbw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL2Njb3ZlcnMv/MTU5MDQzMDY1MnJl/ZC15b3V0dWJlLWxv/Z28tcG5nLXhsLnBu/Zw" title="YouTube" alt="YouTube" width="21" height="14"/>&nbsp; YouTube : [`wuw-sh`](https://m.youtube.com/channel/UCT940bL6xp9HUJ0toiTkxrQ)

- <img src="https://imgs.search.brave.com/RcW5nBXfdSmfbQ0d-CmIjDc8cV9hl-l42NCNlJCm6os/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9zZ3Vy/dS5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDIvRmFj/ZWJvb2stUE5HLUlt/YWdlLTcxMjQ0LnBu/Zw" title="Facebook" alt="Facebook" width="19" height="19"/>&nbsp; Facebook : [`Wuw Sh Pain`](https://www.facebook.com/profile.php?id=100024781637005)

- <img src="https://imgs.search.brave.com/Ai3xC6YMdalbmk3y0u9t2ub2UxM4MCqVubuPmwPM1WE/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxR2JZdktGbFZM/LnBuZw" title="Omlet Arcade" alt="Omlet Arcade" width="20" height="20"/>&nbsp; Omlet Arcade : [`wuw.sh`](https://omlet.gg/profile/wuw.sh)