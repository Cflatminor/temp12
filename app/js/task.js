console.log(`hi`);
/*
В объекте есть свойство className, которое содержит список «классов» – слов,
разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
P.S. Ваша функция не должна добавлять лишних пробелов.
*/

var obj = {
  className: 'open menu'
}

function addClass (obj, cls) {
  console.log(obj.className);
};

addClass(obj, 'new');


/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string»
в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/
