/*
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
for(var i=0; i<navMenuAnchorTags.length ;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(targetSectionID);
        var targetSection = document.getElementById(targetSectionID)

        var scrollInterval =setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}
 */


//-----------Another approch of smooth scroll-----------
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
var scrollInterval;
for(var i=0; i<navMenuAnchorTags.length ;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(targetSectionID);
        var targetSection = document.getElementById(targetSectionID)

        scrollInterval =setInterval(srcollVertically,20,targetSection,targetSectionID);
        event.stopPropagation();
    });
}
function srcollVertically(targetSection,targetSectionID){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    console.log(targetSectionCoordinates.top);
    
    if(targetSectionCoordinates.top<=0 || (targetSectionID==    'contact' && targetSectionCoordinates.top <200)){
        clearInterval(scrollInterval);
        return;
    }
    window.scrollBy(0,50);
}












//---------------moving skill bar -----------------

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer= document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth =0;
        let interval = setInterval(function(){
            if(currentWidth> targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },15);
    }
}
function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();
    console.log(coordinates.top, window.innerHeight);
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone= true;
        fillBars();
    }
    else if(coordinates.top > window.innerHeight) {
        animationDone= false;
        initialiseBars();
    }
}