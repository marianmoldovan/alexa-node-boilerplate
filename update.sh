#!/bin/zsh
lambda_name="sereno-rincon-lambda"
zip_file="${lambda_name}.zip"
rm "${zip_file}"
files="./*"
chmod -R 755 ${files}
cd lambda; zip -r "../${zip_file}" $files
cd ..; aws lambda update-function-code --region "us-east-1" --function-name "${lambda_name}" --zip-file "fileb://${zip_file}"
