#!/bin/bash
# legacy deploy script - needs modernization

echo "deploying..."
cd /opt/app
git pull origin master
if [ $? -eq 0 ]; then
    echo "pull ok"
else
    echo "pull failed"
    exit 1
fi

npm install 2>&1 > /dev/null
if [ $? -eq 0 ]; then
    echo "deps ok"
fi

npm run build 2>&1 > /dev/null
if [ $? -eq 0 ]; then
    echo "build ok"
else
    echo "build failed!!"
    exit 1
fi

# restart with pm2
pm2 restart app
if [ $? -eq 0 ]; then
    echo "restart ok"
else
    echo "restart failed!!"
    # no rollback mechanism
    exit 1
fi

# no health check
# no rollback
# no notifications
# no logging
# hardcoded paths
# no error details
echo "done deploying"
