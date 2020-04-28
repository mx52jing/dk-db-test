#!/bin/bash
echo "Creating mongo users..."
mongo admin --host localhost -u mx -p 123456 --eval "db.createUser({user: 'admin', pwd: '123456', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
mongo admin -u root -p 123456 << EOF
use blog2019
db.createUser({user: 'jing1', pwd: '222888', roles:[{role:'readWrite',db:'blog2019'}]})
EOF
echo "Mongo users created."
