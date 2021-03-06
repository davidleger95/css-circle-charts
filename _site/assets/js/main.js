/**************************************************
 *
 * Functions for CSS Circle Charts
 * AUTHOR   David Leger
 *          www.davidleger.me
 *
 **************************************************/

$(document).ready(function(){

    
});

(function(){
    var chart = $('.circle-chart');
    var data = null;
    var dataR = null;
    var dataROffset = null;
    var stroke = null;
    var circle = null;
    var pi = 3.1459;
    var piPC = pi*100 + "%";
    for(var i = 0; i < chart.length; i++){
        
        data = $(chart[i]).find('.chart-data').text();
        circle = $(chart[i]).find('circle.PC');
        dataR = data*pi*0.8;
        dataROffset = pi*100 - dataR;
        stroke = dataR + "%, " + dataROffset + "%";
        console.log(dataR);
        circle.css({'stroke-dasharray': stroke,
                    'stroke-dashoffset': piPC});
    }
    
    $('.msg').text(data);
    console.log(dataR + " " + dataROffset + " " + stroke);
    
})();