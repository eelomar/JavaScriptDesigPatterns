var ViewModel=function(){
	this.ClickCount=ko.observable(0);
	this.name=ko.observable('feo');
	this.imgSrc=ko.observable('images/cat0.jpg');
	this.imgAttribution=ko.observable('pero que pollo');
	this.nickNames=ko.observableArray(['feito','patito','pelele']);

	this.incrementCounter=function(){
		this.ClickCount(this.ClickCount()+1);
	};

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
ko.applyBindings(new ViewModel());