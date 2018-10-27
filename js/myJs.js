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
        publishDate: "January 15, 1967"
    }
});

//Instantiate Constructor
//myBook = new Book();
//console.log(myBook.get('name'));
//console.log('The author is now '+myBook.get('author'));

newBook = new Book({name: "Beginning Backbone", author: "James Sugrue"});
console.log("Book: "+ newBook.get('name')+ " Author: " + newBook.get('author'));

LibraryView = Backbone.View.extend({
    initialize:function(){ 
        console.log("Library view created...");
        this.render();
    },

    events:{
        'click' : 'theView'
    },
        
    
    render:function(){
        console.log("Rendering...");
        this.$el.html('Book Name: '+this.model.get('name'));
        this.$el.append('<p>This is it</p>');
        this.$el.append('<button type="button" class="btn btn-primary">Submit</button>');

        return this;
    },
    theView: function(e){
 
        
        
        alert("What's happening.");
        
//        this.$el.append('<p>This is it '+myView.get('name')+'</p>');
       console.log("something clicked...");

    }
});


console.log('Hello');
        goodBook = new Book({name: "I Am Not Your Negro", author: "James Baldwin"});
    
        // Use el by reference an existing DOM element or by creating a new one.
        myView = new LibraryView({model:goodBook,
                         el: '#myLibraryViewSection'});