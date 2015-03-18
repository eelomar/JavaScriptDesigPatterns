$(function(){
    var CatsObject=[];


    var model = {
        init:function(){
            for (var i=0;i<6;i++){
                var cat={catName:"Cat"+i,
                catCounter:0,
                catImage:"images/cat"+i+".jpg"};

                CatsObject.push(cat);
            }
           // console.log(CatsObject);
        },
        getcat:function(cat){
            var id=model.getIdCat(cat);
            if (id==-1) return "Cat not Found";
                else return CatsObject[id];
        },
        catIncremet:function(cat){
            var id=model.getIdCat(cat);
            CatsObject[id].catCounter+=1;
        },
        getIdCat:function(cat){
            var id=-1;
          //  console.log("name -->"+cat);
            for(var j=0;j<CatsObject.length;j++){
               // console.log(CatsObject[j].catName);
                if (cat===CatsObject[j].catName){
                    id=j;
                } 
            }  
            return id;
        }
    };


    var octopus = {
        init: function() {
            model.init();
            view.init();
        },
        getAllcats:function(){
            return CatsObject;
        },
        getCat:function(name){
            return model.getcat(name);
        },
        incrementCounter:function(cat){
            model.catIncremet(cat);
        }
    };


    var view = {
        init:function(){
            var $listCats=$('#catsList');
            var $NameCat= $('#nameCat');
            var $CounterCat= $('#counterCat');
            var $divImage=$('#image_loaded');

            var listOfCats=octopus.getAllcats();
            $listCats.attr('size',listOfCats.length);
            console.log(listOfCats);

            for (var i=0;i<listOfCats.length;i++){
                var elem = document.createElement('option');
                elem.textContent = listOfCats[i].catName;
                elem.addEventListener('click', (function(name) {
                     return function() {
                         var cat=octopus.getCat(name);
                         $divImage.attr('src', cat.catImage);
                         $NameCat.text(cat.catName);
                         $CounterCat.text(cat.catCounter);
                     };
                     })(listOfCats[i].catName)); 
                $listCats.append(elem);
            }

//counter...
$('#image_loaded').click(function(e) {
  //the element has been clicked... do stuff here
    var name=$NameCat.text();
    octopus.incrementCounter(name);
    var cat=octopus.getCat(name);
 
  $CounterCat.text(cat.catCounter);

});



        }


    };

octopus.init();
});