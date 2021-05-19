import { Component, Consumer } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Carousel from './Carousel';
import ThemeContext from './ThemeContext';
import Modal from './Modal';

class Detail extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const data = await res.json();
    this.setState({
      loading: false,
      ...data.pets[0]
    });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => window.location = 'http://bit.ly/pet-adopt';

  render() {
    const { loading, animal, breed, city, state, description, name, images, showModal } = this.state;
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
                <button onClick={this.toggleModal} style={{backgroundColor: theme, color: theme == '#000' ? '#fff' : '#000'}}>{`Adopt ${name}!`}</button>
              )
            }
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ?
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
                    <button onClick={this.toggleModal}>No</button>
                  </div>
                </div>
              </Modal> :
              null
          }
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
