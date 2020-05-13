import React from 'react';
import './languages.css';
class Languages extends React.Component{
    render(){
        return(
            <div className='language-item'>
            <div className='language-name'>{this.props.name}</div>
            <img className='language-image' src={this.props.image} />
          </div>
        );
    }
}

export default Languages;