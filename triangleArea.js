function triArea(x,y,z) {
  var type = ''
  var p = (x + y + z) / 2
  var area = Math.round((Math.sqrt(p*(p-x)*(p-y)*(p-z))))
    
   if(x == y && y == z) {
    type = ('equilateral triangle')
    } else if ( x != y && y != z) {
     type = ('scalence triangle')
     } else {
    type = ('isoceles triangle')
  }
  
  console.log(area + " inches^2",type)
}

triArea(10,10,10)
