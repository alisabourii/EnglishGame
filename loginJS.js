$('.dl-button').on('click', e => {

        let btn = $(e.currentTarget),
            label = btn.find('.label'),
            counter = label.find('.counter');
    
        if(!btn.hasClass('active') && !btn.hasClass('done')) {
    
            btn.addClass('active');
    
            setLabel(label, label.find('.default'), label.find('.state'));
    
            setTimeout(() => {
                counter.addClass('hide');
                counter.animate({
                    width: 0
                }, 400, function() {
                    label.width(label.find('.state > span').width());
                    counter.removeAttr('style');
                });
                btn.removeClass('active').addClass('done');
            }, getComputedStyle(btn[0]).getPropertyValue('--duration'));
    
        }
    
        return false;
    
    });
    
    $('.restart').on('click', e => {
    
        let btn = $('.dl-button'),
            label = btn.find('.label'),
            counter = label.find('.counter');
    
        setLabel(label, label.find('.state'), label.find('.default'), function() {
            counter.removeClass('hide');
            btn.removeClass('done');
        });
    
        return false;
    
    });
    
    function setLabel(div, oldD, newD, callback) {
        oldD.addClass('hide');
        div.animate({
            width: newD.outerWidth()
        }, 200, function() {
            oldD.removeClass('show hide');
            newD.addClass('show');
            div.removeAttr('style');
            if(typeof callback === 'function') {
                callback();
            }
        });
    }


    //--------------------------------------------------------------------------------
    // init
var maxx = document.body.clientWidth;
var maxy = document.body.clientHeight;
var halfx = maxx / 2;
var halfy = maxy / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 200;
var dots = [];
// create dots
for (var i = 0; i < dotCount; i++) {
  dots.push(new dot());
}

// dots animation
function render() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, maxx, maxy);
  for (var i = 0; i < dotCount; i++) {
    dots[i].draw();
    dots[i].move();
  }
  requestAnimationFrame(render);
}

// dots class
// @constructor
function dot() {
  
  this.rad_x = 2 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 360 + 1;
  this.speed = Math.random() * 100 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 5 + 1;
  this.color = Math.floor(Math.random() * 256);
  
}

// drawing dot
dot.prototype.draw = function() {
  
  // calc polar coord to decart
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
  // set color
  context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";
  // draw dot
  context.fillRect(dx, dy, this.size, this.size);
  
};

// calc new position in polar coord
dot.prototype.move = function() {
  
  this.alpha += this.speed;
  // change color
  if (Math.random() * 100 < 50) {
    this.color += 1;
  } else {
    this.color -= 1;
  }
  
};

// start animation
render();