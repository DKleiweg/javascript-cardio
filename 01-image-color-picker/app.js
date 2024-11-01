// Steps to take
// 1. Image upload
// 2. pick color button for selecting color based of picture
// 3. show selected color hex
// 4. show selected color rgb
// 5. show box with color
// 6. show message when hex code or rgb code is copied

const loadFile = event => {
    const image = document.getElementById('output');
    image.src= URL.createObjectURL(event.target.files[0])
}


const colorPicker= document.querySelector('#colorPicker');
let colorPickerHexValue    = document.querySelector('#colorPicker').value;
const selectedHexCodeShow = document.querySelector('#hexValue').innerHTML = colorPickerHexValue;

colorPicker.addEventListener('input', (event) => {
    const color = event.target.value; // This will be in hex format (e.g., #RRGGBB)
    const rgb = hexToRgb(color);
    rgbValue.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
});

function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');
    // Parse r, g, b values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

console.log(colorPickerHexValue);


