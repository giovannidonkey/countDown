function randomGame(){
  let count = 0;
  let num;
  let timer = setInterval(function(){
    count++;
    num = Math.random();
    if(num > 0.75 && count===1){
      console.log(`It took ${count} try.`);
      clearInterval(timer);
    }
    if(num > 0.75 && count!=1){
      console.log(`It took ${count} tries.`);
      clearInterval(timer);
    }
  },1000);
}
