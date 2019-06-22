// Upload image 
var fileTag = document.getElementById("filetag");
var preview = document.getElementById("preview");
var mycanvas = document.getElementById("mycanvas");


fileTag.addEventListener("change", function() {
    changeImage(this);
});

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function(e) {
            preview.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
        mycanvas.classList.remove('none-upload');
    }
}

// END - upload image


// Download image
var mycanvas = document.getElementById("mycanvas");
window.exportAsImage = function() {
    var target = document.getElementById("mycanvas");
    html2canvas(target, {
        onrendered: function(canvas) {
            var imgageData = canvas.toDataURL("image/png");
            var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
            var link = document.createElement("a");
            link.style.display = "none";
            link.setAttribute("download", "myImage.png");
            link.setAttribute("href", newData);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    });
}

// END - Download image


// Color Picker

// END - Color Picker

// Padding slider

var slider = document.getElementById("horizontal-padding");
var mycanvas = document.getElementById("mycanvas");
mycanvas.style.padding = "50px";

slider.addEventListener('change', function() {
    mycanvas.style.padding = slider.value + "px";
});

// END -  padding slider


// Header switcher
    var switchHead = document.getElementById("customSwitches");
    
    var svg = document.getElementById('svg');


    switchHead.addEventListener('change', function() {
        if (this.checked == true) {
          // do this
          svg.style.display = 'none';
          preview.style.borderTopLeftRadius = '8px';
          preview.style.borderTopRigthRadius = '8px';

        } else {
          // do that
          svg.style.display = 'inline';
          preview.style.borderTopLeftRadius = '0px';
          preview.style.borderTopRigthRadius = '0px';
        }
      });
 

  // END - Header switcher

  // Dark Header switcher
  var switcDark = document.getElementById("switcherDark");
    
  var svg = document.getElementById('svg');


  switcDark.addEventListener('change', function() {
      if (this.checked == true) {
        // do this
        svg.style.background = '#3c3a22';
      } else {
        // do that
        svg.style.background = '#e8e8e8';
      }
    });

    // Simple example, see optional options for more configuration.


// END - Dark Header switcher

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('init', instance => {
    console.log('init', instance);
}).on('save', (color, instance) => {
    console.log('save', color, instance);
}).on('change', (color, instance) => {
    console.log('change', color, instance);
}).on('swatchselect', (color, instance) => {
    console.log('swatchselect', color, instance);
});