//Animation Box
var animationBox = $('#animationBox');
//Animation Box Total Width
var width = animationBox.width();
//Animation Box Total Height
var height = animationBox.height();
//Node Height
var nodeHeight = 40;
//Node Width
var nodeWidth = 40;

//this is for calculating starting position of a node in animaton according to screen/box size
var topPos = (height-nodeHeight);
var leftPos = (width/2 - nodeWidth/2);



function createCircleNode(index=null,value=null){


  var classes = 'node circleNode';
  if(value == null || index == null){
    value = 'NULL';
    classes+=' hidden';
  }
  var id = 'node'+index;
  var html = '<div class="'+classes+'" id="'+id+'" data="'+value+'" ><b class="nodeData">'+value+'</b></div>';

  return html;
}

function createBoxNode(index=null,value=null){


  var classes = 'node boxNode';
  if(value == null || index == null){
    value = 'NULL';
    classes+=' hidden';
  }
  var id = 'node'+index;
  var html = '<div class="'+classes+'" id="'+id+'" data="'+value+'" ><b class="nodeData">'+value+'</b></div>';

  return html;
}

function arrowBox(index){

  var id = 'node'+index;
  var html = '<div class="node arrowBox" id="'+id+'"><i style="font-size:24px" class="fa">&#xf061;</i></div>';
  index++;
  return html;
}

function remove(arr) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax= arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}


function remove(arr) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax= arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}
