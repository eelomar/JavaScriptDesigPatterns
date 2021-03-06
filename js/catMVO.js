
var model = {
    CatsObject:[],
    adminVisibility:false,
    init:function(){
        for (var i=0;i<6;i++){
            var cat={catName:"Cat"+i,
            catCounter:0,
            catImage:"images/cat"+i+".jpg"};

            model.CatsObject.push(cat);
        }
           // console.log(CatsObject);
       },
       getcat:function(cat){
        var id=model.getIdCat(cat);
        if (id==-1) return "Cat not Found";
        else return  model.CatsObject[id];
    },
    catIncremet:function(cat){
        var id=model.getIdCat(cat);
        model.CatsObject[id].catCounter+=1;
    },
    getIdCat:function(cat){
        var id=-1;
          //  console.log("name -->"+cat);
          for(var j=0;j< model.CatsObject.length;j++){
               // console.log(CatsObject[j].catName);
               if (cat=== model.CatsObject[j].catName){
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
        return model.CatsObject;
    },
    getCat:function(name){
        return model.getcat(name);
    },
    incrementCounter:function(cat){
        model.catIncremet(cat);
    },
    isVisble:function(){
        return model.adminVisibility;
    },
    SwapVisivility:function(){
        if (model.adminVisibility==true)
            model.adminVisibility=false;
        else model.adminVisibility=true;
    },
    newCat:function(name,counter,url){
        var Ncat={
            catName:name,
            catCounter:parseInt(counter),
            catImage:url
        };
        model.CatsObject.push(Ncat);
        view.renderList();
    },
    updateCat:function(oldName,name,counter,url){
        var Ncat={
            catName:name,
            catCounter:parseInt(counter),
            catImage:url
        };
var id=model.getIdCat(oldName);
console.log(id);
        model.CatsObject[id]=Ncat;
        console.log(model.CatsObject);
        view.renderList();

    }
};


var view = {
        $listCats:$('#catsList'),
        $NameCat: $('#nameCat'),
        $CounterCat: $('#counterCat'),
        $divImage:$('#image_loaded'),
         $adminView:$('#admin_view'),

    init:function(){
        
        view.renderList();
        view.initVisibi();
        //counter...
        $('#image_loaded').click(function(e) {
        //the element has been clicked... do stuff here
        var name=view.$NameCat.text();
        var cat=octopus.getCat(name);
        octopus.incrementCounter(name);
        view.$CounterCat.text(cat.catCounter);
        });
    },
    renderList:function(){
        var listOfCats=octopus.getAllcats();
        view.$listCats.attr('size',listOfCats.length);
        view.$listCats.find('option').remove().end()
        //console.log(listOfCats);

        for (var i=0;i<listOfCats.length;i++){
            var elem = document.createElement('option');
            elem.textContent = listOfCats[i].catName;
            elem.addEventListener('click', (function(name) {
               return function() {
                   var cat=octopus.getCat(name);
                   view.$divImage.attr('src', cat.catImage);
                   view.$NameCat.text(cat.catName);
                   view.$CounterCat.text(cat.catCounter);
                   //change cat hide
                   if (octopus.isVisble()) {
                    view.$adminView.hide();
                     octopus.SwapVisivility();}
                     
               };
           })(listOfCats[i].catName)); 
           view.$listCats.append(elem);
        }

            var cat=octopus.getCat("Cat0");
            view.$divImage.attr('src', cat.catImage);
            view.$NameCat.text(cat.catName);
            view.$CounterCat.text(cat.catCounter);
    },
    initVisibi:function(){
         var $adminButton=$('#admin_button');
         var $cancelButton=$('#cancel');
         var $saveButton=$('#save');
         var $NewCatname=$('#NewCatName');
         var $NewCatCounter=$('#NewCatCounter');
         var $newCatLocation=$('#NewCatSource');
            var oldName;
         view.$adminView.hide();
         //addmin button
        $adminButton.click(function() {
         if (!octopus.isVisble()){
            oldName=view.$NameCat.text();
         $NewCatname.val(view.$NameCat.text());
        $NewCatCounter.val(view.$CounterCat.text());
        $newCatLocation.val(view.$divImage.attr('src'));

            view.$adminView.show();}
         else view.$adminView.hide();
         octopus.SwapVisivility();});
//cancel button
        $cancelButton.click(function() {
        view.$adminView.hide();
        octopus.SwapVisivility();});
//save button
 $saveButton.click(function() {
        var name=$NewCatname.val();
        var counter=$NewCatCounter.val();
        var url=$newCatLocation.val();
        octopus.updateCat(oldName,name,counter,url);
        //octopus.newCat(name,counter,url);
        view.$adminView.hide();
        octopus.SwapVisivility();});
    }
};

octopus.init();
