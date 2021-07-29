# LOGIC TASK

## RULE
- Dikerjakan menggunakan file javascript ( .js ) dan dikumpulkan ke repository github masing masing
- Dilarang menggunakan built in function apapun dari javasript , hanya diperbolehkan solve task ini menggunakan basic condition (if else, switch case), looping (for, while, do while) dan function basic ( .toUpperCase( ), .toLowerCase( ), toString( ), Number( ) )

> apa itu built in function ? 
--------------------------------------------------
## 1. Even character
- Buatlah sebuah fungsi yang dapat mengembalikan ( return ) kumpulan karakter di urutan genap.
- fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string 
### contoh test case
- "pratama" -> return "rtm"
- "hellohello" -> return "elhlo"
- "hello hello hello" -> return "el el el"
- "" -> return ""
- 123434 -> return "error input bukan string"

--------------------------------------------------
## 2. Count Word 
- Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah kata yang ada di dalam kalimat, 
- fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data number

### contoh test case
- "pratama" -> return 1
- "hellohello" -> return 1
- "hello hello hello" -> return 3
- "" -> return 0
- "hore yeay ahaaa" -> return 3
- 123434 -> return "error input bukan string"

--------------------------------------------------
## 3. Count Vowel And Consonant
- Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah huruf karakter vokal dan karakter konsonan ( huruf mati ), 
- fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string

### contoh test case
- "pratama" -> return "jumlah vokal : 3 , jumlah konsonan : 4"
- "hellohello" -> return "jumlah vokal : 4, jumlah konsonan : 6"
- "" -> return "jumlah vokal : 0 , jumlah konsonan 0"
- 123434 -> return "error input bukan string"

--------------------------------------------------
## 4. reverse word
- buatlah sebuah fungsi yang dapat membalikkan tipe data string.
- fungsi ini hanya dapat menerima tipe data string, dan mengembalikan hasil dengan tipe data string juga

### contoh test case
- "hello" -> return "olleh"
- "world!" -> return "!dlrow"
- "asikasikasik" -> return "kisakisakisa"
- "" -> return ""

--------------------------------------------------
## 5. palindrome
- Buatlah sebuah fungsi yang dapat mengecek apakah kata yang dimasukkan adalah palindrome atau tidak 
- fungsi ini hanya dapat menerima argument tipe data string dengan minimal 2 karakter, dan mengembalikan tipe data bool ( kembalikan true jika kata tersebut palindrome, kembalikan false jika kata tersebut tidak palindrome atau karakter yang dimasukkan kurang dari 2 karakter )
> apa itu palindrome -> https://id.wikipedia.org/wiki/Palindrom

### contoh test case
- "katak" -> return true
- "kasur" -> return false
- "h" -> return false
- "kasur rusak" -> return true
- "erererrerere" -> return true

--------------------------------------------------
## 6. Exchange coin
buatlah sebuah fungsi yang dapat mengecek pecahan dari input kumpulan coin, pecahan yang tersedia adalah 1000, 500, 200, 100, 50, 20, 10, 5, dan 1.
<br>
fungsi ini hanya menerima argumen berupa tipe data number dan mengembalikan tipe data string

<strong> Ilustrasi : </strong>
<br>
input 1752
<br>
return "1000, 500, 200, 50, 1, 1"

input 879 
<br>
return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"

### contoh test case
- 1752 -> return "1000, 500, 200, 50, 1, 1"
- 879 -> return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"
- 50 -> return "50"
- 0 -> return ""
- 5000 -> return "1000, 1000, 1000, 1000, 1000"


--------------------------------------------
## 7. Asteriks loop
buatlah sebuah fungsi yang dapat menampilkan jumlah asterik sesuai perulangan yang dimasukkan, seperti ilustrasi berikut :
```
input 2

*
**

input 4

*
**
***
****
```

fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log

### contoh test case
```
input 3

*
**
***

input 5

*
**
***
****
*****

input 0


input 10

*
**
***
****
*****
******
*******
********
*********
**********
```
--------------------------------------------
## 8. Pyramid loop
buatlah sebuah fungsi yang dapat menampilkan gambar segitiga pyramid dengan tinggi sesuai argumen yang dimasukkan, seperti ilustrasi berikut :

```
input 3
 
  *     | tinggi 3
 ***    |
*****   |

input 5

    *       | tinggi 5
   ***      |
  *****     |
 *******    |
*********   |
```

fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log

### contoh test case
```
input 3 :

  *  
 ***
*****

input 10 :

         *         
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
```


-----------------------------------------------------------------
## BONUS
## 8. sorting data
buatlah fungsi yang dapat mengurutkan data dari terkecil ke yang terbesar. 
<br>
fungsi ini hanya menerima satu argumen dengan tipe data string, kemudian mengembalikan hasilnya dengan tipe data string

### contoh test case
- "54223" -> return "22345"
- "10101010" -> return "00001111"
- "dddcccbbbaaa" -> return "aaabbbcccddd"
- "bubur" -> return "bbruu"
- "" -> return ""
