library(jsonlite)

options(warn=-1)
input <- na.omit(input)
output <- toString(toJSON(input))