import React from "react";
import Styled from 'styled-components'
// import { useBottomScrollListener } from 'react-bottom-scroll-listener';

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
    for (i = 1; i < 21; i++) {
      console.log(' numwjeg  : ',this.state.num);
      this.state.num = this.state.num+i;
      this.componentDidMount();
}}

  handleScroll = (e) => {
    console.log('IS Working');
    // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log('e.target.scrollHeight :', e.target.scrollHeight, ' - e.target.scrollTop :', e.target.scrollTop, ' = ', e.target.scrollHeight - e.target.scrollTop);
    // console.log(e.target.clientHeight);
    // console.log(e.target.clientHeight);
    console.log(bottom);
    if (bottom) { 
      console.log('At the bottom of the paeg');
      this.randomValue();
     }
  }
  render() {
    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    return (
      <GridWrapper>
        
    <div className='mainContainer' onScroll={this.handleScroll}>
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
    </GridWrapper>
    );
  }
}

const GridWrapper = Styled.div`
.mainContainer{
  width:100%;
  height: 940px;
  // height: auto;
  overflow-y :scroll;
}

.mainContainer::-webkit-scrollbar {
  display: none;
}

.example {
  -ms-overflow-style: none;
}
`