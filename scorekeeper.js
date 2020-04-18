var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
 var p1score=0;
 var p2score=0;
 var s1=document.querySelector("#p1display");
 var s3=document.querySelector("#limit");
 var s2=document.querySelector("#p2display");
 var gameover=false;
 var winningscore=5; 
 var resrtbutton=document.querySelector("#reset");
 var numinput=document.querySelector("input");

p1button.addEventListener("click",function(){
    if (!gameover) {p1score++;
    	if (p1score===winningscore) {
            s1.classList.add("winner");
    		gameover=true;}
	
	s1.textContent=p1score;}
	
});
p2button.addEventListener("click",function(){
if (!gameover){
	p2score++;}
	if (p2score===winningscore) {
        s2.classList.add("winner");
		gameover=true;}
	s2.textContent=p2score;
});
resrtbutton.addEventListener("click",function(){
	reset();


});
function reset(){
	p1score=0;
	p2score=0;
	s1.textContent=p1score;
	s2.textContent=0;
	s1.classList.remove("winner");
	s2.classList.remove("winner");
	gameover=false;

}
numinput.addEventListener("change",function(){
   s3.textContent=(numinput.value);
   winningscore = Number(numinput.value);
   reset();
});

	