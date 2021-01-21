##data
{
    "userdata": [{
        "email": "abc@gmail.com",
        "note": ["complete task1", "complete task2"]
    },
        {
            "email": "def@gmail.com",
            "note": ["pending task1", "complete task2"]
        }
    ]
}



import pymongo
#craete a client
client = pymongo.MongoClient("localhost",27017)

#create a database or set database
db = client.userNote
database_name = db.name

user = db.userdata.find_one()
print("connected successfully")
#print database name
print("database name is {}".format(database_name))

#id is present or not
Print("Please enter user id")
userId = input()

print( "looking for the id {}".format(userId))

for data in db.userdata.find(userId):
    if data is None:
        db.userdata.InsertOne("email":userId)
