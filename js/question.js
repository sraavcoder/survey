class Question{
    constructor(){
        this.answer1 = null;
        this.answer2 = null;
    }
    
    update(answerType){
        answer1.get();
       if(answerType == 1){
      
        database.ref("Q1").set({
         Yes:question1.Yes+1,
         No:question1.No
        });
      }else if(answerType == 2){
        database.ref("Q1").set({
          Yes:question1.Yes,
          No:question1.No+1
         });
      }
      
    
    }
    async get(){
    var Q1ref = await database.ref('Q1').once("value");
      if(Q1ref.exists()){
       question1 = Q1ref.val();
      
      }

    
    }


    update1(answerType){
      answer2.g();
     if(answerType == 1){
        
      database.ref("Q2").set({
       a:question2.a+1,
       b:question2.b,
       c:question2.c
      });
    }else if(answerType == 2){
      database.ref("Q2").set({
        a:question2.a,
        b:question2.b+1,
        c:question2.c
       });
    }else if(answerType == 3){
      database.ref("Q2").set({
        a:question2.a,
        b:question2.b,
        c:question2.c+1
      })
    }
    
  
  }
  async g(){
  var Q2ref = await database.ref('Q2').once("value");
    if(Q2ref.exists()){
     question2 = Q2ref.val();
    }

  }


  update2(answerType){
    answer3.ge();
   if(answerType == 1){
      
    database.ref("Q3").set({
     a:question3.a+1,
     b:question3.b,
     c:question3.c
    });
  }else if(answerType == 2){
    database.ref("Q3").set({
      a:question3.a,
      b:question3.b+1,
      c:question3.c
     });
  }else if(answerType == 3){
    database.ref("Q3").set({
      a:question3.a,
      b:question3.b,
      c:question3.c+1
    })
  }
  

}
async ge(){
var Q3ref = await database.ref('Q3').once("value");
  if(Q3ref.exists()){
   question3 = Q3ref.val();
  }


}


update3(answerType){
  answer4.gett();
 if(answerType == 1){
    
  
  database.ref("Q4").set({
   a:question4.a+1,
   b:question4.b,
  });
}else if(answerType == 2){
  database.ref("Q4").set({
    a:question4.a,
    b:question4.b+1,
   });
}




}
async gett(){
var Q4ref = await database.ref('Q4').once("value");
if(Q4ref.exists()){
 question4 = Q4ref.val();

}

}


update4(answerType){
  answer5.t();
 if(answerType == 1){
    
  database.ref("Q5").set({
   a:question5.a+1,
   b:question5.b,
  });
}else if(answerType == 2){
  database.ref("Q5").set({
    a:question5.a,
    b:question5.b+1,
   });
}




}
async t(){
var Q5ref = await database.ref('Q5').once("value");
if(Q5ref.exists()){
 question5 = Q5ref.val();

}

console.log(question2);
}
}