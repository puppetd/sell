/**
 * Created by Administrator on 16-5-29.
 */
var ulNode=document.getElementById('listImg');
var lisNode=ulNode.getElementsByTagName('li');

for(var i=0;i<lisNode.length;i++){
	lisNode[i].index=i;
	lisNode[i].onmouseenter=function(){
		if(this.className=="current")
		{
			return;
		}
		var curPos=this.index;
		var oldPos;
		
		for(var j=0;j<lisNode.length;j++){
			if(lisNode[j].className=='current'){
				oldPos=j;
				break;
			}
		}
		
		lisNode[curPos].style.width="798px";
		lisNode[curPos].className="current";
		lisNode[oldPos].style.width="48px";
		lisNode[oldPos].className='';
		//console.log( curPos,oldPos);
		}
	}
	
	
	
	
var centNode=document.querySelector('.cent1-1');
var liNode=centNode.getElementsByTagName('li');
for(var i=0;i<liNode.length;i++){
	liNode[i].onmouseenter=function(){
		var divNode=this.getElementsByTagName('div');
		divNode.style.display="block";
	}
	liNode[i].onmouseout=function(){
		var divNode=this.getElementsByTagName('div');
		divNode.style.display="none";
	}
	
}