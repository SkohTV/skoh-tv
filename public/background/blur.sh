#!/usr/bin/env bash


for file in Bg*; do
  magick convert -blur 0x10 "${file}" "Blur${file}"
done
