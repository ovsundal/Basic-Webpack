import small from '../assets/small.jpg';
import '../styles/image_viewer.css';


export default () => {
    const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);
}
// const image = document.createElement('img');
// image.src = small;




// const bigImage = document.createElement('img');
// bigImage.src = big;

// document.body.appendChild(bigImage);
