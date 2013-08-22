(function(smalltalk,nil,_st){
smalltalk.addPackage('GoogleChartsExamples');

smalltalk.addClass('AreaChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AreaChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("AreaChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AreaChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.AreaChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.AreaChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.AreaChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance"),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Year"),"titleTextStyle".__minus_gt(smalltalk.HashedCollection._from_(["color".__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.AreaChartExample)})},
messageSends: ["->"]}),
smalltalk.AreaChartExample);



smalltalk.addClass('BarChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.BarChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("BarChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.BarChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.BarChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.BarChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.BarChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance"),"vAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Year"),"titleTextStyle".__minus_gt(smalltalk.HashedCollection._from_(["color".__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.BarChartExample)})},
messageSends: ["->"]}),
smalltalk.BarChartExample);



smalltalk.addClass('CandlestickChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.CandlestickChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("CandlestickChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CandlestickChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.CandlestickChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_firstRowAsData_([["Mon",(20),(28),(38),(45)],["Tue",(31),(38),(55),(66)],["Wed",(50),(55),(77),(80)],["Thu",(77),(77),(66),(50)],["Fri",(68),(66),(22),(15)]],true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.CandlestickChartExample)})},
messageSends: ["arrayToDataTable:firstRowAsData:"]}),
smalltalk.CandlestickChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["legend".__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.CandlestickChartExample)})},
messageSends: ["->"]}),
smalltalk.CandlestickChartExample);



smalltalk.addClass('ChartButton', smalltalk.Widget, ['element', 'clickBlock', 'text'], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
var button;
return smalltalk.withContext(function($ctx1) { 
button=_st("#".__comma(self._element()))._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activate",{button:button},smalltalk.ChartButton)})},
messageSends: ["asJQuery", ",", "element", "click:", "value", "clickBlock"]}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "clickBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@clickBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clickBlock",{},smalltalk.ChartButton)})},
messageSends: []}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "clickBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@clickBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"clickBlock:",{aBlock:aBlock},smalltalk.ChartButton)})},
messageSends: []}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ChartButton)})},
messageSends: []}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{aString:aString},smalltalk.ChartButton)})},
messageSends: []}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_(self._text());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ChartButton)})},
messageSends: ["with:", "text", "button", "onClick:", "value", "clickBlock"]}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@text"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ChartButton)})},
messageSends: ["ifNil:"]}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.ChartButton)})},
messageSends: []}),
smalltalk.ChartButton);


smalltalk.addMethod(
smalltalk.method({
selector: "element:clickBlock:",
fn: function (element,clickBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._element_(element);
_st($2)._clickBlock_(clickBlock);
_st($2)._activate();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{element:element,clickBlock:clickBlock},smalltalk.ChartButton.klass)})},
messageSends: ["element:", "new", "clickBlock:", "activate", "yourself"]}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpChart:atDom:",
fn: function (chart,element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._element_clickBlock_(element,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(chart)._drawChart();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element},smalltalk.ChartButton.klass)})},
messageSends: ["element:clickBlock:", "drawChart"]}),
smalltalk.ChartButton.klass);


smalltalk.addClass('ColumnChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ColumnChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("ColumnChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ColumnChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.ColumnChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.ColumnChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.ColumnChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance"),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Year"),"titleTextStyle".__minus_gt(smalltalk.HashedCollection._from_(["color".__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.ColumnChartExample)})},
messageSends: ["->"]}),
smalltalk.ColumnChartExample);



smalltalk.addClass('ComboChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ComboChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("ComboChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ComboChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.ComboChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",(165),(938),(522),(998),(450),(614.6)],["2005/06",(135),(1120),(599),(1268),(288),(682)],["2006/07",(157),(1167),(587),(807),(397),(623)],["2007/08",(139),(1110),(615),(968),(215),(609.4)],["2008/09",(136),(691),(629),(1026),(366),(569.6)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.ComboChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.ComboChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Monthly Coffee Production by Country"),"vAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Cups")])),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Month")])),"seriesType".__minus_gt("bars"),"series".__minus_gt(smalltalk.HashedCollection._from_([(5).__minus_gt(smalltalk.HashedCollection._from_(["type".__minus_gt("line")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.ComboChartExample)})},
messageSends: ["->"]}),
smalltalk.ComboChartExample);



smalltalk.addClass('ControlChartApp', smalltalk.ChartApp, ['testChart', 'wrapper'], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ControlChartApp.superclass.fn.prototype._begin.apply(_st(self), []);
self._appendToJQuery_("body"._asJQuery());
self._buildTestWrapperChart_(self._testChart());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.ControlChartApp)})},
messageSends: ["begin", "appendToJQuery:", "asJQuery", "buildTestWrapperChart:", "testChart"]}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "buildTestWrapperChart:",
fn: function (id){
var self=this;
function $GCChartWrapper(){return smalltalk.GCChartWrapper||(typeof GCChartWrapper=="undefined"?nil:GCChartWrapper)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._wrapper_(_st(_st($GCChartWrapper())._options_(smalltalk.HashedCollection._from_(["chartType".__minus_gt("ColumnChart"),"dataTable".__minus_gt([["Germany","USA","Brazil","Canada","France","RU"],[(700),(300),(400),(500),(600),(800)]]),"options".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Countries")])),"containerId".__minus_gt(id)])))._draw());
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"buildTestWrapperChart:",{id:id},smalltalk.ControlChartApp)})},
messageSends: ["wrapper:", "draw", "options:", "->", "yourself"]}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("Control Chart App");
self._renderBrowserButtonOn_(html);
_st(_st(html)._div())._id_(self._testChart());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ControlChartApp)})},
messageSends: ["h1:", "renderBrowserButtonOn:", "id:", "testChart", "div"]}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "testChart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@testChart"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@testChart"]=self._nextId();
$1=self["@testChart"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"testChart",{},smalltalk.ControlChartApp)})},
messageSends: ["ifNil:", "nextId"]}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{},smalltalk.ControlChartApp)})},
messageSends: []}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"wrapper:",{anObject:anObject},smalltalk.ControlChartApp)})},
messageSends: []}),
smalltalk.ControlChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.ControlChartApp.klass.superclass.fn.prototype._neededVisualizationPackages.apply(_st(self), []))._addAll_(["controls"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.ControlChartApp.klass)})},
messageSends: ["addAll:", "neededVisualizationPackages"]}),
smalltalk.ControlChartApp.klass);


smalltalk.addClass('GaugeChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.GaugeChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("Gauge");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GaugeChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.GaugeChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["width".__minus_gt((400)),"heigth".__minus_gt((120)),"redFrom".__minus_gt((90)),"redTo".__minus_gt((100)),"yellowFrom".__minus_gt((75)),"yellowTo".__minus_gt((90)),"minorTicks".__minus_gt((5))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.GaugeChartExample)})},
messageSends: ["->"]}),
smalltalk.GaugeChartExample);



smalltalk.addClass('GeoChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.GeoChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("GeoChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GeoChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.GeoChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["region".__minus_gt("IT"),"displayMode".__minus_gt("markers"),"colorAxis".__minus_gt(smalltalk.HashedCollection._from_(["colors".__minus_gt(["green","blue"])]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.GeoChartExample)})},
messageSends: ["->"]}),
smalltalk.GeoChartExample);



smalltalk.addClass('IndexChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var pie,id;
function $PieChartExample(){return smalltalk.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self._appendToJQuery_("body"._asJQuery());
id=self._nextId();
pie=_st(_st($PieChartExample())._new())._chartId_(id);
_st(pie)._appendToJQuery_("body"._asJQuery());
$1=_st("#".__comma(id))._asJQuery();
_st($1)._width_((800));
$2=_st($1)._height_((500));
_st(pie)._drawChart();
$3=smalltalk.IndexChartApp.superclass.fn.prototype._begin.apply(_st(self), []);
return $3;
}, function($ctx1) {$ctx1.fill(self,"begin",{pie:pie,id:id},smalltalk.IndexChartApp)})},
messageSends: ["appendToJQuery:", "asJQuery", "chartId:", "nextId", "new", "width:", ",", "height:", "drawChart", "begin"]}),
smalltalk.IndexChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Google Charts");
self._renderBrowserButtonOn_(html);
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderLink_content_on_("popcharts.html","Try the Pop Charts!",html);
return _st(html)._with_(" example.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.IndexChartApp)})},
messageSends: ["with:", "h1", "renderBrowserButtonOn:", "renderLink:content:on:", "div"]}),
smalltalk.IndexChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["corechart"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.IndexChartApp.klass)})},
messageSends: []}),
smalltalk.IndexChartApp.klass);


smalltalk.addClass('LineChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.LineChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("LineChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.LineChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.LineChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.LineChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.LineChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.LineChartExample)})},
messageSends: ["->"]}),
smalltalk.LineChartExample);



smalltalk.addClass('PieChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.PieChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("PieChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PieChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.PieChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.PieChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.PieChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("My Daily Activities")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.PieChartExample)})},
messageSends: ["->"]}),
smalltalk.PieChartExample);



smalltalk.addClass('PopupChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "addButton:forChart:",
fn: function (text,chartClass){
var self=this;
var id,chart;
function $ChartButton(){return smalltalk.ChartButton||(typeof ChartButton=="undefined"?nil:ChartButton)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
id=self._nextId();
chart=_st(chartClass)._chartId_(id);
$1=_st($ChartButton())._popUpChart_atDom_(chart,id);
_st($1)._text_(text);
$2=_st($1)._appendToJQuery_("body"._asJQuery());
_st(chart)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"addButton:forChart:",{text:text,chartClass:chartClass,id:id,chart:chart},smalltalk.PopupChartApp)})},
messageSends: ["nextId", "text:", "popUpChart:atDom:", "chartId:", "appendToJQuery:", "asJQuery"]}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
function $PieChartExample(){return smalltalk.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
function $ScatterChartExample(){return smalltalk.ScatterChartExample||(typeof ScatterChartExample=="undefined"?nil:ScatterChartExample)}
function $GaugeChartExample(){return smalltalk.GaugeChartExample||(typeof GaugeChartExample=="undefined"?nil:GaugeChartExample)}
function $GeoChartExample(){return smalltalk.GeoChartExample||(typeof GeoChartExample=="undefined"?nil:GeoChartExample)}
function $TableChartExample(){return smalltalk.TableChartExample||(typeof TableChartExample=="undefined"?nil:TableChartExample)}
function $TreeMapChartExample(){return smalltalk.TreeMapChartExample||(typeof TreeMapChartExample=="undefined"?nil:TreeMapChartExample)}
function $ComboChartExample(){return smalltalk.ComboChartExample||(typeof ComboChartExample=="undefined"?nil:ComboChartExample)}
function $LineChartExample(){return smalltalk.LineChartExample||(typeof LineChartExample=="undefined"?nil:LineChartExample)}
function $BarChartExample(){return smalltalk.BarChartExample||(typeof BarChartExample=="undefined"?nil:BarChartExample)}
function $ColumnChartExample(){return smalltalk.ColumnChartExample||(typeof ColumnChartExample=="undefined"?nil:ColumnChartExample)}
function $AreaChartExample(){return smalltalk.AreaChartExample||(typeof AreaChartExample=="undefined"?nil:AreaChartExample)}
function $CandlestickChartExample(){return smalltalk.CandlestickChartExample||(typeof CandlestickChartExample=="undefined"?nil:CandlestickChartExample)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._appendToJQuery_("body"._asJQuery());
self._addButton_forChart_("Pop PieChart",$PieChartExample());
self._addButton_forChart_("Pop ScatterChart",$ScatterChartExample());
self._addButton_forChart_("Pop GaugeChart",$GaugeChartExample());
self._addButton_forChart_("Pop GeoChart",$GeoChartExample());
self._addButton_forChart_("Pop TableChart",$TableChartExample());
self._addButton_forChart_("Pop TreeMapChart",$TreeMapChartExample());
self._addButton_forChart_("Pop ComboChart",$ComboChartExample());
self._addButton_forChart_("Pop LineChart",$LineChartExample());
self._addButton_forChart_("Pop BarChart",$BarChartExample());
self._addButton_forChart_("Pop ColumnChart",$ColumnChartExample());
self._addButton_forChart_("Pop AreaChart",$AreaChartExample());
self._addButton_forChart_("Pop CandlestickChart",$CandlestickChartExample());
$1=smalltalk.PopupChartApp.superclass.fn.prototype._begin.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.PopupChartApp)})},
messageSends: ["appendToJQuery:", "asJQuery", "addButton:forChart:", "begin"]}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Press a Button to Popup a Chart!");
self._renderBrowserButtonOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.PopupChartApp)})},
messageSends: ["with:", "h1", "renderBrowserButtonOn:"]}),
smalltalk.PopupChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["corechart","gauge","geochart","table","treemap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.PopupChartApp.klass)})},
messageSends: []}),
smalltalk.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ScatterChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("ScatterChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ScatterChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.ScatterChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Age vs. Weight comparison"),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Age"),"minValue".__minus_gt((0)),"maxValue".__minus_gt((15))])),"vAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Weight"),"minValue".__minus_gt((0)),"maxValue".__minus_gt((15))])),"legend".__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.ScatterChartExample)})},
messageSends: ["->"]}),
smalltalk.ScatterChartExample);



smalltalk.addClass('TableChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.TableChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("Table");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TableChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.TableChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var data;
function $DataTable(){return smalltalk.DataTable||(typeof DataTable=="undefined"?nil:DataTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
data=_st($DataTable())._new();
_st(data)._addColumnType_name_("string","Name");
_st(data)._addColumnType_name_("number","Salary");
_st(data)._addColumnType_name_("boolean","Full Time Employee");
_st(data)._addRows_([["Mike",smalltalk.HashedCollection._from_(["v".__minus_gt((10000)),"f".__minus_gt("$10,000")]),true],["Jim",smalltalk.HashedCollection._from_(["v".__minus_gt((8000)),"f".__minus_gt("$8,000")]),false],["Alice",smalltalk.HashedCollection._from_(["v".__minus_gt((12500)),"f".__minus_gt("$12,500")]),true],["Bob",smalltalk.HashedCollection._from_(["v".__minus_gt((7000)),"f".__minus_gt("$7,000")]),true]]);
$1=_st(data)._data();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{data:data},smalltalk.TableChartExample)})},
messageSends: ["new", "addColumnType:name:", "addRows:", "->", "data"]}),
smalltalk.TableChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["showRowNumber".__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.TableChartExample)})},
messageSends: ["->"]}),
smalltalk.TableChartExample);



smalltalk.addClass('TreeMapChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.TreeMapChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("TreeMap");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TreeMapChartExample)})},
messageSends: ["initialize", "chartType:"]}),
smalltalk.TreeMapChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,(0),(0)],["America","Global",(0),(0)],["Europe","Global",(0),(0)],["Asia","Global",(0),(0)],["Australia","Global",(0),(0)],["Africa","Global",(0),(0)],["Brazil","America",(11),(10)],["USA","America",(52),(31)],["Mexico","America",(24),(12)],["Canada","America",(16),(-23)],["France","Europe",(42),(-11)],["Germany","Europe",(31),(-2)],["Sweden","Europe",(22),(-13)],["Italy","Europe",(17),(4)],["UK","Europe",(21),(-5)],["China","Asia",(36),(4)],["Japan","Asia",(20),(-12)],["India","Asia",(40),(63)],["Laos","Asia",(4),(34)],["Mongolia","Asia",(1),(-5)],["Israel","Asia",(12),(24)],["Iran","Asia",(18),(13)],["Pakistan","Asia",(11),(-52)],["Egypt","Africa",(21),(0)],["S. Africa","Africa",(30),(43)],["Sudan","Africa",(12),(2)],["Congo","Africa",(10),(12)],["Zair","Africa",(8),(10)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.TreeMapChartExample)})},
messageSends: ["arrayToDataTable:"]}),
smalltalk.TreeMapChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["minColor".__minus_gt("#f00"),"midColor".__minus_gt("#ddd"),"maxColor".__minus_gt("#0d0"),"headerHeight".__minus_gt((15)),"fontColor".__minus_gt("black"),"showScale".__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.TreeMapChartExample)})},
messageSends: ["->"]}),
smalltalk.TreeMapChartExample);


})(global_smalltalk,global_nil,global__st);
