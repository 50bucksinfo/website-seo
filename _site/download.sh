#!/bin/bash
domain_name="www.cheapestwebsitesmelbourne.50bucks.info"
tmp_dir="/tmp/tmp_${domain_name}"
wget      --recursive      --no-clobber      --page-requisites      --html-extension      --convert-links      --restrict-file-names=windows      --domains ${domain_name}      --no-parent    --directory-prefix=${tmp_dir}      http://${domain_name}
cp -r ${tmp_dir}/${domain_name}/* .
rm -rf ${tmp_dir}
