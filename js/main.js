var totalCount=0;
var counterEle= $('#counter');
$('.catimg').click(function(e) {
  //the element has been clicked... do stuff here
  totalCount+=1;
 // console.log(totalCount);
      counterEle.text(totalCount);

});
