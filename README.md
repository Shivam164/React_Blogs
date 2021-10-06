### In this App.js is the main file 

* Here I have learned about router, route and switch
* And from Route I learned about Link tag and 'to' that we use in that.

### Using different components from making work easier

* In this project I used one seperate component that will fetch data from different api.

### useFetch hook

* As I needed to fetch data at different place i constructed a hook that will fetch data 

Things that we should take care of while fetching data are : 
* We need to use AbortController in cases when we want to switch to different cases, if we will not use that then we get some error. And if the fetching is aborted 
 then we cannot update things on the componet that has already unmounted.
 
* We need to take care of error associated with fetching of data, there can be some times when the server won't return the data that we wanted at such times 
 we need to give some output that will not effect the flow of the webpage.
 
 * We need to take care of time that a api can take to return the data.

And at last we can return an object that will keep a data object a error property and a pending property.


