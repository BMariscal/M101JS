1. 
Starting with the example we looked at for calculating the total number of relationships individuals have participated in (in the CrunchBase data set):

db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
] )

Write an aggregation query that will determine the number of unique companies with which an individual has been associated. To test that you wrote your aggregation query correctly, from the choices below, select the number of unique companies that Eric Di Benedetto (eric-di-benedetto) has been associated with. I've attached the CrunchBase data set for use in this problem.

Hint: Review the available accumulators before beginning this exercise.

As a check on your work, the number of unique companies for roger-ehrenberg is 16, for josh-stein is 14, and the number for tim-hanlon actually is 28.

        15
        
2. 
Who is the easiest grader on campus?

Download the handout and import the grades collection using the following command.

mongoimport --drop -d test -c grades grades.json

Documents in the grades collection look like this.

{
    "_id" : ObjectId("50b59cd75bed76f46522c392"),
    "student_id" : 10,
    "class_id" : 5,
    "scores" : [
        {
            "type" : "exam",
            "score" : 69.17634380939022
        },
        {
            "type" : "quiz",
            "score" : 61.20182926719762
        },
        {
            "type" : "homework",
            "score" : 73.3293624199466
        },
        {
            "type" : "homework",
            "score" : 15.206314042622903
        },
        {
            "type" : "homework",
            "score" : 36.75297723087603
        },
        {
            "type" : "homework",
            "score" : 64.42913107330241
        }
    ]
}

There are documents for each student (student_id) across a variety of classes (class_id). Note that not all students in the same class have the same exact number of assessments. Some students have three homework assignments, etc.

Your task is to calculate the class with the best average student performance. This involves calculating an average for each student in each class of all non-quiz assessments and then averaging those numbers to get a class average. To be clear, each student's average should include only exams and homework grades. Don't include their quiz scores in the calculation.

What is the class_id which has the highest average student performance? Choose the correct class_id below.


      1
      
      
3. 

For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. Write an aggregation query to answer this question.

As a check on your solution, Facebook had the largest funding round average.

      Nimbit
      
      
