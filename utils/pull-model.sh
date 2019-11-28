
#!/bin/bash

# get the current skill id
SKILL_ID=`cat .ask/config | grep skill_id | awk '{ print $2 }' | sed -e 's#"\([^"]*\)",#\1#g'`

# get model from current skill
ask api get-model -s ${SKILL_ID} -l "es-ES" > models/es-ES.json
