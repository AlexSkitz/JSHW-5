// HW 1
//Дан объект с городами и странами.
//Написать функцию getCity.Эта функция(getCity) должна вернуть новый массив, 
//элементы которого будут преобразованы в данный формат: <Столица> - это <Страна>.
//Доступ к объекту может быть любым (через контекст, напрямую и т.д.)
//Можно использовать Object.entries метод )
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

let getCity = [];
for(const [key, value] of Object.entries(citiesAndCountries))
{
    getCity.push(`${key} - это ${value}`)
}

// HW 2
//Cоздать объект с названиями дней недели.
//Где ключами будут ru и en, a значением свойства ru будет массив 
//с названиями дней недели на русском, а en - на английском.

//После написать функцию которая будет выводить в консоль название дня 
//недели пользуясь выше созданным объектом(доступ к объекту можно 
//получить напрямую).

//Все дни недели начинаются с 1 и заканичаются цифрой 7(1 - понедельник, 7 - воскресенье).

//Функция принимает в аргументы 2 параметра:
//lang - название языка дня недели
//day - число дня недели
//Можно вспомнить про метод indexOf().А может можно и без него:)

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
let arrToUse = [];
function getNameOfDay(lang, datNumber) {
    if (lang == 'en'){
        arrToUse = namesOfDays.en;
    } else {
        arrToUse = namesOfDays.ru;
    };
    let result = arrToUse[datNumber - 1]
    return result; 
};

getNameOfDay('en', 3); 
getNameOfDay('ru', 5);


// HW 3
//Написать универсальную функцию setProto, которая принимает в 
//себя 2 аргумента(currentObj, protoObj).Функция должна устанавливать
// прототип(protoObj) для currentObj.То есть после вызова функции
// мы должны получить результат:

var person = {
    name: 'Vlad',
    sex: 'male' ,
};
var person1 = {
    age: 19
};

function setProto(currentObj, protoObj) {
    protoObj.__proto__ = currentObj;
    return protoObj;
}

setProto(person1, person);



// HW 4
//Создать базовый объек person.Этот объект должен выступать в роли 
//прототипа для объекта person1.
//В объекте person должны быть такие методы:
//метод для установки имени и возвраста(setName, setAge)
//метод для получения имени и возвраста(getName, getAge)
//метод для валидации возраста(ageValidation)
//Метод ageValidation вызывается при вывозе метода setAge(то есть
// внутри метода setAge).Метод ageValidation должен как - то проверить
// возраст, который мы вводим в setAge.Если возраст, который
// мы ввели, меньше 18, то записываем в age слово 'Validation Error', 
// а есть введенный возраст больше 18, то вписываем в age это значение.

//ageValidation только проверяет данные, он ничего не 
//записывает(в ageValidation не должно быть this.age = age)