function getColor(selection)
{
	switch(getColor){
        selection 'red';
            return true
            break;
        selection 'green':
            return  true
            break;
        selection 'blue'
            return true
            break;
		
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = window.prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
