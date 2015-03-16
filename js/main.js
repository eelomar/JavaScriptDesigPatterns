var totalCountRight=0;
var totalCountLeft=0;


var CatRightName='Cat in the Right';
var CatleftName='Cat in the Left';

var $RightName= $('#nameCat_right');
var $LeftName= $('#nameCat_left');

var $RightCounter= $('#counter_right');
var $LeftCounter= $('#counter_left');



$('#catimgrigh').click(function(e) {
  //the element has been clicked... do stuff here
  totalCountRight+=1;
 // console.log(totalCount);
 $RightCounter.text(totalCountRight);
 $RightName.text(CatRightName);
});
$('#catimgleft').click(function(e) {
  //the element has been clicked... do stuff here
  totalCountLeft+=1;
 // console.log(totalCount);
 $LeftCounter.text(totalCountLeft);
 $LeftName.text(CatleftName);
});

