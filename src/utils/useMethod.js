// Получение массива текущего месяца
export const arrDayMount = (countDay) => {
  const newArr = [];
  if (countDay !== undefined) {
    for (let i = 0; i < countDay; i++) {
      newArr.push(i + 1);
    }
    return newArr;
  }
};

//Получить массив первого ряда с днем недели
export const getArrayCombinedName = (arrayOne, arraySecond) => {
  if (
    arrayOne.length > 0 &&
    arrayOne !== undefined &&
    arraySecond.length > 0 &&
    arraySecond !== undefined
  ) {
    return arrayOne.map(function (item, index) {
      return {
        id: arraySecond[index].id,
        name: arraySecond[index].name + ", " + item,
        title: arraySecond[index].title,
        data: arraySecond[index].data,
        participants: arraySecond[index].participants,
        description: arraySecond[index].description,
        active: false,
      };
    });
  }
};

//Преобразовываем в массив объектов массив текущего месяца
export const customObj = (array, yearData, monthData) => {
  let obj = {
    id: "",
    name: "",
    title: "",
    data: "",
    participants: "",
    description: "",
    active: false,
  };
  let arrayObj = [];
  if (array !== undefined) {
    for (let i = 0; i < array.length; i++) {
      let day = array[i];
      let month = monthData + 1;
      if (String(monthData + 1).length === 1) {
        month = `0${monthData + 1}`;
      }
      if (String(array[i]).length === 1) {
        day = `0${array[i]}`;
        obj = {
          id: Math.floor(Math.random() * 1000000),
          name: array[i],
          title: "",
          data: `${yearData}-${month}-${day}`,
          participants: "",
          description: "",
          active: false,
        };
      } else {
        obj = {
          id: Math.floor(Math.random() * 1000000),
          name: array[i],
          title: "",
          data: `${yearData}-0${monthData + 1}-${day}`,
          participants: "",
          description: "",
          active: false,
        };
      }
      arrayObj.push(obj);
    }
    return arrayObj;
  }
};
