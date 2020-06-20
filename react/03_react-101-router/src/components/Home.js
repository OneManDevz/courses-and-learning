import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        posts: res.data.slice(0, 10) //takes only some items from the array
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <img src={Pokeball} alt='Pokeball' />
            <div className='card-content '>
              <Link to={`/${post.id}`}>
                <span className='title red-text'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>No posts!</div>
    );
    return (
      <div className='container home'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
