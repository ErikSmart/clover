function comSlider1015217() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider1015217 = null;
			
							this.jssor_slider1015217_starter = function (containerId) { 
							
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
										$TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
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

									self.jssor_slider1015217 = new $JssorSlider$(containerId, options);
								}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS1015217("#comSContainer1015217_").parent().width();
										if (parentWidth) {
											self.jssor_slider1015217.$ScaleWidth(Math.min(parentWidth, 522)); //parentWidth -> fully responsive
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function()
					{
				   jqCS1015217 = jQuery1015217.noConflict(false);jqCS1015217("#comslider_in_point_1015217").html('<div id="comSContainer1015217_" name="comSContainer1015217_" style="display: inline-block; text-align: left;  border:0px; width:522px; height:380px; position: relative; top: 0px; left: 0px;"><div u="slides" style="position: absolute; left: 0px; top: 0px; width:522px; height:380px; overflow: hidden;"><div><img u="image" src="comslider1015217/img/160524132953101.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:152px; left:0px; width:522px; height:76px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 522px; height:76px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:522px; height:76px;"><h2 style="font-size:3em; text-align:center; color:#000"; font-family:open sans; font-size:24px;">Cercado Electrico</h2>			</div></div></div><div><img u="image" src="comslider1015217/img/160524133018102.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:152px; left:0px; width:522px; height:76px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 522px; height:76px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:522px; height:76px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">Cámaras de Seguridad</h2>			</div></div></div><div><img u="image" src="comslider1015217/img/160524133058104.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:152px; left:0px; width:522px; height:76px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 522px; height:76px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:522px; height:76px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;"> <span style="color:#000;">Control</span> general de luz</h2>			</div></div></div><div><img u="image" src="comslider1015217/img/160524133058105.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:152px; left:0px; width:522px; height:76px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 522px; height:76px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:522px; height:76px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">Sites de redes</h2>			</div></div></div><div><img u="image" src="comslider1015217/img/160524133224106.jpg"></img><div u="caption" t="NO" t2="MCLIP|B" style="position: absolute; top:152px; left:0px; width:522px; height:76px; "  >			<div style="position: absolute; top: 0px; left: 0px; width: 522px; height:76px;				background-color: #000000; opacity: 0; filter: alpha(opacity=0);">			</div>			<div style="position: absolute; top: 0px; left: 0px; width:522px; height:76px;"><h2 style="font-size:3em; text-align:center; color:#FFFFFF"; font-family:open sans; font-size:24px;">Casa Inteligente</h2>			</div></div></div></div><!-- Bullet Navigator Skin Begin --><!-- jssor slider bullet navigator skin 01 --><style>	/*	.	 div           (normal)	.jssorb1015217 div:hover     (normal mouseover)	.jssorb1015217 .av           (active)	.jssorb1015217 .av:hover     (active mouseover)	.jssorb1015217 .dn           (mousedown)	*/	.jssorb1015217 div, .jssorb1015217 div:hover, .jssorb1015217 .av {		filter: alpha(opacity=90);		opacity: 0.9;		overflow: hidden;		cursor: pointer;	border-radius: 24px;  border: 2px solid #DDDDDD;	background-color: transparent;		margin: 1px !important;	}	.jssorb1015217 div {		margin: 1px !important;		background-repeat:no-repeat;		background-position:center; 	}		.jssorb1015217 div:hover, 		.jssorb1015217 .av:hover {			background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 		}	.jssorb1015217 .av {		background-color: #FFFFFF;  border: 3px solid #FFFFFF;	background-color: transparent;		margin: 0px !important;		background-repeat:no-repeat;		background-position:center; 	}</style><!-- bullet navigator container -->         <div u="navigator" class="jssorb1015217" style="position: absolute; bottom: 17px; left: 12px;">        	<!-- bullet navigator item prototype -->        	<div u="prototype" style="POSITION: absolute; WIDTH: 12px; HEIGHT: 12px;"></div>        </div>				 <!-- Bullet Navigator Skin End -->	<!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora1015217l              (normal).jssora1015217r              (normal).jssora1015217l:hover        (normal mouseover).jssora1015217r:hover        (normal mouseover).jssora1015217ldn            (mousedown).jssora1015217rdn            (mousedown)*/.jssora1015217l, .jssora1015217r, .jssora1015217ldn, .jssora1015217rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora1015217l {background: transparent url("comslider1015217/imgnavctl/defback.png?1464116029") no-repeat; }.jssora1015217r {background: transparent url("comslider1015217/imgnavctl/defforward.png?1464116029") no-repeat; }.jssora1015217l:hover, .jssora1015217ldn {background: transparent url("comslider1015217/imgnavctl/defbackhover.png?1464116029") no-repeat; }.jssora1015217r:hover, .jssora1015217rdn {background: transparent url("comslider1015217/imgnavctl/defforwardhover.png?1464116029") no-repeat; } </style><!-- Arrow Left --><span u="arrowleft" class="jssora1015217l" style="margin-left:10px; width: 42px; height: 42px; top: 169px; left: 0px;"></span><!-- Arrow Right --><span u="arrowright" class="jssora1015217r" style="margin-left:-10px; width: 42px; height: 42px; top: 169px; left: 480px"></span><!-- Arrow Navigator Skin End -->	</div>');
                    jqCS1015217("#comslider_in_point_1015217 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider1015217_starter("comSContainer1015217_");
							
						jqCS1015217(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS1015217(window).bind("load", self.ScaleSlider);
						jqCS1015217(window).bind("resize", self.ScaleSlider);
						jqCS1015217(window).bind("orientationchange", self.ScaleSlider);						
					
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
objcomSlider1015217 = new comSlider1015217();
objcomSlider1015217.include('comslider1015217/js/helpers.js', false);
objcomSlider1015217.include('comslider1015217/js/jquery-1.10.1.js', false);
objcomSlider1015217.include('comslider1015217/js/jquery-ui-1.10.3.effects.js', false);
objcomSlider1015217.include('comslider1015217/js/jssor.slider.min_2_0.js', true);
