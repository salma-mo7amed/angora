// i want when click the button to show the paragraphs
// so i would put the paragraphs in a function and call this function
// i want to put the calling of the function in onclick of the button 
       
// start of the task

function displayQuotes(){
//  array of objects: quotes
  var quotesNames= [ 
    {quoteName:"“In three words I can sum up everything I've learned about life: it goes on.”"},
    {quoteName:"“A friend is someone who knows all about you and still loves you.”"},
    {quoteName:`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`},
    {quoteName:`“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” `},
   {quoteName:`“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”`},
   {quoteName:`“Anyone who has never made a mistake has never tried anything new.” `},

    ]
    
    // another array of objects:  writers
    var quotesWriters=[
        {writerName:"― Robert Frost"},
        {writerName:" ― Elbert Hubbard"},
        {writerName:"― Maya Angelou"},
        {writerName:"― Albert Einstein "},
       {writerName:"― Bill Keane"},
       {writerName:"― Albert Einstein"},
       
    ]
    // math object
    var randomNum= Math.floor(Math.random() * quotesNames.length)
    // new varaibles to use in the inner html with the values +math object
    var quotes= (quotesNames[randomNum]).quoteName;
    var writers=(quotesWriters[randomNum]).writerName;
   
  //  I make a console to make sure of my work then I will comment it
    // console.log(quotes);
    // console.log(writers);


     //  display in html code
    document.getElementById("quoteName").innerHTML="<p>"+quotes+"</p>"
    document.getElementById("quoteWriter").innerHTML="<p>"+writers+"</p>"
}


// end of the task
