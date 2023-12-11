import './style.css'
import { v4 as uuidv4} from 'uuid';



//helper function
const handleSubmit = (e) => {
  e.preventDefault();
  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const newPalette = Object.fromEntries(formData);

  newPalette.uuid = uuidv4();


  // console.log('here is your data:', newPalette);
  // do something with formObj data...

  form.reset();
}





//runner function
const main = () => {
const form = document.querySelector('#new-palette-form');
form.addEventListener('submit', handleSubmit )
};

main();






