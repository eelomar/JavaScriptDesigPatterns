var $NameCat= $('#nameCat');
var $CounterCat= $('#counterCat');
var $listCats=$('#catsList');
var $divImage=$('#image_loaded');

var catsNames=['cat1','cat2','cat3','cat4','cat5','cat6'];
var counterCat=[0,0,0,0,0,0];
var extensionFile='.jpg';




$('#image_loaded').click(function(e) {
  //the element has been clicked... do stuff here
  var name=$NameCat.text();
  console.log(name);
  var id=-1;
  for(var j=0;j<catsNames.length;j++){
  	if (name===catsNames[j]){
  		id=j;

  	}
  }
  counterCat[id]=counterCat[id]+1;
  $CounterCat.text(counterCat[id]);

});

//load all images



// Let's loop over the numbers in our array
for (var i = 0; i < catsNames.length; i++) {

    // This is the number we're on...
    var cat = catsNames[i];
    counterCat[i];
    // We're creating a DOM element for the number
    var elem = document.createElement('option');
    elem.textContent = cat;
   // elem.value(cat);
   var urlImage='images/'+cat+''+extensionFile;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(name,ima) {
    	return function() {
    		var id=-1;
    		for(var j=0;j<catsNames.length;j++){
    			if (name===catsNames[j]){
    				id=j;
    			}
    		}

    		$divImage.attr('src', ima);
    		$NameCat.text(name);

    		if(id==-1){    
    			$CounterCat.text('No counter found');
    		}else 
    			$CounterCat.text(counterCat[id]);

    };


})(cat,urlImage));

    $listCats.append(elem);

};

