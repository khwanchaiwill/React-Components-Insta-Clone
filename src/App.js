/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState}  from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer"
import dummyData from "./dummy-data"
const App = () => {
 // set up the state here for the search tool 
  const [searchText, setSearchText] = useState('')
  const [user, setUser] = useState(dummyData)


  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar updater={setSearchText} />     {/* searchCar handle the search text string*/}   
      <PostsPage search={user.filter(searchlist =>{
        {/*render the search event here by use .filter to return the result after search */}
        if(!searchText || searchlist.username.includes(searchText)){
          return searchlist;
        }
        return false;
      })} />

    </div>
  );
};
export default App;
