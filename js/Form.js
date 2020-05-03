class Form {
  constructor() {
    
   
    this.input = createInput("EnterName");
    this.button = createButton('START');
    this.greeting = createElement('h3');
    this.Q1 = createElement('h4');
    this.Q2 = createElement('h4');
    this.Q3 = createElement('h4');
    this.Q4 = createElement('h4');
    this.Q41 = createElement('h4');
    this.Q5 = createElement('h4');
    this.Q51 = createElement('h4');
    this.rewards = createElement('h3'); 
    this.note = createElement('h4');
 }



  display(){
    var title = createElement('h2')
    title.html("Survey");
    title.position(220,5);
    
    
   this.note.html('note  : slowly press your option twice to conform your answer');
   this.note.position(15,360);
   
    
    this.input.position(190, 180);
    this.button.position(430, 350);
    


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();



      var next = createButton("NEXT");
      next.position(430,350);

      
      this.greeting.html("Hello!     "+ this.input.value())
      this.greeting.position(20, 60);

      this.Q1.html('Q1. Do you think organic farming should be made compulsory in india?');
      this.Q1.position(15,170);
      var A = createButton('Yes');
      A.position(25,230);
      var b = createButton('No');
      b.position(25,270)
      
      A.mousePressed(()=>{
          answer1.update(1); 
          b.hide();      
      });
      b.mousePressed(()=>{
        answer1.update(2);
        
        A.hide();      
    });
    next.mousePressed(()=>{
      this.Q1.hide();
      A.hide();
      b.hide();
      this.Q2.html('Q2. Is it a right decition if government bans the liquor in the country?');
      this.Q2.position(15,170);
      var C = createButton('Yes,it is right decision');
      C.position(25,230);
      var D = createButton('No,government should not ban');
      D.position(25,270);
      var E = createButton('should be allowed with some restrictions');
      E.position(25,310);
      C.mousePressed(()=>{
        answer2.update1(1);
         D.hide();
         E.hide();     
         next.hide(); 
    });
     D.mousePressed(()=>{
      answer2.update1(2);
      C.hide();
      E.hide(); 
      next.hide();     
   });
   E.mousePressed(()=>{
    answer2.update1(3);
    C.hide();
    D.hide(); 
    next.hide();     
});
if(next.hide()){
  var n = createButton('NEXT')
  n.position(430,350)
}
    n.mousePressed(()=>{
      this.Q2.hide();
      C.hide();
      D.hide();
      E.hide();
      this.Q3.html('Q3.Do you think English medium need to be made mandatory in all schools?');
      this.Q3.position(15,170);
      var F = createButton('Yes,with mother tongue as one of the subject');
      F.position(25,230);
      var G = createButton('Yes,with all subjects in english only');
      G.position(25,270);
      var H = createButton('No to english medium');
      H.position(25,310);
      F.mousePressed(()=>{
        answer3.update2(1);
        G.hide();
        H.hide();     
        n.hide(); 
   });
    G.mousePressed(()=>{
      answer3.update2(2);
     F.hide();
     H.hide(); 
     n.hide();     
  });
  H.mousePressed(()=>{
    answer3.update2(3);
   F.hide();
   G.hide(); 
   n.hide();     
});
if(n.hide()){
  var ne = createButton('NEXT');
  ne.position(430,350)
}
ne.mousePressed(()=>{
  this.Q3.hide();
  F.hide();
  G.hide();
  H.hide();
  this.Q4.html('Q4. How do you see the decision,if government makes the law,that the every');
  this.Q4.position(15,170);
  this.Q41.html('citizen should serve in army for atleast 2 years before joining any Job?');
  this.Q41.position(20,190);
  var I = createButton('It is a right decision,I appreciate it');
  I.position(25,230);
  var J = createButton('It is a bad decision');
  J.position(25,270);
  I.mousePressed(()=>{
    answer4.update3(1);
   J.hide(); 
   ne.hide();     
});
J.mousePressed(()=>{
  answer4.update3(2);
  I.hide();
  ne.hide();      
});
if(ne.hide()){
  var net = createButton('NEXT');
  net.position(430,350);
}
net.mousePressed(()=>{
   I.hide();
   J.hide();
   this.Q4.hide();
   this.Q41.hide();
   this.Q5.html('Q5. Do you think reservations in India should be given to those who are');
   this.Q51.html('in poverty/talented, than caste based?');
   this.Q5.position(15,170);
   this.Q51.position(20,190);
   var K = createButton('Yes, I agree');
   K.position(25,230);
   var L = createButton('No, I disagree');
   L.position(25,270);
   K.mousePressed(()=>{
     answer5.update4(1);
    L.hide(); 
    net.hide();     
 });
 L.mousePressed(()=>{
   answer5.update4(2)
   K.hide();
   net.hide();      
 });
 if(net.hide()){
   var submit = createButton('SUBMIT');
   submit.position(430,350);
 }
 submit.mousePressed(()=>{
  this.Q5.hide();
  this.Q51.hide();
  submit.hide();
  this.note.hide();
  K.hide();
  L.hide();
  this.greeting.hide();
  this.rewards.html('Thank You    '+ this.input.value() +'  for your valuable answers');
  this.rewards.position(70,200)
 })
})
})

    })
    })
  
    });

  }
  Hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hode();
  }
}
