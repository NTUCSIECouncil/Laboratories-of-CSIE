#! /bin/bash

bundle exec jekyll build --config _config_prod.yml
rsync -av _site/ academic@council.csie.ntu.edu.tw:/var/www/html/