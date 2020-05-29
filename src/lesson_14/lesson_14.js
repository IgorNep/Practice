import './lesson_14.scss';
import { dropDown } from './scrypts/dropdown';
import { Game } from './scrypts/game';

dropDown(
    document.querySelector('#dropDownCountries'),
    ['USA', 'Canada', 'Kongo']
);
dropDown(
    document.querySelector('#otherDropDown'),
    ['USD', 'CAD', 'EUR', 'UHR', 'GBP']
);

const game = new Game();

// document.addEventListener('keydown', (e) => {
//     console.log(e.code);
// })