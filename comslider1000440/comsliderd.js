function comSlider1000440() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider1000440 = null;
			
							this.jssor_slider1000440_starter = function (containerId) { 
							
            var _SlideshowTransitions = [ 
{$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$JssorEasing$.$EaseInCubic,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
				];								
							
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$AutoPlayInterval: 5000,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									},										
									
					$ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 2       //[Required] 0 Never, 1 Mouse Over, 2 Always
					},
				                $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
						$Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
						$AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
						$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
						$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
						$SpacingX: 12,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
						$SpacingY: 12,                                   //[Optional] Vertical space between each item in pixel, default value is 0
						$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
					}						
									};

									self.jssor_slider1000440 = new $JssorSlider$(containerId, options);
								}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS1000440("#comSContainer1000440_").parent().width();
										if (parentWidth) {
											self.jssor_slider1000440.$ScaleWidth(Math.min(parentWidth, 541)); //parentWidth -> fully responsive
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function()
					{
				   jqCS1000440 = jQuery1000440.noConflict(false);jqCS1000440("#comslider_in_point_1000440").html('<div id="comSContainer1000440_" name="comSContainer1000440_" style="display: inline-block; text-align: left;  border:0px; width:541px; height:406px; position: relative; top: 0px; left: 0px;"><div u="slides" style="position: absolute; left: 0px; top: 0px; width:541px; height:406px; overflow: hidden;"><div><img u="image" src="comslider1000440/img/160509130749102.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:163px; left:0px; width:541px; height:81px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 541px; height:81px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:541px; height:81px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">CASA J&J</h2>			</div></div></div><div><img u="image" src="comslider1000440/img/160509130749101.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:163px; left:0px; width:541px; height:81px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 541px; height:81px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:541px; height:81px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">Casa Bosques</h2>			</div></div></div><div><img u="image" src="comslider1000440/img/160509130749103.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:163px; left:0px; width:541px; height:81px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 541px; height:81px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:541px; height:81px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">Casa Pilcaya</h2>			</div></div></div><div><img u="image" src="comslider1000440/img/160509130749104.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:163px; left:0px; width:541px; height:81px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 541px; height:81px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:541px; height:81px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">CASA J&J</h2>			</div></div></div></div><!-- Bullet Navigator Skin Begin --><!-- jssor slider bullet navigator skin 01 --><style>	/*	.	 div           (normal)	.jssorb1000440 div:hover     (normal mouseover)	.jssorb1000440 .av           (active)	.jssorb1000440 .av:hover     (active mouseover)	.jssorb1000440 .dn           (mousedown)	*/	.jssorb1000440 div, .jssorb1000440 div:hover, .jssorb1000440 .av {		filter: alpha(opacity=90);		opacity: 0.9;		overflow: hidden;		cursor: pointer;	border-radius: 24px;  border: 2px solid #DDDDDD;	background-color: transparent;		margin: 1px !important;	}	.jssorb1000440 div {		margin: 1px !important;		background-repeat:no-repeat;		background-position:center; 	}		.jssorb1000440 div:hover, 		.jssorb1000440 .av:hover {			background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 		}	.jssorb1000440 .av {		background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 	}</style><!-- bullet navigator container -->         <div u="navigator" class="jssorb1000440" style="position: absolute; bottom: 17px; left: 12px;">        	<!-- bullet navigator item prototype -->        	<div u="prototype" style="POSITION: absolute; WIDTH: 12px; HEIGHT: 12px;"></div>        </div>				 <!-- Bullet Navigator Skin End -->	<!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora1000440l              (normal).jssora1000440r              (normal).jssora1000440l:hover        (normal mouseover).jssora1000440r:hover        (normal mouseover).jssora1000440ldn            (mousedown).jssora1000440rdn            (mousedown)*/.jssora1000440l, .jssora1000440r, .jssora1000440ldn, .jssora1000440rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora1000440l {background: transparent url("comslider1000440/imgnavctl/defback.png?1462851989") no-repeat; }.jssora1000440r {background: transparent url("comslider1000440/imgnavctl/defforward.png?1462851989") no-repeat; }.jssora1000440l:hover, .jssora1000440ldn {background: transparent url("comslider1000440/imgnavctl/defbackhover.png?1462851989") no-repeat; }.jssora1000440r:hover, .jssora1000440rdn {background: transparent url("comslider1000440/imgnavctl/defforwardhover.png?1462851989") no-repeat; } </style><!-- Arrow Left --><span u="arrowleft" class="jssora1000440l" style="margin-left:10px; width: 42px; height: 42px; top: 182px; left: 0px;"></span><!-- Arrow Right --><span u="arrowright" class="jssora1000440r" style="margin-left:-10px; width: 42px; height: 42px; top: 182px; left: 499px"></span><!-- Arrow Navigator Skin End -->	</div>');
                    jqCS1000440("#comslider_in_point_1000440 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider1000440_starter("comSContainer1000440_");
							
						jqCS1000440(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS1000440(window).bind("load", self.ScaleSlider);
						jqCS1000440(window).bind("resize", self.ScaleSlider);
						jqCS1000440(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop() == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider1000440 = new comSlider1000440();
objcomSlider1000440.include('comslider1000440/js/helpers.js', false);
objcomSlider1000440.include('comslider1000440/js/jquery-1.10.1.js', false);
objcomSlider1000440.include('comslider1000440/js/jquery-ui-1.10.3.effects.js', false);
objcomSlider1000440.include('comslider1000440/js/jssor.slider.min_2_0.js', true);
