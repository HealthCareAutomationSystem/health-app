import pandas
from pymongo import MongoClient

serverUri="mongodb+srv://chhariavikram1:vikram1234@healthcare.dcpke.mongodb.net/stores"

server=MongoClient(serverUri)

db=server['healthcaredb']
collection=db['stores']

file=pandas.read_csv('google (1).csv')
name =file.name.to_list()
address=file.address.to_list()
doc=[]
for i in range (0,len(name)):
    obj={'Name':name[i],'Address':address[i]}
    doc.append(obj)
collection.insert_many(doc)