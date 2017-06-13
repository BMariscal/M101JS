Install MongoDB on your computer and run it on the standard port.

Download the hw1-1.zip from Download Handout link and uncompress the file.

Change directory into hw1

Use mongorestore to restore the dump into your running mongod. Do this by opening a terminal window (mac) or cmd window (windows) and navigating to the directory so that the dump directory is directly beneath you. Now type:

    mongorestore dump


Note you will need to have your path setup correctly to find mongorestore.

Now, using the Mongo shell, perform a find() on the collection called hw1_1 in the database m101. There is one document in this collection. Please provide the value corresponding to the "answer" key (without the surrounding quotes) from the document returned.


    Hello from MongoDB!
