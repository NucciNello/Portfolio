function myFunction(x){
    if (x.matches){
        (function($) {

            var slide = function(ele,options) {
                var $ele = $(ele);
                var setting = {
                    speed: 1000,
                    interval: 2000,        
                };
        
                $.extend(true, setting, options);
        
                var states = [
                    { $zIndex: 3, width: 300, height: 500, top: 230, left: 20, $opacity: 0.4 },
                    { $zIndex: 4, width: 650, height: 930, top: 0, left: 260, $opacity: 1 },
                    { $zIndex: 3, width: 300, height: 500, top: 230, left: 860, $opacity: 0.4 },
                ];
        
                var $lis = $ele.find('li');
                var timer = null;
        
                $ele.find('.hi-next').on('click', function() {
                    next();
                });
                $ele.find('.hi-prev').on('click', function() {
                    states.push(states.shift());
                    move();
                });
                $ele.on('mouseenter', function() {
                    clearInterval(timer);
                    timer = null;
                }).on('mouseleave', function() {
                    autoPlay();
                });
        
                move();
                autoPlay();
        
        
                function move() {
                    $lis.each(function(index, element) {
                        var state = states[index];
                        $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                    });
                }
        
                function next() {
                    states.unshift(states.pop());
                    move();
                }
        
                function autoPlay() {
                    timer = setInterval(next, setting.interval);
                }
            }
            $.fn.hiSlide = function(options) {
                $(this).each(function(index, ele) {
                    slide(ele,options);
                });
                return this;
            }
        })(jQuery); 
    }
    else if(y.matches){
        var slideIndex = 1;
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("ab1");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "block";  
        }
        
        var myIndex = 0;
        carousel();
    
        function carousel() {
          var i;
          var x = document.getElementsByClassName("ab1");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 3000); // Change image every 3 seconds
          }
    }
}

var x = window.matchMedia("(min-width: 500px)")
var y = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)
y.addListener(showDivs)
