var szNormal = 117, szSmall  = 100, szFull   = 219;
 
var kwicks = $$("#kwicks .kwick");
var fx = new Fx.Elements(kwicks, {wait: false, duration: 300, transition: Fx.Transitions.Back.easeOut});
kwicks.each(function(kwick, i) {
	kwick.addEvent("mouseenter", function(event) {
		var o = {};
		o[i] = {width: [kwick.getStyle("width").toInt(), szFull]}
		kwicks.each(function(other, j) {
			if(i != j) {
				var w = other.getStyle("width").toInt();
				if(w != szSmall) o[j] = {width: [w, szSmall]};
			}
		});
		fx.start(o);
	});
});
 
$("kwicks").addEvent("mouseleave", function(event) {
	var o = {};
	kwicks.each(function(kwick, i) {
		o[i] = {width: [kwick.getStyle("width").toInt(), szNormal]}
	});
	fx.start(o);
})