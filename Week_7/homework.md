1.

Which of the following statements are true about replication in MongoDB? Check all that apply.

  * The oplog utilizes a capped collection
  * The minimum sensible number of voting nodes to replica set is three
  
2.

Let's suppose you have a five member replica set and want to assure that writes are committed to the journal and are acknowledged by at least 3 nodes before you proceed forward. What would be the appropriate settings for w and j?

  * w="majority", j=1

3.
Which of the following statements are true about choosing and using a shard key? Check all that apply.

  * There must be an index on the collection that starts with the shared key
  * MongoDB cannot enforce unique indexes on a sharded collection other than the shard key itself or indexes prefixed by the shard key.
  * Any update that does not contain the shard key or _id field will result in an error.
