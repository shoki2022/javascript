for (let number=1; number<=50; number++){
  if(number%10===0){
    console.log("今"+number+"回ループしました")
  }
  
  if(number%4===0){
    console.log("４で割れる数です"+number)
  }
  else if(number===50)
  alert("50回カウントが終わりました。")

  else{
    console.log(number)
  }
}
