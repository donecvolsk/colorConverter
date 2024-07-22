import React, { useState } from 'react';

export function InputHex() {
    const [colorDefolt, setColor] = useState('Значение rgb');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
        if (event.target.value.length < 7) {//ожидание ввода 7 сиволов
            return;
          }
        let resultHex: string = event.target.value;//получаем строку из поля инпут
        //преобразуем строку из инпут в массив согласно регулярному выражению
        resultHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(resultHex);
        if (resultHex === 'null') {
            setColor('Ошибка!');
            return;
          }
        //преобразуем шестнадцатиричные значения в десятичные
        let resultRgb = `rgb(${parseInt(resultHex[1], 16)}, ${parseInt(resultHex[2], 16)}, ${parseInt(resultHex[3], 16)})`;
        //console.log(resultRgb);
        setColor(resultRgb);//передаем в новое состояние        
    }
    return (
        <div className='fonWindow' style={{ backgroundColor: colorDefolt }}>
            <input placeholder="#ff0000" onChange={handleChange}></input>
            <div className='resultRGB'>{colorDefolt}</div>
        </div>
    )
}