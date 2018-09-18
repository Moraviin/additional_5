module.exports = function check(str, bracketsConfig) {
  let bracketsOpen=[];
  let bracketsClose=[];
  let bracketsPair=[];
  let bracketsPairCount=0;
  bracketsConfig.forEach(function(brackets,index){
    bracketsOpen[index]=brackets[0];
    bracketsClose[index]=brackets[1];
   });
  while(true){
    let strInput=str;
    for(let i=0;i<bracketsOpen.length;i++){
      str=str.replace(bracketsOpen[i]+bracketsClose[i],'');
    }
    if(strInput==str){
      if(str==''){
        return true;
      }
      return false;
    }
  }

  // for(let i=0;i<str.length;i++){
  //   for(let m=0;m<bracketsClose.length;m++){
  //     if(str[i]==bracketsClose[m]){
  //       if(str[i-1]==bracketsOpen[m]){
  //         //delete str[i], str[i-1];
  //         //i--;
  //       }
  //       return false;
  //     }
  //   }
  //   for(let n=0;n<bracketsPair.length;n++){
  //     if(str[i]==bracketsPair[n]){
  //       bracketsPairCount++;
  //     }
  //   }
  // }
  //bracketsPairCount chetn??? retyrn false;
  return true ;
}
