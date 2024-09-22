sample : {
    "name" : "orange",
    "price": 60
  }

  in getProducts, when we give only find(), it returns a cursor, a cursor is a pointer to the result of the query 
  and we can iterate trhough it to get the results. Using toArray we can iterate it to get the results in an array