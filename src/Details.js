import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from './Carousel';

class Detail extends Component {
  state = { loading: true };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const data = await res.json();
    this.setState({
      loading: false,
      ...data.pets[0]
    });
    console.log(this.state);
  }

  render() {
    const { loading, animal, breed, city, state, description, name, images } = this.state;
    if (loading) return <h2>Loading....</h2>;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
          <button>{`Adopt ${name}!`}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
