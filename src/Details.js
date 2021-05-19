import { Component, Consumer } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Carousel from './Carousel';
import ThemeContext from './ThemeContext';

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
          <ThemeContext.Consumer>
            {
              ([theme]) => (
                <button style={{backgroundColor: theme, color: theme == '#000' ? '#fff' : '#000'}}>{`Adopt ${name}!`}</button>
              )
            }
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailWithRouter = withRouter(Detail);

export default function DetailWithError() {
  return (
    <ErrorBoundary>
      <DetailWithRouter />
    </ErrorBoundary>
  )
}
