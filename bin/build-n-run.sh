#!/usr/bin/env bash

cd ../hence-product
npm i
gulp build
cd ../hence-card
npm i
gulp build
cd ../hence-product-card
bower i ../hence-product ../hence-card
gulp
