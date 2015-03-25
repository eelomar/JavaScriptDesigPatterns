var initialization=[{
	name:'cat feo',
	ClickCount:0,
	imgSrc:'images/cat0.jpg',
	imgAttribution:'pero que pollo',
	nickNames:['feito','patito','pelele']
},{
	name:'Pedro',
	ClickCount:0,
	imgSrc:'images/cat1.jpg',
	imgAttribution:'pero que pollo',
	nickNames:['peta','oulare','muy tecnico']
},{
	name:'mago',
	ClickCount:0,
	imgSrc:'images/cat2.jpg',
	imgAttribution:'pero que pollo',
	nickNames:['123','567','999999999']
}];


var Cat=function(data){
	this.ClickCount=ko.observable(data.ClickCount);
	this.name=ko.observable(data.name);
	this.imgSrc=ko.observable(data.imgSrc);
	this.imgAttribution=ko.observable(data.imgAttribution);
	this.nickNames=ko.observableArray(data.nickNames);	
	this.title=ko.computed(function(){
		var title;
		var clicks=this.ClickCount();
		if(clicks<10)
			title='NewBorn';
		else if (clicks<50)
			title='Infant';
		else if (clicks<100)
			title='Child';
		else if (clicks<200)
			title='Teen';
		else if (clicks<500)
			title='Adult';
		else title='Ninja';
		return title;
	},this);
};


var ViewModel=function(){
	var self=this;

	this.catList=ko.observableArray([]);
	initialization.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat=ko.observable(this.catList()[0]);

	this.incrementCounter=function(){
		self.currentCat().ClickCount(self.currentCat().ClickCount()+1);
	};

//	this.setCat=function(thisCat){
//		self.currentCat(thisCat);
//	}
};


ko.applyBindings(new ViewModel());