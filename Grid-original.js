import React from "react";

export default class Grid extends React.Component {
  state = {
    loading: true,
    person: null,
    num: 100,
    movieObj: []
  };

  

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.state.num}?api_key=a4e58d56fe8690c89ebed28c6816ff3f`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data });
    console.log('data :', data.backdrop_path);
    if(data.backdrop_path){
      this.state.movieObj.push(this.state.person);
    }
    // this.state.movieObj.push(this.state.person);
    // console.log("person",this.state.person);
    console.log("movie",this.state.movieObj);
  }

randomValue = () => {
    var i;
    for (i = 1; i < 25; i++) {
      console.log(' numwjeg  : ',this.state.num);
      this.state.num = this.state.num+i;
      this.componentDidMount();
}}


  render() {
    

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }



    return (
        
    <div>
        <div>{this.state.person.budget}</div>
        <div>{this.state.person.overview}</div>
        <div>{this.state.person.original_title}</div>
        <div>{this.state.person.homepage}</div>
        <button onClick={this.randomValue}>click me</button>
        <ul>
      {this.state.movieObj.map((value, index) => {
        return <li key={index}> 
        <span><img src={"https://image.tmdb.org/t/p/w500" + value.backdrop_path} alt="dg" /></span>
        <span>{value.backdrop_path}</span>
        </li>
      })}
    </ul>
          
        
        {/* <img src={'this.state.person+image.tmdb.org/t/p/w500'+backdrop_path} alt="dg" /> */}
    </div>
    );
  }
}