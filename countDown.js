function countDown(num){
  function tick(){
    num--;
    if(num<=0){
      console.log("DONE!");
      clearInterval(clock);
    }else{
      console.log(num);
    }
  }
  let clock = setInterval(tick,1000);
}
