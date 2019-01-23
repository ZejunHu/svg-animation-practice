(function($) {
    "use strict";

    // var getPathLength;

    // $(document).on("ready", function(){
    //     getPathLength = function(o){
    //         var path = $("." + o).get(0);
    //         var length = path.getTotalLength();
    //         return length;
    //     };
    
    //     var controller = new ScrollMagic.Controller();
    //     var tl = new TimelineMax
    //     tl
    //     .addLabel("start")
    //     .to("#scroll",1,{opacity: 0}, "start")
    //     .to([".st0", ".st1", ".st2", ".st3"],1, {strokeDashoffset: 0, ease:Linear.easeNone}, "start");
    
    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: "#scene",
    //         triggerHook: "onLeave",
    //         duration: 1500
    //     })
    //     .setTween(tl)
    //     .addIndicators()
    //     .addTo(controller)
    //     .setPin("#scene");
    // })
	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $pathFirst = $("g#svg_4 path");
    var $pathSecond = $("g#svg_9 path");
    var $pathThird = $("g#svg_20 path");

	// prepare SVG
	pathPrepare($pathFirst);
    pathPrepare($pathSecond);
    pathPrepare($pathThird);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($pathFirst, 0.4, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($pathSecond, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
        .add(TweenMax.to($pathThird, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#scene", triggerHook: "onLeave", duration: 2000, tweenChanges: true})
					.setTween(tween)
                    .addTo(controller)
                    .setPin("#scene");
    
})(jQuery);