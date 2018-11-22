 $(document).ready(function() {
// Define Constructor Object 
Book = Backbone.Model.extend({
    initialize: function(){
        this.on("change:author", function(){
            console.log("Changed Author");
        })    
    },
    defaults:
    {
        name : "The Return of Simple",
        author: "Lanston Hughes",
        publishDate: "January 15, 1967",
        data: [{va11:"hello"},
               {val2:"world"}]

    }
});

//Instantiate Constructor
//myBook = new Book();
//console.log(myBook.get('name'));
//console.log('The author is now '+myBook.get('author'));

newBook = new Book({
    name: "Beginning Backbone", 
    author: "James Sugrue",
    publishDate: "September 1, 2008"
});

console.log("newBook: "+ newBook.get('name')+ " Author: " + newBook.get('author'));

LibraryView = Backbone.View.extend({
    initialize:function(){ 
        console.log("Library view created...");
        $("#cream").select2();
        var stateRendered =false;
    },

    events:{
        'click' : 'theView',
        'select': 'theChamp', 
        'change': 'onChange'
    },
        
    
    render:function(){
        console.log("Rendering...");
        
        if(!this.stateRendered){
        this.$el.append('<p>This is it</p>');
        this.$el.append('<button type="button" class="btn btn-primary">Submit</button>');
        this.$el.append('<br><select id= "hey" name="state"><option value="blank"></option> <option value="OH">Ohio</option><option value="MD">Maryland</option><option value="WV">West Virginia</option><option value="FL">Florida</option><option value="TX">Texas</option>');
            

            
        this.$el.append('<div class="foo"></div>');
        $('#hey').append('.foo').select2();
        this.stateRendered = true;
    }
//    $('.myLibraryViewSection').select2(this.data);
/*    $('.myLibraryViewSection').select2(
        {placeholder:"Pick a state", 
        data: [
            {id: 0, text: ""},
            {id: 1, text: "Alabama"},
            {id: 2, text: "Virginia"},
            {id: 3, text: "Michigan"}],
        allowclear: true
        } 
    );
*/ 
//    this.$el.append('<select class="tical"></select>');
//    $("#wobble").select2().trigger('select');
//    $("#wobble").select2();
        

      
        return this;
    },
    theView: function(e){
//        alert("What's happening.");        
        this.$el.append('<p>This is it '+this.model.get('name')+'</p>');
       console.log("something clicked...");
       this.render();


    },
    theChamp: function(e)
    {
        console.log('Testing 1 2 3 select2');    
    },
    onChange: function(e)
    {
        console.log('Change it up');
    }
});


console.log('Hello');
goodBook = new Book({
    name: "I Am Not Your Negro", 
    author: "James Baldwin",
    publishDate: "Unknown"
});
    
// Use el by reference an existing DOM element or by creating a new one.
myView = new LibraryView({
    model:goodBook,
    el: '.myLibraryViewSection'
});
 })