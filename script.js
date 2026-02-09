function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const result = document.getElementById('result');
    
    result.style.backgroundColor = mix(color1, color2);
}

function mix(color1, color2) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    
    const mixedColor = `rgb(${Math.floor((c1.r + c2.r) / 2)}, ${Math.floor((c1.g + c2.g) / 2)}, ${Math.floor((c1.b + c2.b) / 2)})`;
    return mixedColor;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return { r, g, b };
}