# Blog-react

A simple blog which gives users the ability to add, delete and view a single post on a single page.

### Demonstrates ###

* Usage and understanding of React Router
* Using Redux Form to connect UI with store
* Creating validate function to verify fields & passing into Redux Form
* Display error message if input has been 'touched' and not meeting requirements
* Using life cycle method ComponentDidMount to fetch posts only after component has rendered
* Instead of receiving state as array from action creator, defaulted as an objecto for scalability and easier to match specific id.

EG. [{id:1, name:tom}{id:2, name:vincent}{id:3, name:bob}]

Lets say I need the object with ID 2. Instead of writing a function to loop through and get that object with ID 2.

1:{id:1, name:tom}
2:{id:2, name:tom}
3:{id:3, name:tom}

Instead its easier to get access to an object with the key.



* Understanding of using React Router tags in index.js. EG. Switch, Route. And showing appropriate components.
* Implementing Axios library to get,post & delete entries by passing in id of post.
* Use of mapStateToProps to get state from application level to component
* Using match.params.id that is supplied by React Router to grab id/wildcard out of URL
* Using ownProps in mapStatetoProps to get list of posts once mapStateToProps to called and only return the specific post with the specific ID. ownProps is good for scalability if I were to use mapStateToProps in a seperate function, and that would let postShow be only responsible for showing a component.
* Conditional statement to verify post exists in memory on PostsShow

<img width="1680" alt="screen shot 2018-01-24 at 1 37 40 pm" src="https://user-images.githubusercontent.com/20784807/35353492-5a07a80a-0115-11e8-9f2a-5b411124adb8.png">


### DEMO ####
https://edward-blog-react.herokuapp.com/


