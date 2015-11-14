window.onload = function(){

	var i = 1;
  document.getElementById("button-top").onclick = function()
	{
		if ( i < 5)
		{
			i = i + 1;
			bgfon.style.backgroundImage = "url(img/" + i + ".jpg)";
			bgfon.style.backgroundSize = "cover";
			bgfon.style.backgroundPosition = "center";
			bgfon.style.backgroundAttachment = "fixed";
		}

		if (i == 5)
		{
			i = 0;
		}
	}





	/*	var i =1;
		$("button-top").click(function(){
			if( i < 5)
			if ( i < 5)
			{
				i = i + 1;
				$("#bgfon").style.background-image: "url(img/" + i + ".jpg)";
			  $("#bgfon").style.background-size: "cover";
			  $("#bgfon").style.background-position: "center";
			  $("#bgfon").style.background-attachment: "fixed";
			}
			f (i == 5)
			{
				i = 0;
			}

		})*/




 	//for (var i = 0; i < 5; i++){


	//	b.style.background = "grey";
		//	alert("число" + i);

		//}
}
