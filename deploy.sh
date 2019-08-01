#!/bin/zsh
lambda_name="hello-world-test"
zip_file="${lambda_name}.zip"
rm "${zip_file}"
files="index.js lib i18n node_modules"
chmod -R 755 ${files}
zip -r "./${zip_file}" $files
aws lambda update-function-code --region "eu-west-1" --function-name "${lambda_name}" --zip-file "fileb://${zip_file}"
