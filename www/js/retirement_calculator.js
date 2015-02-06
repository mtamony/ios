/* Javascript Retirement Calculator */

function Calculate() {
    
	// Initialize Variables
	var boolErrorCheck = "TRUE";
	var tierType = gettierType();
	var ageFactor = 0.0;
	var formAge = document.RetBenCalc.Age.value;
	var formService = document.RetBenCalc.Service.value;
	var formFinAvgMoComp = document.RetBenCalc.FinAvgMoComp.value;
	
	// Check for empty input fields.  Alert if found.
	boolErrorCheck = isEmpty(formAge);
    if(boolErrorCheck)
        alert("Empty Field: Age at Retirement");
	boolErrorCheck = isEmpty(formService);
    if(boolErrorCheck)
        alert("Empty Field: Years of Service");
	boolErrorCheck = isEmpty(formFinAvgMoComp);
    if(boolErrorCheck)
        alert("Empty Field: Final Average Compensation");
	
    
	// If no errors were found, process input data.
	if(!boolErrorCheck) {
		// Determine which tier to calculate with.
		switch( tierType ) {
			case "safetytier2": ageFactor = getsafetytier2factor();
                break;
			case "tier2": ageFactor = gettier2Factor();
                break;
			case "Safety": ageFactor = getSafetyFactor();
                break;
			case "Safety3": ageFactor = getSafety3Factor();
                break;
			case "tier2555": ageFactor = gettier2555Factor();
                break;
			case "tier2755": ageFactor = gettier2755Factor();
                break;
			case "tier360": ageFactor = gettier360Factor();
                break;
			case "tier2055": ageFactor = gettier2055Factor();
                break;
			case "tier1665": ageFactor = gettier1665Factor();
                break;
			case "safety355": ageFactor = getsafety355Factor();
                break;
                
                
                
                
			default		     : alert("No tier Type Selected!");  // Added for security, but not required (using the CHECKED command in the radio button to force an initial selection)
                break;
		}
        
		// Calculate the Monthly Retirement Allowance and
		// insert that value into the form.
		
		var EstimatedBenefit;
		EstimatedBenefit = 0;
		if (ageFactor == getsafetytier2factor()) {
			EstimatedBenefit = formFinAvgMoComp* 0.01 * formService * ageFactor;
		} else if (ageFactor == gettier1665Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.016667 * formService * ageFactor;
		} else if (ageFactor == gettier2Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.01 * formService * ageFactor;
		} else if (ageFactor == getSafetyFactor()){
			EstimatedBenefit = formFinAvgMoComp* 0.02 * formService * ageFactor;
		} else if (ageFactor == getSafety3Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.03 * formService * ageFactor;
		} else if (ageFactor == gettier2555Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.02 * formService * ageFactor;
		} else if (ageFactor == gettier2755Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.02 * formService * ageFactor;
		} else if (ageFactor == gettier360Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.02 * formService * ageFactor;
		} else if (ageFactor == gettier2055Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.02 * formService * ageFactor;
		} else if (ageFactor == gettier1665Factor()){
			EstimatedBenefit = formFinAvgMoComp* 0.016 * formService * ageFactor;
            
		} else {
			EstimatedBenefit = formFinAvgMoComp* 0.00 * formService * ageFactor;
		}
        
		
		if (EstimatedBenefit > parseFloat(formFinAvgMoComp))
		{
			document.RetBenCalc.MoRetAllow.value = formFinAvgMoComp;
			alert (" Your monthly allowance would be " +  "$" + (document.RetBenCalc.FinAvgMoComp.value) +
                   " because the maximum monthly allowance you can receive is 100% of your Average Monthly Compensation." )
		}
		else
		{
			document.RetBenCalc.MoRetAllow.value = format(EstimatedBenefit,2);
		}
		
    }
}
function format(num,decimal) {
    var count = decimal;
    var MoRetAllow = "";
    if(decimal) { MoRetAllow = "."; }
    while(count--) { num = num*10; }
    num = Math.round(num) + "";
    var len = num.length;
    count = decimal;
    while(count--) { MoRetAllow = MoRetAllow + num.charAt(len-count-1); }
    for(var x=len-decimal-1,count=0;x>=0;x--) {
        MoRetAllow = num.charAt(x) + MoRetAllow;
        if(!(++count%3) && x > 0) { MoRetAllow = "," + MoRetAllow; } // add commas
    }
    return(MoRetAllow);
}


// Determines and returns a Safetytier2 Age Factor to the calling function.
function getsafetytier2factor() {
    
	var safetytier2age = new Array (262);
    safetytier2age[84]="50";
    safetytier2age[85]="50.00";
    safetytier2age[86]="50.0";
    safetytier2age[87]="50.25";
    safetytier2age[88]="50.50";
    safetytier2age[89]="50.5";
    safetytier2age[90]="50.75";
    safetytier2age[91]="51";
    safetytier2age[92]="51.00";
    safetytier2age[93]="51.0";
    safetytier2age[94]="51.25";
    safetytier2age[95]="51.50";
    safetytier2age[96]="51.5";
    safetytier2age[97]="51.75";
    safetytier2age[98]="52";
    safetytier2age[99]="52.00";
    safetytier2age[100]="52.0";
    safetytier2age[101]="52.25";
    safetytier2age[102]="52.50";
    safetytier2age[103]="52.5";
    safetytier2age[104]="52.75";
    safetytier2age[105]="53";
    safetytier2age[106]="53.00";
    safetytier2age[107]="53.0";
    safetytier2age[108]="53.25";
    safetytier2age[109]="53.50";
    safetytier2age[110]="53.5";
    safetytier2age[111]="53.75";
    safetytier2age[112]="54";
    safetytier2age[113]="54.00";
    safetytier2age[114]="54.0";
    safetytier2age[115]="54.25";
    safetytier2age[116]="54.50";
    safetytier2age[117]="54.5";
    safetytier2age[118]="54.75";
    safetytier2age[119]="55";
    safetytier2age[120]="55.00";
    safetytier2age[121]="55.0";
    safetytier2age[122]="55.25";
    safetytier2age[123]="55.50";
    safetytier2age[124]="55.5";
    safetytier2age[125]="55.75";
    safetytier2age[126]="56";
    safetytier2age[127]="56.00";
    safetytier2age[128]="56.0";
    safetytier2age[129]="56.25";
    safetytier2age[130]="56.50";
    safetytier2age[131]="56.5";
    safetytier2age[132]="56.75";
    safetytier2age[133]="57";
    safetytier2age[134]="57.00";
    safetytier2age[135]="57.0";
    safetytier2age[136]="57.25";
    safetytier2age[137]="57.50";
    safetytier2age[138]="57.5";
    safetytier2age[139]="57.75";
    safetytier2age[140]="58";
    safetytier2age[141]="58.00";
    safetytier2age[142]="58.0";
    safetytier2age[143]="58.25";
    safetytier2age[144]="58.50";
    safetytier2age[145]="58.5";
    safetytier2age[146]="58.75";
    safetytier2age[147]="59";
    safetytier2age[148]="59.00";
    safetytier2age[149]="59.0";
    safetytier2age[150]="59.25";
    safetytier2age[151]="59.50";
    safetytier2age[152]="59.5";
    safetytier2age[153]="59.75";
    safetytier2age[154]="60";
    safetytier2age[155]="60.00";
    safetytier2age[156]="60.0";
    safetytier2age[157]="60.25";
    safetytier2age[158]="60.50";
    safetytier2age[159]="60.5";
    safetytier2age[160]="60.75";
    safetytier2age[161]="61";
    safetytier2age[162]="61.00";
    safetytier2age[163]="61.0";
    safetytier2age[164]="61.25";
    safetytier2age[165]="61.50";
    safetytier2age[166]="61.5";
    safetytier2age[167]="61.75";
    safetytier2age[168]="62";
    safetytier2age[169]="62.00";
    safetytier2age[170]="62.0";
    safetytier2age[171]="62.25";
    safetytier2age[172]="62.50";
    safetytier2age[173]="62.5";
    safetytier2age[174]="62.75";
    safetytier2age[175]="63";
    safetytier2age[176]="63.00";
    safetytier2age[177]="63.0";
    safetytier2age[178]="63.25";
    safetytier2age[179]="63.50";
    safetytier2age[180]="63.5";
    safetytier2age[181]="63.75";
    safetytier2age[182]="64";
    safetytier2age[183]="64.00";
    safetytier2age[184]="64.0";
    safetytier2age[185]="64.25";
    safetytier2age[186]="64.50";
    safetytier2age[187]="64.5";
    safetytier2age[188]="64.75";
    safetytier2age[189]="65";
    safetytier2age[190]="65.00";
    safetytier2age[191]="65.0";
    safetytier2age[192]="65.25";
    safetytier2age[193]="65.50";
    safetytier2age[194]="65.5";
    safetytier2age[195]="65.75";
    safetytier2age[196]="66";
    safetytier2age[197]="66.00";
    safetytier2age[198]="66.0";
    safetytier2age[199]="66.25";
    safetytier2age[200]="66.50";
    safetytier2age[201]="66.5";
    safetytier2age[202]="66.75";
    safetytier2age[203]="67";
    safetytier2age[204]="67.00";
    safetytier2age[205]="67.0";
    safetytier2age[206]="67.25";
    safetytier2age[207]="67.50";
    safetytier2age[208]="67.5";
    safetytier2age[209]="67.75";
    safetytier2age[210]="68";
    safetytier2age[211]="68.00";
    safetytier2age[212]="68.0";
    safetytier2age[213]="68.25";
    safetytier2age[214]="68.50";
    safetytier2age[215]="68.5";
    safetytier2age[216]="68.75";
    safetytier2age[217]="69";
    safetytier2age[218]="69.00";
    safetytier2age[219]="69.0";
    safetytier2age[220]="69.25";
    safetytier2age[221]="69.50";
    safetytier2age[222]="69.5";
    safetytier2age[223]="69.75";
    safetytier2age[224]="70";
    safetytier2age[225]="70.00";
    safetytier2age[226]="70.0";
    safetytier2age[227]="70.25";
    safetytier2age[228]="70.50";
    safetytier2age[229]="70.5";
    safetytier2age[230]="70.75";
    safetytier2age[231]="71";
    safetytier2age[232]="71.00";
    safetytier2age[233]="71.0";
    safetytier2age[234]="71.25";
    safetytier2age[235]="71.50";
    safetytier2age[236]="71.5";
    safetytier2age[237]="71.75";
    safetytier2age[238]="72";
    safetytier2age[239]="72.00";
    safetytier2age[240]="72.0";
    safetytier2age[241]="72.25";
    safetytier2age[242]="72.50";
    safetytier2age[243]="72.5";
    safetytier2age[244]="72.75";
    safetytier2age[245]="73";
    safetytier2age[246]="73.00";
    safetytier2age[247]="73.0";
    safetytier2age[248]="73.25";
    safetytier2age[249]="73.50";
    safetytier2age[250]="73.5";
    safetytier2age[251]="73.75";
    safetytier2age[252]="74";
    safetytier2age[253]="74.00";
    safetytier2age[254]="74.0";
    safetytier2age[255]="74.25";
    safetytier2age[256]="74.50";
    safetytier2age[257]="74.5";
    safetytier2age[258]="74.75";
    safetytier2age[259]="75";
    safetytier2age[260]="75.00";
    safetytier2age[261]="75.0";
    safetytier2age[262]="75.25";
    safetytier2age[263]="75.50";
    safetytier2age[264]="75.5";
    safetytier2age[265]="75.75";
    safetytier2age[266]="76";
    safetytier2age[267]="76.00";
    safetytier2age[268]="76.0";
    safetytier2age[269]="76.25";
    safetytier2age[270]="76.50";
    safetytier2age[271]="76.5";
    safetytier2age[272]="76.75";
    safetytier2age[273]="77";
    safetytier2age[274]="77.00";
    safetytier2age[275]="77.0";
    safetytier2age[276]="77.25";
    safetytier2age[277]="77.50";
    safetytier2age[278]="77.5";
    safetytier2age[279]="77.75";
    safetytier2age[280]="78";
    safetytier2age[281]="78.00";
    safetytier2age[282]="78.0";
    safetytier2age[283]="78.25";
    safetytier2age[284]="78.50";
    safetytier2age[285]="78.5";
    safetytier2age[286]="78.75";
    safetytier2age[287]="79";
    safetytier2age[288]="79.00";
    safetytier2age[289]="79.0";
    safetytier2age[290]="79.25";
    safetytier2age[291]="79.50";
    safetytier2age[292]="79.5";
    safetytier2age[293]="79.75";
    safetytier2age[294]="80";
    safetytier2age[295]="80.00";
    safetytier2age[296]="80.0";
    safetytier2age[297]="80.25";
    safetytier2age[298]="80.50";
    safetytier2age[299]="80.5";
    safetytier2age[300]="80.75";
    safetytier2age[301]="81";
    safetytier2age[302]="81.00";
    safetytier2age[303]="81.0";
    safetytier2age[304]="81.25";
    safetytier2age[305]="81.50";
    safetytier2age[306]="81.5";
    safetytier2age[307]="81.75";
    safetytier2age[308]="82";
    safetytier2age[309]="82.00";
    safetytier2age[310]="82.0";
    safetytier2age[311]="82.25";
    safetytier2age[312]="82.50";
    safetytier2age[313]="82.5";
    safetytier2age[314]="82.75";
    safetytier2age[315]="83";
    safetytier2age[316]="83.00";
    safetytier2age[317]="83.0";
    safetytier2age[318]="83.25";
    safetytier2age[319]="83.50";
    safetytier2age[320]="83.5";
    safetytier2age[321]="83.75";
    safetytier2age[322]="84";
    safetytier2age[323]="84.00";
    safetytier2age[324]="84.0";
    safetytier2age[325]="84.25";
    safetytier2age[326]="84.50";
    safetytier2age[327]="84.5";
    safetytier2age[328]="84.75";
    safetytier2age[329]="85";
    safetytier2age[330]="85.00";
    safetytier2age[331]="85.0";
	var safetytier2factor = new Array(262);
    safetytier2factor[84]=2.000;
    safetytier2factor[85]=2.000;
    safetytier2factor[86]=2.000;
    safetytier2factor[87]=2.025;
    safetytier2factor[88]=2.050;
    safetytier2factor[89]=2.050;
    safetytier2factor[90]=2.075;
    safetytier2factor[91]=2.100;
    safetytier2factor[92]=2.100;
    safetytier2factor[93]=2.100;
    safetytier2factor[94]=2.125;
    safetytier2factor[95]=2.150;
    safetytier2factor[96]=2.150;
    safetytier2factor[97]=2.175;
    safetytier2factor[98]=2.200;
    safetytier2factor[99]=2.200;
    safetytier2factor[100]=2.200;
    safetytier2factor[101]=2.225;
    safetytier2factor[102]=2.250;
    safetytier2factor[103]=2.250;
    safetytier2factor[104]=2.275;
    safetytier2factor[105]=2.300;
    safetytier2factor[106]=2.300;
    safetytier2factor[107]=2.300;
    safetytier2factor[108]=2.325;
    safetytier2factor[109]=2.350;
    safetytier2factor[110]=2.350;
    safetytier2factor[111]=2.375;
    safetytier2factor[112]=2.400;
    safetytier2factor[113]=2.400;
    safetytier2factor[114]=2.400;
    safetytier2factor[115]=2.425;
    safetytier2factor[116]=2.450;
    safetytier2factor[117]=2.450;
    safetytier2factor[118]=2.475;
    safetytier2factor[119]=2.500;
    safetytier2factor[120]=2.500;
    safetytier2factor[121]=2.500;
    safetytier2factor[122]=2.525;
    safetytier2factor[123]=2.550;
    safetytier2factor[124]=2.550;
    safetytier2factor[125]=2.575;
    safetytier2factor[126]=2.600;
    safetytier2factor[127]=2.600;
    safetytier2factor[128]=2.600;
    safetytier2factor[129]=2.625;
    safetytier2factor[130]=2.650;
    safetytier2factor[131]=2.650;
    safetytier2factor[132]=2.675;
    safetytier2factor[133]=2.700;
    safetytier2factor[134]=2.700;
    safetytier2factor[135]=2.700;
    safetytier2factor[136]=2.700;
    safetytier2factor[137]=2.700;
    safetytier2factor[138]=2.700;
    safetytier2factor[139]=2.700;
    safetytier2factor[140]=2.700;
    safetytier2factor[141]=2.700;
    safetytier2factor[142]=2.700;
    safetytier2factor[143]=2.700;
    safetytier2factor[144]=2.700;
    safetytier2factor[145]=2.700;
    safetytier2factor[146]=2.700;
    safetytier2factor[147]=2.700;
    safetytier2factor[148]=2.700;
    safetytier2factor[149]=2.700;
    safetytier2factor[150]=2.700;
    safetytier2factor[151]=2.700;
    safetytier2factor[152]=2.700;
    safetytier2factor[153]=2.700;
    safetytier2factor[154]=2.700;
    safetytier2factor[155]=2.700;
    safetytier2factor[156]=2.700;
    safetytier2factor[157]=2.700;
    safetytier2factor[158]=2.700;
    safetytier2factor[159]=2.700;
    safetytier2factor[160]=2.700;
    safetytier2factor[161]=2.700;
    safetytier2factor[162]=2.700;
    safetytier2factor[163]=2.700;
    safetytier2factor[164]=2.700;
    safetytier2factor[165]=2.700;
    safetytier2factor[166]=2.700;
    safetytier2factor[167]=2.700;
    safetytier2factor[168]=2.700;
    safetytier2factor[169]=2.700;
    safetytier2factor[170]=2.700;
    safetytier2factor[171]=2.700;
    safetytier2factor[172]=2.700;
    safetytier2factor[173]=2.700;
    safetytier2factor[174]=2.700;
    safetytier2factor[175]=2.700;
    safetytier2factor[176]=2.700;
    safetytier2factor[177]=2.700;
    safetytier2factor[178]=2.700;
    safetytier2factor[179]=2.700;
    safetytier2factor[180]=2.700;
    safetytier2factor[181]=2.700;
    safetytier2factor[182]=2.700;
    safetytier2factor[183]=2.700;
    safetytier2factor[184]=2.700;
    safetytier2factor[185]=2.700;
    safetytier2factor[186]=2.700;
    safetytier2factor[187]=2.700;
    safetytier2factor[188]=2.700;
    safetytier2factor[189]=2.700;
    safetytier2factor[190]=2.700;
    safetytier2factor[191]=2.700;
    safetytier2factor[192]=2.700;
    safetytier2factor[193]=2.700;
    safetytier2factor[194]=2.700;
    safetytier2factor[195]=2.700;
    safetytier2factor[196]=2.700;
    safetytier2factor[197]=2.700;
    safetytier2factor[198]=2.700;
    safetytier2factor[199]=2.700;
    safetytier2factor[200]=2.700;
    safetytier2factor[201]=2.700;
    safetytier2factor[202]=2.700;
    safetytier2factor[203]=2.700;
    safetytier2factor[204]=2.700;
    safetytier2factor[205]=2.700;
    safetytier2factor[206]=2.700;
    safetytier2factor[207]=2.700;
    safetytier2factor[208]=2.700;
    safetytier2factor[209]=2.700;
    safetytier2factor[210]=2.700;
    safetytier2factor[211]=2.700;
    safetytier2factor[212]=2.700;
    safetytier2factor[213]=2.700;
    safetytier2factor[214]=2.700;
    safetytier2factor[215]=2.700;
    safetytier2factor[216]=2.700;
    safetytier2factor[217]=2.700;
    safetytier2factor[218]=2.700;
    safetytier2factor[219]=2.700;
    safetytier2factor[220]=2.700;
    safetytier2factor[221]=2.700;
    safetytier2factor[222]=2.700;
    safetytier2factor[223]=2.700;
    safetytier2factor[224]=2.700;
    safetytier2factor[225]=2.700;
    safetytier2factor[226]=2.700;
    safetytier2factor[227]=2.700;
    safetytier2factor[228]=2.700;
    safetytier2factor[229]=2.700;
    safetytier2factor[230]=2.700;
    safetytier2factor[231]=2.700;
    safetytier2factor[232]=2.700;
    safetytier2factor[233]=2.700;
    safetytier2factor[234]=2.700;
    safetytier2factor[235]=2.700;
    safetytier2factor[236]=2.700;
    safetytier2factor[237]=2.700;
    safetytier2factor[238]=2.700;
    safetytier2factor[239]=2.700;
    safetytier2factor[240]=2.700;
    safetytier2factor[241]=2.700;
    safetytier2factor[242]=2.700;
    safetytier2factor[243]=2.700;
    safetytier2factor[244]=2.700;
    safetytier2factor[245]=2.700;
    safetytier2factor[246]=2.700;
    safetytier2factor[247]=2.700;
    safetytier2factor[248]=2.700;
    safetytier2factor[249]=2.700;
    safetytier2factor[250]=2.700;
    safetytier2factor[251]=2.700;
    safetytier2factor[252]=2.700;
    safetytier2factor[253]=2.700;
    safetytier2factor[254]=2.700;
    safetytier2factor[255]=2.700;
    safetytier2factor[256]=2.700;
    safetytier2factor[257]=2.700;
    safetytier2factor[258]=2.700;
    safetytier2factor[259]=2.700;
    safetytier2factor[260]=2.700;
    safetytier2factor[261]=2.700;
    safetytier2factor[262]=2.700;
    safetytier2factor[263]=2.700;
    safetytier2factor[264]=2.700;
    safetytier2factor[265]=2.700;
    safetytier2factor[266]=2.700;
    safetytier2factor[267]=2.700;
    safetytier2factor[268]=2.700;
    safetytier2factor[269]=2.700;
    safetytier2factor[270]=2.700;
    safetytier2factor[271]=2.700;
    safetytier2factor[272]=2.700;
    safetytier2factor[273]=2.700;
    safetytier2factor[274]=2.700;
    safetytier2factor[275]=2.700;
    safetytier2factor[276]=2.700;
    safetytier2factor[277]=2.700;
    safetytier2factor[278]=2.700;
    safetytier2factor[279]=2.700;
    safetytier2factor[280]=2.700;
    safetytier2factor[281]=2.700;
    safetytier2factor[282]=2.700;
    safetytier2factor[283]=2.700;
    safetytier2factor[284]=2.700;
    safetytier2factor[285]=2.700;
    safetytier2factor[286]=2.700;
    safetytier2factor[287]=2.700;
    safetytier2factor[288]=2.700;
    safetytier2factor[289]=2.700;
    safetytier2factor[290]=2.700;
    safetytier2factor[291]=2.700;
    safetytier2factor[292]=2.700;
    safetytier2factor[293]=2.700;
    safetytier2factor[294]=2.700;
    safetytier2factor[295]=2.700;
    safetytier2factor[296]=2.700;
    safetytier2factor[297]=2.700;
    safetytier2factor[298]=2.700;
    safetytier2factor[299]=2.700;
    safetytier2factor[300]=2.700;
    safetytier2factor[301]=2.700;
    safetytier2factor[302]=2.700;
    safetytier2factor[303]=2.700;
    safetytier2factor[304]=2.700;
    safetytier2factor[305]=2.700;
    safetytier2factor[306]=2.700;
    safetytier2factor[307]=2.700;
    safetytier2factor[308]=2.700;
    safetytier2factor[309]=2.700;
    safetytier2factor[310]=2.700;
    safetytier2factor[311]=2.700;
    safetytier2factor[312]=2.700;
    safetytier2factor[313]=2.700;
    safetytier2factor[314]=2.700;
    safetytier2factor[315]=2.700;
    safetytier2factor[316]=2.700;
    safetytier2factor[317]=2.700;
    safetytier2factor[318]=2.700;
    safetytier2factor[319]=2.700;
    safetytier2factor[320]=2.700;
    safetytier2factor[321]=2.700;
    safetytier2factor[322]=2.700;
    safetytier2factor[323]=2.700;
    safetytier2factor[324]=2.700;
    safetytier2factor[325]=2.700;
    safetytier2factor[326]=2.700;
    safetytier2factor[327]=2.700;
    safetytier2factor[328]=2.700;
    safetytier2factor[329]=2.700;
    safetytier2factor[330]=2.700;
    safetytier2factor[331]=2.700;
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < safetytier2age.length; i++) {
		if (safetytier2age[i] == selectedAge) {
			break;
		}
	}
    return safetytier2factor[i];
}

// Determines and returns a tier2 Age Factor to the calling function.
function gettier2Factor() {
	var tier2age = new Array (262);
    tier2age[98]="52";
    tier2age[99]="52.00";
    tier2age[100]="52.0";
    tier2age[101]="52.25";
    tier2age[102]="52.50";
    tier2age[103]="52.5";
    tier2age[104]="52.75";
    tier2age[105]="53";
    tier2age[106]="53.00";
    tier2age[107]="53.0";
    tier2age[108]="53.25";
    tier2age[109]="53.50";
    tier2age[110]="53.5";
    tier2age[111]="53.75";
    tier2age[112]="54";
    tier2age[113]="54.00";
    tier2age[114]="54.0";
    tier2age[115]="54.25";
    tier2age[116]="54.50";
    tier2age[117]="54.5";
    tier2age[118]="54.75";
    tier2age[119]="55";
    tier2age[120]="55.00";
    tier2age[121]="55.0";
    tier2age[122]="55.25";
    tier2age[123]="55.50";
    tier2age[124]="55.5";
    tier2age[125]="55.75";
    tier2age[126]="56";
    tier2age[127]="56.00";
    tier2age[128]="56.0";
    tier2age[129]="56.25";
    tier2age[130]="56.50";
    tier2age[131]="56.5";
    tier2age[132]="56.75";
    tier2age[133]="57";
    tier2age[134]="57.00";
    tier2age[135]="57.0";
    tier2age[136]="57.25";
    tier2age[137]="57.50";
    tier2age[138]="57.5";
    tier2age[139]="57.75";
    tier2age[140]="58";
    tier2age[141]="58.00";
    tier2age[142]="58.0";
    tier2age[143]="58.25";
    tier2age[144]="58.50";
    tier2age[145]="58.5";
    tier2age[146]="58.75";
    tier2age[147]="59";
    tier2age[148]="59.00";
    tier2age[149]="59.0";
    tier2age[150]="59.25";
    tier2age[151]="59.50";
    tier2age[152]="59.5";
    tier2age[153]="59.75";
    tier2age[154]="60";
    tier2age[155]="60.00";
    tier2age[156]="60.0";
    tier2age[157]="60.25";
    tier2age[158]="60.50";
    tier2age[159]="60.5";
    tier2age[160]="60.75";
    tier2age[161]="61";
    tier2age[162]="61.00";
    tier2age[163]="61.0";
    tier2age[164]="61.25";
    tier2age[165]="61.50";
    tier2age[166]="61.5";
    tier2age[167]="61.75";
    tier2age[168]="62";
    tier2age[169]="62.00";
    tier2age[170]="62.0";
    tier2age[171]="62.25";
    tier2age[172]="62.50";
    tier2age[173]="62.5";
    tier2age[174]="62.75";
    tier2age[175]="63";
    tier2age[176]="63.00";
    tier2age[177]="63.0";
    tier2age[178]="63.25";
    tier2age[179]="63.50";
    tier2age[180]="63.5";
    tier2age[181]="63.75";
    tier2age[182]="64";
    tier2age[183]="64.00";
    tier2age[184]="64.0";
    tier2age[185]="64.25";
    tier2age[186]="64.50";
    tier2age[187]="64.5";
    tier2age[188]="64.75";
    tier2age[189]="65";
    tier2age[190]="65.00";
    tier2age[191]="65.0";
    tier2age[192]="65.25";
    tier2age[193]="65.50";
    tier2age[194]="65.5";
    tier2age[195]="65.75";
    tier2age[196]="66";
    tier2age[197]="66.00";
    tier2age[198]="66.0";
    tier2age[199]="66.25";
    tier2age[200]="66.50";
    tier2age[201]="66.5";
    tier2age[202]="66.75";
    tier2age[203]="67";
    tier2age[204]="67.00";
    tier2age[205]="67.0";
    tier2age[206]="67.25";
    tier2age[207]="67.50";
    tier2age[208]="67.5";
    tier2age[209]="67.75";
    tier2age[210]="68";
    tier2age[211]="68.00";
    tier2age[212]="68.0";
    tier2age[213]="68.25";
    tier2age[214]="68.50";
    tier2age[215]="68.5";
    tier2age[216]="68.75";
    tier2age[217]="69";
    tier2age[218]="69.00";
    tier2age[219]="69.0";
    tier2age[220]="69.25";
    tier2age[221]="69.50";
    tier2age[222]="69.5";
    tier2age[223]="69.75";
    tier2age[224]="70";
    tier2age[225]="70.00";
    tier2age[226]="70.0";
    tier2age[227]="70.25";
    tier2age[228]="70.50";
    tier2age[229]="70.5";
    tier2age[230]="70.75";
    tier2age[231]="71";
    tier2age[232]="71.00";
    tier2age[233]="71.0";
    tier2age[234]="71.25";
    tier2age[235]="71.50";
    tier2age[236]="71.5";
    tier2age[237]="71.75";
    tier2age[238]="72";
    tier2age[239]="72.00";
    tier2age[240]="72.0";
    tier2age[241]="72.25";
    tier2age[242]="72.50";
    tier2age[243]="72.5";
    tier2age[244]="72.75";
    tier2age[245]="73";
    tier2age[246]="73.00";
    tier2age[247]="73.0";
    tier2age[248]="73.25";
    tier2age[249]="73.50";
    tier2age[250]="73.5";
    tier2age[251]="73.75";
    tier2age[252]="74";
    tier2age[253]="74.00";
    tier2age[254]="74.0";
    tier2age[255]="74.25";
    tier2age[256]="74.50";
    tier2age[257]="74.5";
    tier2age[258]="74.75";
    tier2age[259]="75";
    tier2age[260]="75.00";
    tier2age[261]="75.0";
    tier2age[262]="75.25";
    tier2age[263]="75.50";
    tier2age[264]="75.5";
    tier2age[265]="75.75";
    tier2age[266]="76";
    tier2age[267]="76.00";
    tier2age[268]="76.0";
    tier2age[269]="76.25";
    tier2age[270]="76.50";
    tier2age[271]="76.5";
    tier2age[272]="76.75";
    tier2age[273]="77";
    tier2age[274]="77.00";
    tier2age[275]="77.0";
    tier2age[276]="77.25";
    tier2age[277]="77.50";
    tier2age[278]="77.5";
    tier2age[279]="77.75";
    tier2age[280]="78";
    tier2age[281]="78.00";
    tier2age[282]="78.0";
    tier2age[283]="78.25";
    tier2age[284]="78.50";
    tier2age[285]="78.5";
    tier2age[286]="78.75";
    tier2age[287]="79";
    tier2age[288]="79.00";
    tier2age[289]="79.0";
    tier2age[290]="79.25";
    tier2age[291]="79.50";
    tier2age[292]="79.5";
    tier2age[293]="79.75";
    tier2age[294]="80";
    tier2age[295]="80.00";
    tier2age[296]="80.0";
    tier2age[297]="80.25";
    tier2age[298]="80.50";
    tier2age[299]="80.5";
    tier2age[300]="80.75";
    tier2age[301]="81";
    tier2age[302]="81.00";
    tier2age[303]="81.0";
    tier2age[304]="81.25";
    tier2age[305]="81.50";
    tier2age[306]="81.5";
    tier2age[307]="81.75";
    tier2age[308]="82";
    tier2age[309]="82.00";
    tier2age[310]="82.0";
    tier2age[311]="82.25";
    tier2age[312]="82.50";
    tier2age[313]="82.5";
    tier2age[314]="82.75";
    tier2age[315]="83";
    tier2age[316]="83.00";
    tier2age[317]="83.0";
    tier2age[318]="83.25";
    tier2age[319]="83.50";
    tier2age[320]="83.5";
    tier2age[321]="83.75";
    tier2age[322]="84";
    tier2age[323]="84.00";
    tier2age[324]="84.0";
    tier2age[325]="84.25";
    tier2age[326]="84.50";
    tier2age[327]="84.5";
    tier2age[328]="84.75";
    tier2age[329]="85";
    tier2age[330]="85.00";
    tier2age[331]="85.0";
	var tier2factor = new Array(262);
    tier2factor[98]=1.000;
    tier2factor[99]=1.000;
    tier2factor[100]=1.000;
    tier2factor[101]=1.025;
    tier2factor[102]=1.050;
    tier2factor[103]=1.050;
    tier2factor[104]=1.075;
    tier2factor[105]=1.100;
    tier2factor[106]=1.100;
    tier2factor[107]=1.100;
    tier2factor[108]=1.125;
    tier2factor[109]=1.150;
    tier2factor[110]=1.150;
    tier2factor[111]=1.175;
    tier2factor[112]=1.200;
    tier2factor[113]=1.200;
    tier2factor[114]=1.200;
    tier2factor[115]=1.225;
    tier2factor[116]=1.250;
    tier2factor[117]=1.250;
    tier2factor[118]=1.275;
    tier2factor[119]=1.300;
    tier2factor[120]=1.300;
    tier2factor[121]=1.300;
    tier2factor[122]=1.325;
    tier2factor[123]=1.350;
    tier2factor[124]=1.350;
    tier2factor[125]=1.375;
    tier2factor[126]=1.400;
    tier2factor[127]=1.400;
    tier2factor[128]=1.400;
    tier2factor[129]=1.425;
    tier2factor[130]=1.450;
    tier2factor[131]=1.450;
    tier2factor[132]=1.475;
    tier2factor[133]=1.500;
    tier2factor[134]=1.500;
    tier2factor[135]=1.500;
    tier2factor[136]=1.525;
    tier2factor[137]=1.550;
    tier2factor[138]=1.550;
    tier2factor[139]=1.575;
    tier2factor[140]=1.600;
    tier2factor[141]=1.600;
    tier2factor[142]=1.600;
    tier2factor[143]=1.625;
    tier2factor[144]=1.650;
    tier2factor[145]=1.650;
    tier2factor[146]=1.675;
    tier2factor[147]=1.700;
    tier2factor[148]=1.700;
    tier2factor[149]=1.700;
    tier2factor[150]=1.725;
    tier2factor[151]=1.750;
    tier2factor[152]=1.750;
    tier2factor[153]=1.775;
    tier2factor[154]=1.800;
    tier2factor[155]=1.800;
    tier2factor[156]=1.800;
    tier2factor[157]=1.825;
    tier2factor[158]=1.850;
    tier2factor[159]=1.850;
    tier2factor[160]=1.875;
    tier2factor[161]=1.900;
    tier2factor[162]=1.900;
    tier2factor[163]=1.900;
    tier2factor[164]=1.925;
    tier2factor[165]=1.950;
    tier2factor[166]=1.950;
    tier2factor[167]=1.975;
    tier2factor[168]=2.000;
    tier2factor[169]=2.000;
    tier2factor[170]=2.000;
    tier2factor[171]=2.025;
    tier2factor[172]=2.050;
    tier2factor[173]=2.050;
    tier2factor[174]=2.075;
    tier2factor[175]=2.100;
    tier2factor[176]=2.100;
    tier2factor[177]=2.100;
    tier2factor[178]=2.125;
    tier2factor[179]=2.150;
    tier2factor[180]=2.150;
    tier2factor[181]=2.175;
    tier2factor[182]=2.200;
    tier2factor[183]=2.200;
    tier2factor[184]=2.200;
    tier2factor[185]=2.225;
    tier2factor[186]=2.250;
    tier2factor[187]=2.250;
    tier2factor[188]=2.275;
    tier2factor[189]=2.300;
    tier2factor[190]=2.300;
    tier2factor[191]=2.300;
    tier2factor[192]=2.325;
    tier2factor[193]=2.350;
    tier2factor[194]=2.350;
    tier2factor[195]=2.375;
    tier2factor[196]=2.400;
    tier2factor[197]=2.400;
    tier2factor[198]=2.400;
    tier2factor[199]=2.425;
    tier2factor[200]=2.450;
    tier2factor[201]=2.450;
    tier2factor[202]=2.475;
    tier2factor[203]=2.500;
    tier2factor[204]=2.500;
    tier2factor[205]=2.500;
    tier2factor[206]=2.500;
    tier2factor[207]=2.500;
    tier2factor[208]=2.500;
    tier2factor[209]=2.500;
    tier2factor[210]=2.500;
    tier2factor[211]=2.500;
    tier2factor[212]=2.500;
    tier2factor[213]=2.500;
    tier2factor[214]=2.500;
    tier2factor[215]=2.500;
    tier2factor[216]=2.500;
    tier2factor[217]=2.500;
    tier2factor[218]=2.500;
    tier2factor[219]=2.500;
    tier2factor[220]=2.500;
    tier2factor[221]=2.500;
    tier2factor[222]=2.500;
    tier2factor[223]=2.500;
    tier2factor[224]=2.500;
    tier2factor[225]=2.500;
    tier2factor[226]=2.500;
    tier2factor[227]=2.500;
    tier2factor[228]=2.500;
    tier2factor[229]=2.500;
    tier2factor[230]=2.500;
    tier2factor[231]=2.500;
    tier2factor[232]=2.500;
    tier2factor[233]=2.500;
    tier2factor[234]=2.500;
    tier2factor[235]=2.500;
    tier2factor[236]=2.500;
    tier2factor[237]=2.500;
    tier2factor[238]=2.500;
    tier2factor[239]=2.500;
    tier2factor[240]=2.500;
    tier2factor[241]=2.500;
    tier2factor[242]=2.500;
    tier2factor[243]=2.500;
    tier2factor[244]=2.500;
    tier2factor[245]=2.500;
    tier2factor[246]=2.500;
    tier2factor[247]=2.500;
    tier2factor[248]=2.500;
    tier2factor[249]=2.500;
    tier2factor[250]=2.500;
    tier2factor[251]=2.500;
    tier2factor[252]=2.500;
    tier2factor[253]=2.500;
    tier2factor[254]=2.500;
    tier2factor[255]=2.500;
    tier2factor[256]=2.500;
    tier2factor[257]=2.500;
    tier2factor[258]=2.500;
    tier2factor[259]=2.500;
    tier2factor[260]=2.500;
    tier2factor[261]=2.500;
    tier2factor[262]=2.500;
    tier2factor[263]=2.500;
    tier2factor[264]=2.500;
    tier2factor[265]=2.500;
    tier2factor[266]=2.500;
    tier2factor[267]=2.500;
    tier2factor[268]=2.500;
    tier2factor[269]=2.500;
    tier2factor[270]=2.500;
    tier2factor[271]=2.500;
    tier2factor[272]=2.500;
    tier2factor[273]=2.500;
    tier2factor[274]=2.500;
    tier2factor[275]=2.500;
    tier2factor[276]=2.500;
    tier2factor[277]=2.500;
    tier2factor[278]=2.500;
    tier2factor[279]=2.500;
    tier2factor[280]=2.500;
    tier2factor[281]=2.500;
    tier2factor[282]=2.500;
    tier2factor[283]=2.500;
    tier2factor[284]=2.500;
    tier2factor[285]=2.500;
    tier2factor[286]=2.500;
    tier2factor[287]=2.500;
    tier2factor[288]=2.500;
    tier2factor[289]=2.500;
    tier2factor[290]=2.500;
    tier2factor[291]=2.500;
    tier2factor[292]=2.500;
    tier2factor[293]=2.500;
    tier2factor[294]=2.500;
    tier2factor[295]=2.500;
    tier2factor[296]=2.500;
    tier2factor[297]=2.500;
    tier2factor[298]=2.500;
    tier2factor[299]=2.500;
    tier2factor[300]=2.500;
    tier2factor[301]=2.500;
    tier2factor[302]=2.500;
    tier2factor[303]=2.500;
    tier2factor[304]=2.500;
    tier2factor[305]=2.500;
    tier2factor[306]=2.500;
    tier2factor[307]=2.500;
    tier2factor[308]=2.500;
    tier2factor[309]=2.500;
    tier2factor[310]=2.500;
    tier2factor[311]=2.500;
    tier2factor[312]=2.500;
    tier2factor[313]=2.500;
    tier2factor[314]=2.500;
    tier2factor[315]=2.500;
    tier2factor[316]=2.500;
    tier2factor[317]=2.500;
    tier2factor[318]=2.500;
    tier2factor[319]=2.500;
    tier2factor[320]=2.500;
    tier2factor[321]=2.500;
    tier2factor[322]=2.500;
    tier2factor[323]=2.500;
    tier2factor[324]=2.500;
    tier2factor[325]=2.500;
    tier2factor[326]=2.500;
    tier2factor[327]=2.500;
    tier2factor[328]=2.500;
    tier2factor[329]=2.500;
    tier2factor[330]=2.500;
    tier2factor[331]=2.500;
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < tier2age.length; i++) {
		if (tier2age[i] == selectedAge) {
			break;
		}
	}
    
    return tier2factor[i];
}

// Determines and returns a Safety Age Factor to the calling function.
function getSafetyFactor() {
	var safetyage = new Array (332);
    
    
	var safetyfactor = new Array(332);
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < safetyage.length; i++) {
		if (safetyage[i] == selectedAge) {
			break;
		}
	}
    
    return safetyfactor[i];
}
// Determines and returns a Safety3 Age Factor to the calling function.
function getSafety3Factor() {
    
	var safety3age = new Array (332);
    safety3age[0]="38";
    safety3age[1]="38.00";
    safety3age[2]="38.0";
    safety3age[3]="38.25";
    safety3age[4]="38.50";
    safety3age[5]="38.5";
    safety3age[6]="38.75";
    safety3age[7]="39";
    safety3age[8]="39.00";
    safety3age[9]="39.0";
    safety3age[10]="39.25";
    safety3age[11]="39.50";
    safety3age[12]="39.5";
    safety3age[13]="39.75";
    safety3age[14]="40";
    safety3age[15]="40.00";
    safety3age[16]="40.0";
    safety3age[17]="40.25";
    safety3age[18]="40.50";
    safety3age[19]="40.5";
    safety3age[20]="40.75";
    safety3age[21]="41";
    safety3age[22]="41.00";
    safety3age[23]="41.0";
    safety3age[24]="41.25";
    safety3age[25]="41.50";
    safety3age[26]="41.5";
    safety3age[27]="41.75";
    safety3age[28]="42";
    safety3age[29]="42.00";
    safety3age[30]="42.0";
    safety3age[31]="42.25";
    safety3age[32]="42.50";
    safety3age[33]="42.5";
    safety3age[34]="42.75";
    safety3age[35]="43";
    safety3age[36]="43.00";
    safety3age[37]="43.0";
    safety3age[38]="43.25";
    safety3age[39]="43.50";
    safety3age[40]="43.5";
    safety3age[41]="43.75";
    safety3age[42]="44";
    safety3age[43]="44.00";
    safety3age[44]="44.0";
    safety3age[45]="44.25";
    safety3age[46]="44.50";
    safety3age[47]="44.5";
    safety3age[48]="44.75";
    safety3age[49]="45";
    safety3age[50]="45.00";
    safety3age[51]="45.0";
    safety3age[52]="45.25";
    safety3age[53]="45.50";
    safety3age[54]="45.5";
    safety3age[55]="45.75";
    safety3age[56]="46";
    safety3age[57]="46.00";
    safety3age[58]="46.0";
    safety3age[59]="46.25";
    safety3age[60]="46.50";
    safety3age[61]="46.5";
    safety3age[62]="46.75";
    safety3age[63]="47";
    safety3age[64]="47.00";
    safety3age[65]="47.0";
    safety3age[66]="47.25";
    safety3age[67]="47.50";
    safety3age[68]="47.5";
    safety3age[69]="47.75";
    safety3age[70]="48";
    safety3age[71]="48.00";
    safety3age[72]="48.0";
    safety3age[73]="48.25";
    safety3age[74]="48.50";
    safety3age[75]="48.5";
    safety3age[76]="48.75";
    safety3age[77]="49";
    safety3age[78]="49.00";
    safety3age[79]="49.0";
    safety3age[80]="49.25";
    safety3age[81]="49.50";
    safety3age[82]="49.5";
    safety3age[83]="49.75";
    safety3age[84]="50";
    safety3age[85]="50.00";
    safety3age[86]="50.0";
    safety3age[87]="50.25";
    safety3age[88]="50.50";
    safety3age[89]="50.5";
    safety3age[90]="50.75";
    safety3age[91]="51";
    safety3age[92]="51.00";
    safety3age[93]="51.0";
    safety3age[94]="51.25";
    safety3age[95]="51.50";
    safety3age[96]="51.5";
    safety3age[97]="51.75";
    safety3age[98]="52";
    safety3age[99]="52.00";
    safety3age[100]="52.0";
    safety3age[101]="52.25";
    safety3age[102]="52.50";
    safety3age[103]="52.5";
    safety3age[104]="52.75";
    safety3age[105]="53";
    safety3age[106]="53.00";
    safety3age[107]="53.0";
    safety3age[108]="53.25";
    safety3age[109]="53.50";
    safety3age[110]="53.5";
    safety3age[111]="53.75";
    safety3age[112]="54";
    safety3age[113]="54.00";
    safety3age[114]="54.0";
    safety3age[115]="54.25";
    safety3age[116]="54.50";
    safety3age[117]="54.5";
    safety3age[118]="54.75";
    safety3age[119]="55";
    safety3age[120]="55.00";
    safety3age[121]="55.0";
    safety3age[122]="55.25";
    safety3age[123]="55.50";
    safety3age[124]="55.5";
    safety3age[125]="55.75";
    safety3age[126]="56";
    safety3age[127]="56.00";
    safety3age[128]="56.0";
    safety3age[129]="56.25";
    safety3age[130]="56.50";
    safety3age[131]="56.5";
    safety3age[132]="56.75";
    safety3age[133]="57";
    safety3age[134]="57.00";
    safety3age[135]="57.0";
    safety3age[136]="57.25";
    safety3age[137]="57.50";
    safety3age[138]="57.5";
    safety3age[139]="57.75";
    safety3age[140]="58";
    safety3age[141]="58.00";
    safety3age[142]="58.0";
    safety3age[143]="58.25";
    safety3age[144]="58.50";
    safety3age[145]="58.5";
    safety3age[146]="58.75";
    safety3age[147]="59";
    safety3age[148]="59.00";
    safety3age[149]="59.0";
    safety3age[150]="59.25";
    safety3age[151]="59.50";
    safety3age[152]="59.5";
    safety3age[153]="59.75";
    safety3age[154]="60";
    safety3age[155]="60.00";
    safety3age[156]="60.0";
    safety3age[157]="60.25";
    safety3age[158]="60.50";
    safety3age[159]="60.5";
    safety3age[160]="60.75";
    safety3age[161]="61";
    safety3age[162]="61.00";
    safety3age[163]="61.0";
    safety3age[164]="61.25";
    safety3age[165]="61.50";
    safety3age[166]="61.5";
    safety3age[167]="61.75";
    safety3age[168]="62";
    safety3age[169]="62.00";
    safety3age[170]="62.0";
    safety3age[171]="62.25";
    safety3age[172]="62.50";
    safety3age[173]="62.5";
    safety3age[174]="62.75";
    safety3age[175]="63";
    safety3age[176]="63.00";
    safety3age[177]="63.0";
    safety3age[178]="63.25";
    safety3age[179]="63.50";
    safety3age[180]="63.5";
    safety3age[181]="63.75";
    safety3age[182]="64";
    safety3age[183]="64.00";
    safety3age[184]="64.0";
    safety3age[185]="64.25";
    safety3age[186]="64.50";
    safety3age[187]="64.5";
    safety3age[188]="64.75";
    safety3age[189]="65";
    safety3age[190]="65.00";
    safety3age[191]="65.0";
    safety3age[192]="65.25";
    safety3age[193]="65.50";
    safety3age[194]="65.5";
    safety3age[195]="65.75";
    safety3age[196]="66";
    safety3age[197]="66.00";
    safety3age[198]="66.0";
    safety3age[199]="66.25";
    safety3age[200]="66.50";
    safety3age[201]="66.5";
    safety3age[202]="66.75";
    safety3age[203]="67";
    safety3age[204]="67.00";
    safety3age[205]="67.0";
    safety3age[206]="67.25";
    safety3age[207]="67.50";
    safety3age[208]="67.5";
    safety3age[209]="67.75";
    safety3age[210]="68";
    safety3age[211]="68.00";
    safety3age[212]="68.0";
    safety3age[213]="68.25";
    safety3age[214]="68.50";
    safety3age[215]="68.5";
    safety3age[216]="68.75";
    safety3age[217]="69";
    safety3age[218]="69.00";
    safety3age[219]="69.0";
    safety3age[220]="69.25";
    safety3age[221]="69.50";
    safety3age[222]="69.5";
    safety3age[223]="69.75";
    safety3age[224]="70";
    safety3age[225]="70.00";
    safety3age[226]="70.0";
    safety3age[227]="70.25";
    safety3age[228]="70.50";
    safety3age[229]="70.5";
    safety3age[230]="70.75";
    safety3age[231]="71";
    safety3age[232]="71.00";
    safety3age[233]="71.0";
    safety3age[234]="71.25";
    safety3age[235]="71.50";
    safety3age[236]="71.5";
    safety3age[237]="71.75";
    safety3age[238]="72";
    safety3age[239]="72.00";
    safety3age[240]="72.0";
    safety3age[241]="72.25";
    safety3age[242]="72.50";
    safety3age[243]="72.5";
    safety3age[244]="72.75";
    safety3age[245]="73";
    safety3age[246]="73.00";
    safety3age[247]="73.0";
    safety3age[248]="73.25";
    safety3age[249]="73.50";
    safety3age[250]="73.5";
    safety3age[251]="73.75";
    safety3age[252]="74";
    safety3age[253]="74.00";
    safety3age[254]="74.0";
    safety3age[255]="74.25";
    safety3age[256]="74.50";
    safety3age[257]="74.5";
    safety3age[258]="74.75";
    safety3age[259]="75";
    safety3age[260]="75.00";
    safety3age[261]="75.0";
    safety3age[262]="75.25";
    safety3age[263]="75.50";
    safety3age[264]="75.5";
    safety3age[265]="75.75";
    safety3age[266]="76";
    safety3age[267]="76.00";
    safety3age[268]="76.0";
    safety3age[269]="76.25";
    safety3age[270]="76.50";
    safety3age[271]="76.5";
    safety3age[272]="76.75";
    safety3age[273]="77";
    safety3age[274]="77.00";
    safety3age[275]="77.0";
    safety3age[276]="77.25";
    safety3age[277]="77.50";
    safety3age[278]="77.5";
    safety3age[279]="77.75";
    safety3age[280]="78";
    safety3age[281]="78.00";
    safety3age[282]="78.0";
    safety3age[283]="78.25";
    safety3age[284]="78.50";
    safety3age[285]="78.5";
    safety3age[286]="78.75";
    safety3age[287]="79";
    safety3age[288]="79.00";
    safety3age[289]="79.0";
    safety3age[290]="79.25";
    safety3age[291]="79.50";
    safety3age[292]="79.5";
    safety3age[293]="79.75";
    safety3age[294]="80";
    safety3age[295]="80.00";
    safety3age[296]="80.0";
    safety3age[297]="80.25";
    safety3age[298]="80.50";
    safety3age[299]="80.5";
    safety3age[300]="80.75";
    safety3age[301]="81";
    safety3age[302]="81.00";
    safety3age[303]="81.0";
    safety3age[304]="81.25";
    safety3age[305]="81.50";
    safety3age[306]="81.5";
    safety3age[307]="81.75";
    safety3age[308]="82";
    safety3age[309]="82.00";
    safety3age[310]="82.0";
    safety3age[311]="82.25";
    safety3age[312]="82.50";
    safety3age[313]="82.5";
    safety3age[314]="82.75";
    safety3age[315]="83";
    safety3age[316]="83.00";
    safety3age[317]="83.0";
    safety3age[318]="83.25";
    safety3age[319]="83.50";
    safety3age[320]="83.5";
    safety3age[321]="83.75";
    safety3age[322]="84";
    safety3age[323]="84.00";
    
    safety3age[324]="84.0";
    safety3age[325]="84.25";
    safety3age[326]="84.50";
    safety3age[327]="84.5";
    safety3age[328]="84.75";
    safety3age[329]="85";
    safety3age[330]="85.00";
    safety3age[331]="85.0";
    
    
    
	var safety3factor = new Array(332);
    safety3factor[0]=0.6258000001;
    safety3factor[1]=0.6258000001;
    safety3factor[2]=0.6258000001;
    safety3factor[3]=0.6258000001;
    safety3factor[4]=0.6258000001;
    safety3factor[5]=0.6258000001;
    safety3factor[6]=0.6258000001;
    safety3factor[7]=0.6258000001;
    safety3factor[8]=0.6258000001;
    safety3factor[9]=0.6258000001;
    safety3factor[10]=0.6258000001;
    safety3factor[11]=0.6258000001;
    safety3factor[12]=0.6258000001;
    safety3factor[13]=0.6258000001;
    safety3factor[14]=0.6258000001;
    safety3factor[15]=0.6258000001;
    safety3factor[16]=0.6258000001;
    safety3factor[17]=0.6258000001;
    safety3factor[18]=0.6258000001;
    safety3factor[19]=0.6258000001;
    safety3factor[20]=0.6258000001;
    safety3factor[21]=0.6258000001;
    safety3factor[22]=0.6258000001;
    safety3factor[23]=0.6258000001;
    safety3factor[24]=0.6350000001;
    safety3factor[25]=0.6442000001;
    safety3factor[26]=0.6442000001;
    safety3factor[27]=0.6533000001;
    safety3factor[28]=0.6625000001;
    safety3factor[29]=0.6625000001;
    safety3factor[30]=0.6625000001;
    safety3factor[31]=0.6720000001;
    safety3factor[32]=0.6814000001;
    safety3factor[33]=0.6814000001;
    safety3factor[34]=0.6909000001;
    safety3factor[35]=0.7004000001;
    safety3factor[36]=0.7004000001;
    safety3factor[37]=0.7004000001;
    safety3factor[38]=0.7102000001;
    safety3factor[39]=0.7200000001;
    safety3factor[40]=0.7200000001;
    safety3factor[41]=0.7299000001;
    safety3factor[42]=0.7397000001;
    safety3factor[43]=0.7397000001;
    safety3factor[44]=0.7397000001;
    safety3factor[45]=0.7499000001;
    safety3factor[46]=0.7601000001;
    safety3factor[47]=0.7601000001;
    safety3factor[48]=0.7703000001;
    safety3factor[49]=0.7805000001;
    safety3factor[50]=0.7805000001;
    safety3factor[51]=0.7805000001;
    safety3factor[52]=0.7910000001;
    safety3factor[53]=0.8016000001;
    safety3factor[54]=0.8016000001;
    safety3factor[55]=0.8021000001;
    safety3factor[56]=0.8226000001;
    safety3factor[57]=0.8226000001;
    safety3factor[58]=0.8226000001;
    safety3factor[59]=0.8339000001;
    safety3factor[60]=0.8452000001;
    safety3factor[61]=0.8452000001;
    safety3factor[62]=0.8565000001;
    safety3factor[63]=0.8678000001;
    safety3factor[64]=0.8678000001;
    safety3factor[65]=0.8678000001;
    safety3factor[66]=0.8780000001;
    safety3factor[67]=0.8882000001;
    safety3factor[68]=0.8882000001;
    safety3factor[69]=0.8983000001;
    safety3factor[70]=0.9085000001;
    safety3factor[71]=0.9085000001;
    safety3factor[72]=0.9085000001;
    safety3factor[73]=0.9194000001;
    safety3factor[74]=0.9304000001;
    safety3factor[75]=0.9304000001;
    safety3factor[76]=0.94130000001;
    safety3factor[77]=0.9522000001;
    safety3factor[78]=0.9522000001;
    safety3factor[79]=0.9522000001;
    safety3factor[80]=0.9641000001;
    safety3factor[81]=0.9761000001;
    safety3factor[82]=0.9761000001;
    safety3factor[83]=0.9880000001;
    safety3factor[84]=1.0000000001;
    safety3factor[85]=1.0000000001;
    safety3factor[86]=1.0000000001;
    safety3factor[87]=1.0000000001;
    safety3factor[88]=1.0000000001;
    safety3factor[89]=1.0000000001;
    safety3factor[90]=1.0000000001;
    safety3factor[91]=1.0000000001;
    safety3factor[92]=1.0000000001;
    safety3factor[93]=1.0000000001;
    safety3factor[94]=1.0000000001;
    safety3factor[95]=1.0000000001;
    safety3factor[96]=1.0000000001;
    safety3factor[97]=1.0000000001;
    safety3factor[98]=1.0000000001;
    safety3factor[99]=1.0000000001;
    safety3factor[100]=1.0000000001;
    safety3factor[101]=1.0000000001;
    safety3factor[102]=1.0000000001;
    safety3factor[103]=1.0000000001;
    safety3factor[104]=1.0000000001;
    safety3factor[105]=1.0000000001;
    safety3factor[106]=1.0000000001;
    safety3factor[107]=1.0000000001;
    safety3factor[108]=1.0000000001;
    safety3factor[109]=1.0000000001;
    safety3factor[110]=1.0000000001;
    safety3factor[111]=1.0000000001;
    safety3factor[112]=1.0000000001;
    safety3factor[113]=1.0000000001;
    safety3factor[114]=1.0000000001;
    safety3factor[115]=1.0000000001;
    safety3factor[116]=1.0000000001;
    safety3factor[117]=1.0000000001;
    safety3factor[118]=1.0000000001;
    safety3factor[119]=1.0000000001;
    safety3factor[120]=1.0000000001;
    safety3factor[121]=1.0000000001;
    safety3factor[122]=1.0000000001;
    safety3factor[123]=1.0000000001;
    safety3factor[124]=1.0000000001;
    safety3factor[125]=1.0000000001;
    safety3factor[126]=1.0000000001;
    safety3factor[127]=1.0000000001;
    safety3factor[128]=1.0000000001;
    safety3factor[129]=1.0000000001;
    safety3factor[130]=1.0000000001;
    safety3factor[131]=1.0000000001;
    safety3factor[132]=1.0000000001;
    safety3factor[133]=1.0000000001;
    safety3factor[134]=1.0000000001;
    safety3factor[135]=1.0000000001;
    safety3factor[136]=1.0000000001;
    safety3factor[137]=1.0000000001;
    safety3factor[138]=1.0000000001;
    safety3factor[139]=1.0000000001;
    safety3factor[140]=1.0000000001;
    safety3factor[141]=1.0000000001;
    safety3factor[142]=1.0000000001;
    safety3factor[143]=1.0000000001;
    safety3factor[144]=1.0000000001;
    safety3factor[145]=1.0000000001;
    safety3factor[146]=1.0000000001;
    safety3factor[147]=1.0000000001;
    safety3factor[148]=1.0000000001;
    safety3factor[149]=1.0000000001;
    safety3factor[150]=1.0000000001;
    safety3factor[151]=1.0000000001;
    safety3factor[152]=1.0000000001;
    safety3factor[153]=1.0000000001;
    safety3factor[154]=1.0000000001;
    safety3factor[155]=1.0000000001;
    safety3factor[156]=1.0000000001;
    safety3factor[157]=1.0000000001;
    safety3factor[158]=1.0000000001;
    safety3factor[159]=1.0000000001;
    safety3factor[160]=1.0000000001;
    safety3factor[161]=1.0000000001;
    safety3factor[162]=1.0000000001;
    safety3factor[163]=1.0000000001;
    safety3factor[164]=1.0000000010;
    safety3factor[165]=1.0000000001;
    safety3factor[166]=1.0000000001;
    safety3factor[167]=1.0000000001;
    safety3factor[168]=1.0000000001;
    safety3factor[169]=1.0000000001;
    safety3factor[170]=1.0000000001;
    safety3factor[171]=1.0000000001;
    safety3factor[172]=1.0000000001;
    safety3factor[173]=1.0000000001;
    safety3factor[174]=1.0000000001;
    safety3factor[175]=1.0000000001;
    safety3factor[176]=1.0000000001;
    safety3factor[177]=1.0000000001;
    safety3factor[178]=1.0000000001;
    safety3factor[179]=1.0000000001;
    safety3factor[180]=1.0000000001;
    safety3factor[181]=1.0000000001;
    safety3factor[182]=1.0000000001;
    safety3factor[183]=1.0000000001;
    safety3factor[184]=1.0000000001;
    safety3factor[185]=1.0000000001;
    safety3factor[186]=1.0000000001;
    safety3factor[187]=1.0000000001;
    safety3factor[188]=1.0000000001;
    safety3factor[189]=1.0000000001;
    safety3factor[190]=1.0000000001;
    safety3factor[191]=1.0000000001;
    safety3factor[192]=1.0000000001;
    safety3factor[193]=1.0000000001;
    safety3factor[194]=1.0000000001;
    safety3factor[195]=1.0000000001;
    safety3factor[196]=1.0000000001;
    safety3factor[197]=1.0000000001;
    safety3factor[198]=1.0000000001;
    safety3factor[199]=1.0000000001;
    safety3factor[200]=1.0000000001;
    safety3factor[201]=1.0000000001;
    safety3factor[202]=1.0000000001;
    safety3factor[203]=1.0000000001;
    safety3factor[204]=1.0000000001;
    safety3factor[205]=1.0000000001;
    safety3factor[206]=1.0000000001;
    safety3factor[207]=1.0000000001;
    safety3factor[208]=1.0000000001;
    safety3factor[209]=1.0000000001;
    safety3factor[210]=1.0000000001;
    safety3factor[211]=1.0000000001;
    safety3factor[212]=1.0000000001;
    safety3factor[213]=1.0000000001;
    safety3factor[214]=1.0000000001;
    safety3factor[215]=1.0000000001;
    safety3factor[216]=1.0000000001;
    safety3factor[217]=1.0000000001;
    safety3factor[218]=1.0000000001;
    safety3factor[219]=1.0000000001;
    safety3factor[220]=1.0000000001;
    safety3factor[221]=1.0000000001;
    safety3factor[222]=1.0000000001;
    safety3factor[223]=1.0000000001;
    safety3factor[224]=1.0000000001;
    safety3factor[225]=1.0000000001;
    safety3factor[226]=1.0000000001;
    safety3factor[227]=1.0000000001;
    safety3factor[228]=1.0000000001;
    safety3factor[229]=1.0000000001;
    safety3factor[230]=1.0000000001;
    safety3factor[231]=1.0000000001;
    safety3factor[232]=1.0000000001;
    safety3factor[233]=1.0000000001;
    safety3factor[234]=1.0000000001;
    safety3factor[235]=1.0000000001;
    safety3factor[236]=1.0000000001;
    safety3factor[237]=1.0000000001;
    safety3factor[238]=1.0000000001;
    safety3factor[239]=1.0000000001;
    safety3factor[240]=1.0000000001;
    safety3factor[241]=1.0000000001;
    safety3factor[242]=1.0000000001;
    safety3factor[243]=1.0000000001;
    safety3factor[244]=1.0000000001;
    safety3factor[245]=1.0000000001;
    safety3factor[246]=1.0000000001;
    safety3factor[247]=1.0000000001;
    safety3factor[248]=1.0000000001;
    safety3factor[249]=1.0000000001;
    safety3factor[250]=1.0000000001;
    safety3factor[251]=1.0000000001;
    safety3factor[252]=1.0000000001;
    safety3factor[253]=1.0000000001;
    safety3factor[254]=1.0000000001;
    safety3factor[255]=1.0000000001;
    safety3factor[256]=1.0000000001;
    safety3factor[257]=1.0000000001;
    safety3factor[258]=1.0000000001;
    safety3factor[259]=1.0000000001;
    safety3factor[260]=1.0000000001;
    safety3factor[261]=1.0000000001;
    safety3factor[262]=1.0000000001;
    safety3factor[263]=1.0000000001;
    safety3factor[264]=1.0000000010;
    safety3factor[265]=1.0000000001;
    safety3factor[266]=1.0000000001;
    safety3factor[267]=1.0000000001;
    safety3factor[268]=1.0000000001;
    safety3factor[269]=1.0000000001;
    safety3factor[270]=1.0000000001;
    safety3factor[271]=1.0000000001;
    safety3factor[272]=1.0000000001;
    safety3factor[273]=1.0000000001;
    safety3factor[274]=1.0000000001;
    safety3factor[275]=1.0000000001;
    safety3factor[276]=1.0000000001;
    safety3factor[277]=1.0000000001;
    safety3factor[278]=1.0000000001;
    safety3factor[279]=1.0000000001;
    safety3factor[280]=1.0000000001;
    safety3factor[281]=1.0000000001;
    safety3factor[282]=1.0000000001;
    safety3factor[283]=1.0000000001;
    safety3factor[284]=1.0000000001;
    safety3factor[285]=1.0000000001;
    safety3factor[286]=1.0000000001;
    safety3factor[287]=1.0000000001;
    safety3factor[288]=1.0000000001;
    safety3factor[289]=1.0000000001;
    safety3factor[290]=1.0000000001;
    safety3factor[291]=1.0000000001;
    safety3factor[292]=1.0000000001;
    safety3factor[293]=1.0000000001;
    safety3factor[294]=1.0000000001;
    safety3factor[295]=1.0000000001;
    safety3factor[296]=1.0000000001;
    safety3factor[297]=1.0000000001;
    safety3factor[298]=1.0000000001;
    safety3factor[299]=1.0000000001;
    safety3factor[300]=1.0000000001;
    safety3factor[301]=1.0000000001;
    safety3factor[302]=1.0000000001;
    safety3factor[303]=1.0000000001;
    safety3factor[304]=1.0000000001;
    safety3factor[305]=1.0000000001;
    safety3factor[306]=1.0000000001;
    safety3factor[307]=1.0000000001;
    safety3factor[308]=1.0000000001;
    safety3factor[309]=1.0000000001;
    safety3factor[310]=1.0000000001;
    safety3factor[311]=1.0000000001;
    safety3factor[312]=1.0000000001;
    safety3factor[313]=1.0000000001;
    safety3factor[314]=1.0000000001;
    safety3factor[315]=1.0000000001;
    safety3factor[316]=1.0000000001;
    safety3factor[317]=1.0000000001;
    safety3factor[318]=1.0000000001;
    safety3factor[319]=1.0000000001;
    safety3factor[320]=1.0000000001;
    safety3factor[321]=1.0000000001;
    safety3factor[322]=1.0000000001;
    safety3factor[323]=1.0000000001;
    safety3factor[324]=1.0000000001;
    safety3factor[325]=1.0000000001;
    safety3factor[326]=1.0000000001;
    safety3factor[327]=1.0000000001;
    safety3factor[328]=1.0000000001;
    safety3factor[329]=1.0000000001;
    safety3factor[330]=1.0000000001;
    safety3factor[331]=1.0000000001;
    
    
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < safety3age.length; i++) {
		if (safety3age[i] == selectedAge) {
			break;
		}
	}
    
    return safety3factor[i];
}

// Determines and returns a tier360 Age Factor to the calling function.
function gettier360Factor() {
    
	var tier360age = new Array (261);
    
    
	var tier360factor = new Array(261);
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < tier360age.length; i++) {
		if (tier360age[i] == selectedAge) {
			break;
		}
	}
    return tier360factor[i];
}

// Determines and returns a tier2755 Age Factor to the calling function.
function gettier2755Factor() {
    
	var tier2755age = new Array (261);
    
	var tier2755factor = new Array(261);
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < tier2755age.length; i++) {
		if (tier2755age[i] == selectedAge) {
			break;
		}
	}
    
    return tier2755factor[i];
}

// Determines and returns a tier2555 Age Factor to the calling function.
function gettier2555Factor() {
    
	var tier2555age = new Array (261);
    
    
	var tier2555factor = new Array(261);
    
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < tier2555age.length; i++) {
		if (tier2555age[i] == selectedAge) {
			break;
		}
	}
    return tier2555factor[i];
}

// Determines and returns a tier2055 Age Factor to the calling function.
function gettier2055Factor() {
    
	var tier2055age = new Array (231);
    tier2055age[0]="48";
    tier2055age[1]="48.00";
    tier2055age[2]="48.0";
    tier2055age[3]="48.25";
    tier2055age[4]="48.50";
    tier2055age[5]="48.5";
    tier2055age[6]="48.75";
    tier2055age[7]="49";
    tier2055age[8]="49.00";
    tier2055age[9]="49.0";
    tier2055age[10]="49.25";
    tier2055age[11]="49.50";
    tier2055age[12]="49.5";
    tier2055age[13]="49.75";
    tier2055age[14]="50";
    tier2055age[15]="50.00";
    tier2055age[16]="50.0";
    tier2055age[17]="50.25";
    tier2055age[18]="50.50";
    tier2055age[19]="50.5";
    tier2055age[20]="50.75";
    tier2055age[21]="51";
    tier2055age[22]="51.00";
    tier2055age[23]="51.0";
    tier2055age[24]="51.25";
    tier2055age[25]="51.50";
    tier2055age[26]="51.5";
    tier2055age[27]="51.75";
    tier2055age[28]="52";
    tier2055age[29]="52.00";
    tier2055age[30]="52.0";
    tier2055age[31]="52.25";
    tier2055age[32]="52.50";
    tier2055age[33]="52.5";
    tier2055age[34]="52.75";
    tier2055age[35]="53";
    tier2055age[36]="53.00";
    tier2055age[37]="53.0";
    tier2055age[38]="53.25";
    tier2055age[39]="53.50";
    tier2055age[40]="53.5";
    tier2055age[41]="53.75";
    tier2055age[42]="54";
    tier2055age[43]="54.00";
    tier2055age[44]="54.0";
    tier2055age[45]="54.25";
    tier2055age[46]="54.50";
    tier2055age[47]="54.5";
    tier2055age[48]="54.75";
    tier2055age[49]="55";
    tier2055age[50]="55.00";
    tier2055age[51]="55.0";
    tier2055age[52]="55.25";
    tier2055age[53]="55.50";
    tier2055age[54]="55.5";
    tier2055age[55]="55.75";
    tier2055age[56]="56";
    tier2055age[57]="56.00";
    tier2055age[58]="56.0";
    tier2055age[59]="56.25";
    tier2055age[60]="56.50";
    tier2055age[61]="56.5";
    tier2055age[62]="56.75";
    tier2055age[63]="57";
    tier2055age[64]="57.00";
    tier2055age[65]="57.0";
    tier2055age[66]="57.25";
    tier2055age[67]="57.50";
    tier2055age[68]="57.5";
    tier2055age[69]="57.75";
    tier2055age[70]="58";
    tier2055age[71]="58.00";
    tier2055age[72]="58.0";
    tier2055age[73]="58.25";
    tier2055age[74]="58.50";
    tier2055age[75]="58.5";
    tier2055age[76]="58.75";
    tier2055age[77]="59";
    tier2055age[78]="59.00";
    tier2055age[79]="59.0";
    tier2055age[80]="59.25";
    tier2055age[81]="59.50";
    tier2055age[82]="59.5";
    tier2055age[83]="59.75";
    tier2055age[84]="60";
    tier2055age[85]="60.00";
    tier2055age[86]="60.0";
    tier2055age[87]="60.25";
    tier2055age[88]="60.50";
    tier2055age[89]="60.5";
    tier2055age[90]="60.75";
    tier2055age[91]="61";
    tier2055age[92]="61.00";
    tier2055age[93]="61.0";
    tier2055age[94]="61.25";
    tier2055age[95]="61.50";
    tier2055age[96]="61.5";
    tier2055age[97]="61.75";
    tier2055age[98]="62";
    tier2055age[99]="62.00";
    tier2055age[100]="62.0";
    tier2055age[101]="62.25";
    tier2055age[102]="62.50";
    tier2055age[103]="62.5";
    tier2055age[104]="62.75";
    tier2055age[105]="63";
    tier2055age[106]="63.00";
    tier2055age[107]="63.0";
    tier2055age[108]="63.25";
    tier2055age[109]="63.50";
    tier2055age[110]="63.5";
    tier2055age[111]="63.75";
    tier2055age[112]="64";
    tier2055age[113]="64.00";
    tier2055age[114]="64.0";
    tier2055age[115]="64.25";
    tier2055age[116]="64.50";
    tier2055age[117]="64.5";
    tier2055age[118]="64.75";
    tier2055age[119]="65";
    tier2055age[120]="65.00";
    tier2055age[121]="65.0";
    tier2055age[122]="65.25";
    tier2055age[123]="65.50";
    tier2055age[124]="65.5";
    tier2055age[125]="65.75";
    tier2055age[126]="66";
    tier2055age[127]="66.00";
    tier2055age[128]="66.0";
    tier2055age[129]="66.25";
    tier2055age[130]="66.50";
    tier2055age[131]="66.5";
    tier2055age[132]="66.75";
    tier2055age[133]="67";
    tier2055age[134]="67.00";
    tier2055age[135]="67.0";
    tier2055age[136]="67.25";
    tier2055age[137]="67.50";
    tier2055age[138]="67.5";
    tier2055age[139]="67.75";
    tier2055age[140]="68";
    tier2055age[141]="68.00";
    tier2055age[142]="68.0";
    tier2055age[143]="68.25";
    tier2055age[144]="68.50";
    tier2055age[145]="68.5";
    tier2055age[146]="68.75";
    tier2055age[147]="69";
    tier2055age[148]="69.00";
    tier2055age[149]="69.0";
    tier2055age[150]="69.25";
    tier2055age[151]="69.50";
    tier2055age[152]="69.5";
    tier2055age[153]="69.75";
    tier2055age[154]="70";
    tier2055age[155]="70.00";
    tier2055age[156]="70.0";
    tier2055age[157]="70.25";
    tier2055age[158]="70.50";
    tier2055age[159]="70.5";
    tier2055age[160]="70.75";
    tier2055age[161]="71";
    tier2055age[162]="71.00";
    tier2055age[163]="71.0";
    tier2055age[164]="71.25";
    tier2055age[165]="71.50";
    tier2055age[166]="71.5";
    tier2055age[167]="71.75";
    tier2055age[168]="72";
    tier2055age[169]="72.00";
    tier2055age[170]="72.0";
    tier2055age[171]="72.25";
    tier2055age[172]="72.50";
    tier2055age[173]="72.5";
    tier2055age[174]="72.75";
    tier2055age[175]="73";
    tier2055age[176]="73.00";
    tier2055age[177]="73.0";
    tier2055age[178]="73.25";
    tier2055age[179]="73.50";
    tier2055age[180]="73.5";
    tier2055age[181]="73.75";
    tier2055age[182]="74";
    tier2055age[183]="74.00";
    tier2055age[184]="74.0";
    tier2055age[185]="74.25";
    tier2055age[186]="74.50";
    tier2055age[187]="74.5";
    tier2055age[188]="74.75";
    tier2055age[189]="75";
    tier2055age[190]="75.00";
    tier2055age[191]="75.0";
    tier2055age[192]="75.25";
    tier2055age[193]="75.50";
    tier2055age[194]="75.5";
    tier2055age[195]="75.75";
    tier2055age[196]="76";
    tier2055age[197]="76.00";
    tier2055age[198]="76.0";
    tier2055age[199]="76.25";
    tier2055age[200]="76.50";
    tier2055age[201]="76.5";
    tier2055age[202]="76.75";
    tier2055age[203]="77";
    tier2055age[204]="77.00";
    tier2055age[205]="77.0";
    tier2055age[206]="77.25";
    tier2055age[207]="77.50";
    tier2055age[208]="77.5";
    tier2055age[209]="77.75";
    tier2055age[210]="78";
    tier2055age[211]="78.00";
    tier2055age[212]="78.0";
    tier2055age[213]="78.25";
    tier2055age[214]="78.50";
    tier2055age[215]="78.5";
    tier2055age[216]="78.75";
    tier2055age[217]="79";
    tier2055age[218]="79.00";
    tier2055age[219]="79.0";
    tier2055age[220]="79.25";
    tier2055age[221]="79.50";
    tier2055age[222]="79.5";
    tier2055age[223]="79.75";
    tier2055age[224]="80";
    tier2055age[225]="80.00";
    tier2055age[226]="80.0";
    tier2055age[227]="80.25";
    tier2055age[228]="80.50";
    tier2055age[229]="80.5";
    tier2055age[230]="80.75";
    
	var tier2055factor = new Array(231);
    tier2055factor[0]=0.74540000001;
    tier2055factor[1]=0.74540000001;
    tier2055factor[2]=0.74540000001;
    tier2055factor[3]=0.74540000001;
    tier2055factor[4]=0.74540000001;
    tier2055factor[5]=0.74540000001;
    tier2055factor[6]=0.74540000001;
    tier2055factor[7]=0.74540000001;
    tier2055factor[8]=0.74540000001;
    tier2055factor[9]=0.74540000001;
    tier2055factor[10]=0.74540000001;
    tier2055factor[11]=0.74540000001;
    tier2055factor[12]=0.74540000001;
    tier2055factor[13]=0.74540000001;
    tier2055factor[14]=0.74540000001;
    tier2055factor[15]=0.74540000001;
    tier2055factor[16]=0.74540000001;
    tier2055factor[17]=0.75610000001;
    tier2055factor[18]=0.76680000001;
    tier2055factor[19]=0.76680000001;
    tier2055factor[20]=0.77750000001;
    tier2055factor[21]=0.78820000001;
    tier2055factor[22]=0.78820000001;
    tier2055factor[23]=0.78820000001;
    tier2055factor[24]=0.79980000001;
    tier2055factor[25]=0.81140000001;
    tier2055factor[26]=0.81140000001;
    tier2055factor[27]=0.82300000001;
    tier2055factor[28]=0.83460000001;
    tier2055factor[29]=0.83460000001;
    tier2055factor[30]=0.83460000001;
    tier2055factor[31]=0.84720000001;
    tier2055factor[32]=0.85980000001;
    tier2055factor[33]=0.85980000001;
    tier2055factor[34]=0.87240000001;
    tier2055factor[35]=0.88500000001;
    tier2055factor[36]=0.88500000001;
    tier2055factor[37]=0.88500000001;
    tier2055factor[38]=0.89870000001;
    tier2055factor[39]=0.91250000001;
    tier2055factor[40]=0.91250000001;
    tier2055factor[41]=0.92620000001;
    tier2055factor[42]=0.93990000001;
    tier2055factor[43]=0.93990000001;
    tier2055factor[44]=0.93990000001;
    tier2055factor[45]=0.95490000001;
    tier2055factor[46]=0.96990000001;
    tier2055factor[47]=0.96990000001;
    tier2055factor[48]=0.98490000001;
    tier2055factor[49]=1.00000000001;
    tier2055factor[50]=1.00000000001;
    tier2055factor[51]=1.00000000001;
    tier2055factor[52]=1.01110000001;
    tier2055factor[53]=1.02230000001;
    tier2055factor[54]=1.02230000001;
    tier2055factor[55]=1.03350000001;
    tier2055factor[56]=1.04470000001;
    tier2055factor[57]=1.04470000001;
    tier2055factor[58]=1.04470000001;
    tier2055factor[59]=1.05970000001;
    tier2055factor[60]=1.07470000001;
    tier2055factor[61]=1.07470000001;
    tier2055factor[62]=1.08980000001;
    tier2055factor[63]=1.10480000001;
    tier2055factor[64]=1.10480000001;
    tier2055factor[65]=1.10480000001;
    tier2055factor[66]=1.12070000001;
    tier2055factor[67]=1.13670000001;
    tier2055factor[68]=1.13670000001;
    tier2055factor[69]=1.15260000001;
    tier2055factor[70]=1.16860000001;
    tier2055factor[71]=1.16860000001;
    tier2055factor[72]=1.16860000001;
    tier2055factor[73]=1.18550000001;
    tier2055factor[74]=1.20250000001;
    tier2055factor[75]=1.20250000001;
    tier2055factor[76]=1.21950000001;
    tier2055factor[77]=1.23650000001;
    tier2055factor[78]=1.23650000001;
    tier2055factor[79]=1.23650000001;
    tier2055factor[80]=1.25470000001;
    tier2055factor[81]=1.27290000001;
    tier2055factor[82]=1.27290000001;
    tier2055factor[83]=1.29110000001;
    tier2055factor[84]=1.30930000001;
    tier2055factor[85]=1.30930000001;
    tier2055factor[86]=1.30930000001;
    tier2055factor[87]=1.32210000001;
    tier2055factor[88]=1.33500000001;
    tier2055factor[89]=1.33500000001;
    tier2055factor[90]=1.34790000001;
    tier2055factor[91]=1.36080000001;
    tier2055factor[92]=1.36080000001;
    tier2055factor[93]=1.36080000001;
    tier2055factor[94]=1.37360000001;
    tier2055factor[95]=1.38650000001;
    tier2055factor[96]=1.38650000001;
    tier2055factor[97]=1.39940000001;
    tier2055factor[98]=1.41230000001;
    tier2055factor[99]=1.41230000001;
    tier2055factor[100]=1.41230000001;
    tier2055factor[101]=1.42510000001;
    tier2055factor[102]=1.43800000001;
    tier2055factor[103]=1.43800000001;
    tier2055factor[104]=1.45090000001;
    tier2055factor[105]=1.46380000001;
    tier2055factor[106]=1.46380000001;
    tier2055factor[107]=1.46380000001;
    tier2055factor[108]=1.47660000001;
    tier2055factor[109]=1.48950000001;
    tier2055factor[110]=1.48950000001;
    tier2055factor[111]=1.50240000001;
    tier2055factor[112]=1.51530000001;
    tier2055factor[113]=1.51530000001;
    tier2055factor[114]=1.51530000001;
    tier2055factor[115]=1.52810000001;
    tier2055factor[116]=1.54100000001;
    tier2055factor[117]=1.54100000001;
    tier2055factor[118]=1.55390000001;
    tier2055factor[119]=1.56680000001;
    tier2055factor[120]=1.56680000001;
    tier2055factor[121]=1.56680000001;
    tier2055factor[122]=1.56680000001;
    tier2055factor[123]=1.56680000001;
    tier2055factor[124]=1.56680000001;
    tier2055factor[125]=1.56680000001;
    tier2055factor[126]=1.56680000001;
    tier2055factor[127]=1.56680000001;
    tier2055factor[128]=1.56680000001;
    tier2055factor[129]=1.56680000001;
    tier2055factor[130]=1.56680000001;
    tier2055factor[131]=1.56680000001;
    tier2055factor[132]=1.56680000001;
    tier2055factor[133]=1.56680000001;
    tier2055factor[134]=1.56680000001;
    tier2055factor[135]=1.56680000001;
    tier2055factor[136]=1.56680000001;
    tier2055factor[137]=1.56680000001;
    tier2055factor[138]=1.56680000001;
    tier2055factor[139]=1.56680000001;
    tier2055factor[140]=1.56680000001;
    tier2055factor[141]=1.56680000001;
    tier2055factor[142]=1.56680000001;
    tier2055factor[143]=1.56680000001;
    tier2055factor[144]=1.56680000001;
    tier2055factor[145]=1.56680000001;
    tier2055factor[146]=1.56680000001;
    tier2055factor[147]=1.56680000001;
    tier2055factor[148]=1.56680000001;
    tier2055factor[149]=1.56680000001;
    tier2055factor[150]=1.56680000001;
    tier2055factor[151]=1.56680000001;
    tier2055factor[152]=1.56680000001;
    tier2055factor[153]=1.56680000001;
    tier2055factor[154]=1.56680000001;
    tier2055factor[155]=1.56680000001;
    tier2055factor[156]=1.56680000001;
    tier2055factor[157]=1.56680000001;
    tier2055factor[158]=1.56680000001;
    tier2055factor[159]=1.56680000001;
    tier2055factor[160]=1.56680000001;
    tier2055factor[161]=1.56680000001;
    tier2055factor[162]=1.56680000001;
    tier2055factor[163]=1.56680000001;
    tier2055factor[164]=1.56680000001;
    tier2055factor[165]=1.56680000001;
    tier2055factor[166]=1.56680000001;
    tier2055factor[167]=1.56680000001;
    tier2055factor[168]=1.56680000001;
    tier2055factor[169]=1.56680000001;
    tier2055factor[170]=1.56680000001;
    tier2055factor[171]=1.56680000001;
    tier2055factor[172]=1.56680000001;
    tier2055factor[173]=1.56680000001;
    tier2055factor[174]=1.56680000001;
    tier2055factor[175]=1.56680000001;
    tier2055factor[176]=1.56680000001;
    tier2055factor[177]=1.56680000001;
    tier2055factor[178]=1.56680000001;
    tier2055factor[179]=1.56680000001;
    tier2055factor[180]=1.56680000001;
    tier2055factor[181]=1.56680000001;
    tier2055factor[182]=1.56680000001;
    tier2055factor[183]=1.56680000001;
    tier2055factor[184]=1.56680000001;
    tier2055factor[185]=1.56680000001;
    tier2055factor[186]=1.56680000001;
    tier2055factor[187]=1.56680000001;
    tier2055factor[188]=1.56680000001;
    tier2055factor[189]=1.56680000001;
    tier2055factor[190]=1.56680000001;
    tier2055factor[191]=1.56680000001;
    tier2055factor[192]=1.56680000001;
    tier2055factor[193]=1.56680000001;
    tier2055factor[194]=1.56680000001;
    tier2055factor[195]=1.56680000001;
    tier2055factor[196]=1.56680000001;
    tier2055factor[197]=1.56680000001;
    tier2055factor[198]=1.56680000001;
    tier2055factor[199]=1.56680000001;
    tier2055factor[200]=1.56680000001;
    tier2055factor[201]=1.56680000001;
    tier2055factor[202]=1.56680000001;
    tier2055factor[203]=1.56680000001;
    tier2055factor[204]=1.56680000001;
    tier2055factor[205]=1.56680000001;
    tier2055factor[206]=1.56680000001;
    tier2055factor[207]=1.56680000001;
    tier2055factor[208]=1.56680000001;
    tier2055factor[209]=1.56680000001;
    tier2055factor[210]=1.56680000001;
    tier2055factor[211]=1.56680000001;
    tier2055factor[212]=1.56680000001;
    tier2055factor[213]=1.56680000001;
    tier2055factor[214]=1.56680000001;
    tier2055factor[215]=1.56680000001;
    tier2055factor[216]=1.56680000001;
    tier2055factor[217]=1.56680000001;
    tier2055factor[218]=1.56680000001;
    tier2055factor[219]=1.56680000001;
    tier2055factor[220]=1.56680000001;
    tier2055factor[221]=1.56680000001;
    tier2055factor[222]=1.56680000001;
    tier2055factor[223]=1.56680000001;
    tier2055factor[224]=1.56680000001;
    tier2055factor[225]=1.56680000001;
    tier2055factor[226]=1.56680000001;
    tier2055factor[227]=1.56680000001;
    tier2055factor[228]=1.56680000001;
    tier2055factor[229]=1.56680000001;
    tier2055factor[230]=1.56680000001;
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < tier2055age.length; i++) {
		if (tier2055age[i] == selectedAge) {
			break;
		}
	}
    
    return tier2055factor[i];
}

// Determines and returns a tier1665 Age Factor to the calling function.
function gettier1665Factor() {
	var tier1665age = new Array (262);
    
    
	var tier1665factor = new Array(262);
    
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < tier1665age.length; i++) {
		if (tier1665age[i] == selectedAge) {
			break;
		}
	}
    
    return tier1665factor[i];
}
// Determines and returns a safety355 Age Factor to the calling function.
function getsafety355Factor() {
    
	var safety355age = new Array (332);
    
    
    
    
	var safety355factor = new Array(332);
    
    
    
    
    
	var selectedAge = document.RetBenCalc.Age.value;
	for (var i = 0; i < safety355age.length; i++) {
		if (safety355age[i] == selectedAge) {
			break;
		}
	}
    
    return safety355factor[i];
}


// Deterimes the tier Type from the selected Radio button and returns
// it to the calling function.
function gettierType() {
	var selectedtype = document.RetBenCalc;
	for (var i = 0; i < selectedtype.tiers.length; i++) {
        if (selectedtype.tiers[i].checked) {
            break
        }
	}
    return selectedtype.tiers[i].value;
}

//Validates that field is not empty.
function isEmpty(inputStr) {
	if (inputStr == "" || inputStr == null) {
		return true;
	}
    return false;
}

//Validates that number is in specified range.
function inRange(inputStr, lo, hi) {
	var num =parseInt(inputStr, 10);
	if (num < lo || num > hi) {
		return false;
	}
    return true;
}


// Validates age field.

function incAgeEntry(Age){
	var input = parseInt(document.RetBenCalc.Age.value, 10);
	if (isNaN(input)){
		alert("Please enter numbers only into this box.");
        return false;
	} else {
		if (document.RetBenCalc.Age.value.length > 6) {
			alert("Please enter a number that is no larger than 6 digits.");
			return false;
		} else {
            if (!inRange(input,38,85)) {
                alert("If you are a General member, please enter an age between 50 and 70. If you are a Safety member, please enter an age between 38 and 70.");
                return false;
            }
			return true;
            
		}
    }
}
//Validates Years of Service field.

function incServiceEntry(Service){
	var input = parseInt(document.RetBenCalc.Service.value, 10);
	if (isNaN(input)){
		alert("Please enter numbers only into this box.");
        return false;
	} else {
		if (document.RetBenCalc.Service.value.length >5) {
            alert("Please enter a number that is no larger than 5 digits (decimals points included).");
			return false;
		} else {
            if (!inRange(input,1,50)) {
                alert("Please enter Years of Service between 1 and 50");
                return false;
            }
			return true;
		}
    }
}
// Validates Final Average Monthly Compensation.

function incCompEntry(FinAvgMoComp) {
	var input = parseInt(document.RetBenCalc.FinAvgMoComp.value, 10);
	if (isNaN(input)){
		alert("Please enter numbers only into this box. Do not use dollar signs or commas.");
        return false;
	} else {
        if (document.RetBenCalc.FinAvgMoComp.value.length >10) {
            alert("Please enter a number that is no larger than 10 digits.");
			return false;
        }
	}
    return true;
}


/* end Retirement Calculator */
