'number' + 3 + 3 //произойдет конкатенация и ответ будет number33

null + 3 //null преобразует в число и ответ будет 3

5 && "qwerty" //тут И вернет последнее истинное значение строку 'qwerty'

+'40' + +'2' + "hillel"; //унарный плюс преобразует строку в число и после произойдет конкатенация, ответ 42hillel

'10' - 5 === 6; //тут js попытается преобразовать строку в число и отнять 5, после чего приравнять строгим равенством к 6, ответ false

true + false //преобразование булина в число даст ответ 1

'4px' - 3 //строка которую непреобразовать в число, ответ NaN

'4' - 3 // вычитание, ответ 1

'6' + 3 ** 0; //правоассоциативная операция возведение в степень даст ответ и сложение 7, ответ 7

12 / '6' //преобразование строки в число и деление, ответ 2

'10' + (5 === 6); //в скобках операция строго приравнивания с ответом false, после чего оба операнда строка 10 и false конкатенуются, ответ 10false

null == '' //сдесь приравнивание даст ответ false, тк null не преобразуется в 0 как пустая строка

3 ** (9 / 3); //опперация в скобках даст ответ три, а возведение в степень даст ответ 27

!!'false' == !!'true' //приравнивание двойных отрицаний обоих операндов даст ответ true

0 || '0' && 1 //до операции И не дойдет, потому ответ первое истинное значение строка 0

(+null == false) < 1;//унарный null=0, приравнивание даст true после чего ответ будет false тк 1 не меньше 1го

false && true || true//И даст ответ false, но ИЛИ даст первое истинное выражение true

false && (false || true);//в скобках ответ true, после чего И даст false

(+null == false) < 1 ** 5;//в скобках приравнивание унарного null даст true, после чего 1 в пятой степени даст 1, в итоге выражение 1<1 даст ответ false