//1. Запитати ім’я користувача та вивести у відповідь “Привіт, *ім’я*”;
var yourName = prompt("Назовите своё имя", "");
{
  alert("Привет " + yourName + " !");
}

//2. Запитати довжину сторони квадрату і вивести периметр цього квадрата
//const sideSquare = +prompt("Введіть довжину сторони квадрата", "");
//console.log(sideSquare * 4);
//{alert("Периметр квадрата " + sideSquare * 4)}

//или так
//if (!isNaN(sideSquare));
//{ alert("Периметр квадрата " + sideSquare * 4) }

//3. Запитати радіус кола і вивеcти площу такої окружності
//const circleradius = +prompt("Введіть радіус кола", "");
//console.log(circleradius ** 2 * Math.PI.toPrecision(3));
//{alert("Площа окружності " + circleradius ** 2 * Math.PI.toPrecision(3))}

//или так
//if (!isNaN(circleradius));
//{ alert("Площа окружності " + circleradius ** 2 * Math.PI.toPrecision(3)) }

//4. Запитати відстань в кілометрах між двома містами і за скільки годин він хоче дістатися
//const distance = +prompt("Введіть відстань в кілометрах між двома містами", "");
//const time = +prompt("Введіть за скільки годин ви хочете дістатися до міста", "");
//console.log(distance / time);
//{alert("Швидкість, з якою необхідно рухатися становить " + distance / time + " км/ч")}

//или так
//if (!isNaN(distance) && !isNaN(time))
//{alert("Швидкість, з якою необхідно рухатися становить " + distance / time + " км/ч")}

//5. Запитати рік народження користувача, порахувати його і вивести результат. Поточний рік вказати в коді як константу
//const birthYear = +prompt("Який ваш рік народження", "");
//const currentYear = 2022;
//console.log(currentYear - birthYear);
//{alert("На данний час вам " + (currentYear - birthYear) + " років")}

//или так
//if (!isNaN(currentYear) && !isNaN(birthYear))
//{alert("На данний час вам " + (currentYear - birthYear) + " років")}

//6. Реалізувати конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
//const dollars = +prompt("Введіть необхідну суму в долларах", "");
//const evro = 0.927;
//console.log(dollars * evro);
//{alert("Сума в євро становить " + dollars * evro)}

//или так
//if (!isNaN(dollars) && !isNaN(evro));
//{alert("Сума в євро становить " + dollars * evro)}
