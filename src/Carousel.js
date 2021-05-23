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
        <img className="mb-4 w-full rounded-md" src={images[active]} alt="animal" />
        <div className="carousel-smaller grid grid-flow-col auto-cols-auto gap-x-4">
          {images.map((image, idx) => (
            // eslint-disable-next-line
            <img onClick={() => this.handleClick(idx)} key={image} src={image} className={"w-100 h-100 rounded-full hover:opacity-50 cursor-pointer" + (idx == active ? " active" : '')} alt="animal thumbnail"/>
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
