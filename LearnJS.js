function LearnJS(){

dataPath = './R/';
dataFile = 'euro.csv';
dataUrl  = dataPath + dataFile;

var width  = 1024;
var height = 768;

d3.csv("./table.csv", function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
		console.log(d.High);
		console.log(d.Low);
		console.log(d.Close);
	});
	var maxHigh = d3.max(data, function(d) { return d.High; });
	var ln = data.length;
	var ctrl  = d3.select("body").append("svg").attr("width", width).attr("height", height);
	
	var linesOpen = d3.line().
	x(function(d,i){ return i * (width/ln); }).  
	y(function(d){ return height - d.Open * (height/maxHigh); });

	var linesHigh = d3.line().
	x(function(d,i){ return i * (width/ln); }).  
	y(function(d){ return height - d.High * (height/maxHigh); });

	var linesLow = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height - d.Low * (height/maxHigh); });

	var linesClose = d3.line().
	x(function(d,i){ return i * (width/ln); }). 
	y(function(d){ return height - d.Close * (height/maxHigh); });

	ctrl.append("path").data([data]).
	attr("class", "pathline"). 
	attr("id", "pathlineOpen").
	attr("d", linesOpen);
	
	ctrl.append("path").data([data]).
	attr("class", "pathline"). 
	attr("id", "pathlineHigh").
	attr("d", linesHigh);

	ctrl.append("path").data([data]).
	attr("class", "pathline"). 
	attr("id", "pathlineLow").
	attr("d", linesLow);

	ctrl.append("path").data([data]).
	attr("class", "pathline").  
	attr("id", "pathlineClose").
	attr("d", linesClose);
});
}