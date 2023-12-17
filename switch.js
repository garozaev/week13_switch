 //Пример
/*let day = '';

switch(new Date().getDay()) {
  case 0:
    day = 'Воскресенье';
    break;
  case 1:
    day = 'Понедельник';
    break;
  case 2:
    day = 'Вторник';
    break;
  case 3:
    day = 'Среда';
    break;
  case 4:
    day = 'Четверг';
    break;
  case 5:
    day = 'Пятница';
    break;
  case 6:
    day = 'Суббота';
    break;
  default:
    day = 'Неизвестный день недели';
}

console.log('Сегодня ' + day.toLowerCase() + '.');*/ 

// Пример без break
let result = 'success';

switch (result) {
  case 'success':
    console.log('Успех!');
  case 'invalidCaptcha':
    console.log('Неверная капча!');
  default:
    console.log('Ошибка!');
}
//он же с break
let result1 = 'success';

switch (result1) {
  case 'success':
    console.log('Успех!');
    break;
  case 'invalidCaptcha':
    console.log('Неверная капча!');
    break;
  default:
    console.log('Ошибка!');
}
//когда условий ну очень много.(без использования логических операторов)
// Например, вы покупаете автомобиль на вторичном рынке и для вас важны условия:
// - пробег не больше 10 тысяч км.;
// - 1 или 2 владельца по ПТС;
// - не битая;
// - не дороже 500.000 тыс. рублей.
//  
function checkCar (distance, owner, jacked, cost) {
	if (distance <= 10000) { // проверяем пробег
		if (owner === 1) { // 1 владелец по ПТС?
			if (jacked === false) { // не битая?
				if (cost <= 5000000) { // а стоит сколько?
					return true; 
				} else return false;
			} else return false;
		}
		else if (owner === 2) { // Владелец не 1? Тогда может 2?
			if (jacked === false) { // не битая?
				if (cost <= 500000) { // стоит меньше пятисот тысяч?
					return true;
				} else return false;
			} else return false
		} else return false;
	} else return false;
}

checkCar(1000, 1, false, 100000); // true. Ура! Получилось!