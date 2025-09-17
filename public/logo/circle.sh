#!/usr/bin/env bash



for file in Logo*; do
  magick "${file}" \( +clone -threshold 101% -fill white -draw "circle %[fx:int(w/2)],%[fx:int(h/2)] %[fx:int(w/2)],%[fx:int(h)]" \) -channel-fx "| gray=>alpha" "Circle${file}"
done
