#!/bin/bash

# Script to download all images from Squarespace to local public folder
# Run this from the buygeogrid directory: chmod +x download-images.sh && ./download-images.sh

echo "Downloading images from Squarespace..."

# Create directories
mkdir -p public/images/logos
mkdir -p public/images/products
mkdir -p public/images/misc

# Download logos
echo "Downloading logos..."
curl -o public/images/logos/logo-8.22.18.jpg "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/68387af901b7b568bcc9670d/1748531961939/logo+8.22.18.jpg"
curl -o public/images/logos/afsupplylogo_transparent.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/6842fbb93b85fe729594b761/1749220281313/afsupplylogo_transparent+%282%29.png"
curl -o public/images/logos/tensar.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/6838827b9252576736f1dad0/1748533883837/tensar.png"
curl -o public/images/logos/solmax.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/6838831012bf4d611847b489/1748534032223/solmax.png"

# Download product images
echo "Downloading product images..."
curl -o public/images/products/solution-interax.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/6839c63bdfcdb203460c749e/1748616763836/Solution-InterAx-Transparent-Background-380_x_280.png"
curl -o public/images/products/nxl.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/683f133562d51a13b613e6f5/1748964150862/NXl.png"
curl -o public/images/products/h-series.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/683f1578ea6c2915b6aef232/1748964728259/h-series-cad-illustration-removebg-preview_1.png"
curl -o public/images/products/solution-triax.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/683f16a7e5a3ce0c5fc642fa/1748965031790/Solution-TriAx-380_x_280.PNG"
curl -o public/images/products/solution-biax.png "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/683f17487af2d84d5eaea164/1748965192033/Solution-BiAx-380_x_280.PNG"
curl -o public/images/products/mirafi-500x.jpeg "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/6846f42b0a46443c1344786b/1749480493089/IMG_5390.jpeg"
curl -o public/images/products/mirafi-600x.jpeg "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/6846f4362d509d6e2055f743/1749480503327/IMG_5389.jpeg"
curl -o public/images/products/mirafi-135n.jpg "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/684707dc945f3f19ae6c0940/1749485536898/IMG_5392.jpg"
curl -o public/images/products/mirafi-180n.jpeg "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/68470caae8d92f40f254187e/1749486764286/IMG_5393.jpeg"
curl -o public/images/products/petrotac.jpg "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/68470f43dce3146afdbdb9a0/1749487427267/petrotac.jpg"
curl -o public/images/products/propex-petrotac.gif "https://static1.squarespace.com/static/6835e1851327d67a723456d5/t/68470f45e6777354b3c3b04f/1749487430144/Propex-Petrotac.gif"

echo "✅ All images downloaded successfully!"
echo "Images are now in /Users/joshuastone/Desktop/buygeogrid/public/images/"
echo "Refresh your browser to see the local images."
