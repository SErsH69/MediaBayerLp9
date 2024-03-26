import noUiSlider from 'nouislider';

const MainForm = class MainForm {
    constructor(){}
    nSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            var rangeSlider = document.getElementById('rangeSlider');
            var rangeSlider2 = document.getElementById('rangeSlider2');

            noUiSlider.create(rangeSlider, {
                start: [35000],
                step: 1000,
                range: {
                    'min': [1000],
                    'max': [50000]
                }
            });
            noUiSlider.create(rangeSlider2, {
                start: [8],
                range: {
                    'min': [1],
                    'max': [30]
                }
            });
        
            var rangeSliderValueElement = document.getElementById('slider-range-value');
            var rangeSliderValueElement2 = document.getElementById('slider-range-value2');
        
            rangeSlider.noUiSlider.on('update', function (values, handle) {
                var parsedValue = Math.round(parseFloat(values[handle]));
                var formattedValue = parsedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
                rangeSliderValueElement.innerHTML = formattedValue ;
            });
            rangeSlider2.noUiSlider.on('update', function (values, handle) {
                var parsedValue = parseFloat(values[handle]);
                var daysText = (parsedValue >= 1 && parsedValue <= 4) ? "дня" : "дней";
                var roundedValue = Math.round(parsedValue);
                rangeSliderValueElement2.innerHTML = (roundedValue == 1) ? roundedValue + " день" : roundedValue + " " + daysText;
            });
        });
    }
    init() {
        this.nSlider();
    }
}

export default MainForm;