//навигация по DOM - элементам, data атрибуты, пруимущество for/of
"use strict";


//есть задача взять определенный элемент и обратиться к его родителю

//можно обратиться к самому верхнему (это html):
console.log(document.documentElement);

//получить все НОДЫ, которые есть у родителя(получим псевдомассив!!!!!)
console.log(document.body.childNodes); //вывод: NodeList(6) [text, div.wrapper, text, comment, text, script]

//получить 1го или последнего ребенка
console.log(document.body.firstChild);
console.log(document.body.lastChild);

//теперь от любого элемента отталкиваемся, а не от родителя
console.log(document.querySelector('#current').parentNode); // с # - это по id
//вывод: <div class="first">...</div>

//получение с появление в html5 data - атрибутов
//пример: <li data-current="3">3</li> current - любое слово, "3"-любая цифра
//как их получают: console.log(document.querySelector('[data-current="3"]'.nextSibling())); 
//еще есть метод previousSibling()

//чтобы не попадать на перенос строки, у этих команд есть аналоги(которые получ только элемент)
//nextSibling => nextElementSibling
//parentNode => parentElement
//firstChild => firstElementChild
//lastChild => lastElementChild

//у childNodes нету аналогов, но можно сделать самому реализацию
// for(let node of document.body.childNodes){
//     if(node.nodeName == '#text'){
//         continue;
//     }
//     console.log(node);
// }



