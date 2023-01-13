import React, { Fragment, Component } from "react";

import Banner from "./components/banner/banner";
import SearchBox from "./components/search-box/search-box";
import Card from "./components/card/card";
import Footer from "./components/footer/Footer";
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://test12api.herokuapp.com/api/details/user?username=${userName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
        this.setState({ userData: data.data })
      })
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
  };

  render() {
    return (
      <Fragment>
     <div className="container-fluid">
     <Banner />
       
       <SearchBox  onInputChange={this.onInputChange} />
         
         
         {this.state.userData?.user?.id && this.state.searchName !== "" ? (
          <div className="container-fluid"> <Card profile={this.state.userData} /> </div>
       ) : (
        <div className="text-center mt-5"><p> Above Username is not associated with any profile.</p></div>
       )}
     
      <Footer />
     </div>
      </Fragment>
    );
  }
}

export default App;
