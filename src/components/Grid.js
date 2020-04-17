import React from "react";
import Styled from 'styled-components'

export default class Grid extends React.Component {
  state = {
    loading: true,
    person: null,
    num: 100,
    movieObj: []
  };

  async componentDidMount() {
    var i;
    for (i = 1; i < 21; i++) {
    this.state.num = this.state.num+i;  
    const url = `https://api.themoviedb.org/3/movie/${this.state.num}?api_key=a4e58d56fe8690c89ebed28c6816ff3f`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data });
    if(data.backdrop_path){
      this.state.movieObj.push(this.state.person);
    }
  }
  }



  handleScroll = (e) => {
    // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const bottom = e.target.scrollHeight - e.target.scrollTop < 1500;
    if (bottom) { 
      this.componentDidMount();
    }
  }

  render() {
    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    return (
      <GridWrapper>
        
    <div className='mainContainer' onScroll={this.handleScroll}>
        <ul><div className='row'>
        <div className="image-container">
      {this.state.movieObj.map((value, index) => {        
          return <div className='col-lg-3 col-md-4 col-sm-6 mx-auto p-3 my-row' key={index} id={value.genres[0].name}>             
                      <img src={"https://image.tmdb.org/t/p/w500" + value.backdrop_path} alt="dg" className='imgHandler'  />
                      {/* <span> Hello </span>  */}
                      <div className='movieName'><div className='movieNameNew'>{value.original_title}</div>
                          <div className="likeBtn" id={value.id} >
                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                          </div>
                      </div>
                      <div className="movieDiscription" id='p21'>
                          <div className='gerns'>Genre: {value.genres[0].name}</div>
                          <div className='imdb'>IMDB: {value.vote_average}</div>
                          <div className='releaseDate'>Release Date: {value.release_date}</div>
                      </div> 
               </div>
      })}
      </div>
      </div>
    </ul>
    </div>
    </GridWrapper>
    );
  }
}

const GridWrapper = Styled.div`
.mainContainer{
  width:100%;
  // margin-left: 10%;
  // margin-right: 10%;
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
.my-row{
  display: inline-flex;
  // border-radius: 10px;

}
.imgHandler{
  border-radius: 20px;
  width: 100%
}
.imgHandler:hover{
  opacity: 0.5;
}
.movieName{
  margin-left: -100%;
  margin-top: 44%;
  color: white;
  font-weight: 700;
  font-size: 16px;
  // font-size: 2.2vh;
  background-color: black;
  // width: 95%;
  width: 100%;
  opacity: .7;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-left: 5%;
  padding-top: 1%;
}
.image-container{
  position: relative;
}

.movieDiscription{
    position: absolute;
    font-weight: 600;
    color: white;
    height: 69%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-left: 4%;
    bottom: 10%;
    font-size: 104%;
    width: 58%;
    display: none;
}
.imgHandler:hover ~ .movieDiscription{
  display: block;
}

  .movieDiscription:hover ~ .imgHandler{
    opacity: 0.5;
  }

.gerns:hoer{
  visibility: visible;
}
.likeBtn {
  // margin-left: 86%;
  //   margin-top: 1.5%
  float: right;
    margin-right: 4%;
    // margin-top: 4.5px;
}
.mystyle{
  color: black;
}
.row{
  width:100%;
}
.movieNameNew{
  white-space: nowrap;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
}

.releaseDate{
  // display: none;
}
.img:hover + releaseDate{
  display: block;
  }
`