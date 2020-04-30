#!/bin/bash
echo "Creating mongo users..."
mongo admin --host localhost -u FGL0222 -p test123 --eval "db.createUser({user: 'admin', pwd: '123456', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
mongo admin -u root -p 123456 << EOF
use blog2018
db.createUser({user: 'fgl666', pwd: 'test666', roles:[{role:'readWrite',db:'blog2018'}]})
EOF
echo "Mongo users created."
