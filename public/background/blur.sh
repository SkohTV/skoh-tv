#!/usr/bin/env bash


for file in Bg*; do
  magick "${file}" -blur 0x10 "Blur${file}"
  echo "Converted ${file}"
done
