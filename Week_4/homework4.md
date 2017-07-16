1. Please review the data model for the Crunchbase companies data set. The document from this collection for Facebook is attached in the handout for convenience. Documents in this collection contain several array fields including one for "milestones".

Suppose we are building a web site that will display companies data in several different views. Based on the lessons in this module and ignoring other concerns, which of the following conditions favor embedding milestones (as they are in the facebook.json example) over maintaining milestones in a separate collection. Check all that apply.

Note: Schema design is as much an art as a science. If you get the answer wrong on your first attempt. Please visit the forum to discuss with your fellow students.

    - The number of milestones for a company rarely exceeds 10 per year.
    
    - One frequently displayed view of our data displays company details such as the "name", "founded_year", "twitter_username", etc. as well as milestones.
    
2. 
Suppose you are working with a set of categories defined using the following tree structure. "Science" is a sub-category of "Books"; "Chemistry" and "Physics" are sub-categories of "Science"; and "Classical Mechanics" and "Quantum Mechanics" are sub categories of "Physics".

Books
    Science
        Chemistry
        Physics
            Classical Mechanics
            Quantum Mechanics

For this tree, each node is represented by a document in a collection called categories.

Which of the following schemas will make it possible to find() all descendant documents of a category using a single query. For example, all descendants of "Science" are "Chemistry", "Physics", "Classical Mechanics", and "Quantum Mechanics".


      B)

      db.categories.insertOne({"_id": "Quantum Mechanics", "ancestors": ["Books", "Science", "Physics"], "parent": "Physics"})
      db.categories.insertOne({"_id": "Classical Mechanics", "ancestors": ["Books", "Science", "Physics"], "parent": "Physics"})
      db.categories.insertOne({"_id": "Physics", "ancestors": ["Books", "Science"], "parent": "Science"})
      db.categories.insertOne({"_id": "Chemistry", "ancestors": ["Books", "Science"], "parent": "Science"})
      db.categories.insertOne({"_id": "Science", "ancestors": ["Books"], "parent": "Books"})
      db.categories.insertOne({"_id": "Books", "ancestors": [], "parent": null})
      
      
 3. 
 
 Suppose you are working with a library catalog system containing collections for patrons, publishers, and books. Book documents maintain a field "available" that identifies how many copies are currently available for checkout. There is also a field "checkout" that holds a record of all patrons that are currently borrowing a copy of the book. For example, the document below indicates that the library owns four copies of "Good Book". Three are currently available for checkout. One has been checked out by patron "33457".

{
    _id: 123456789,
    title: "Good Book",
    author: [ "Sam Goodman", "Mike Smith" ],
    published_date: ISODate("2010-09-24"),
    publisher_id: "Smith Publishing",
    available: 3,
    checkout: [ { patron_id: "33457", date: ISODate("2012-10-15") } ]
}

Which of the following is the primary advantage to this design?

      Can make atomic updates as books are checked out or turned in.
      
      
