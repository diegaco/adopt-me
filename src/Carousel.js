import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };

  handleClick = idx => {
    this.setState({active: idx})
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, idx) => (
            // eslint-disable-next-line
            <img onClick={() => this.handleClick(idx)} key={image} src={image} className={idx == active ? 'active' : ''} alt="animal thumbnail"/>
          ))}
        </div>
      </div>
    );
  }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }
}

export default Carousel;
