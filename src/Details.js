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
      <div className="my-0 mx-auto w-8/12">
        <div className="grid grid-cols-12 gap-y-4 md:gap-y-0 md:gap-x-10">
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <h1 className="text-6xl font-bold uppercase">{name}</h1>
            <h2 className="text-3xl text-gray-500 mb-5">{`${animal} - ${breed} - ${city} - ${state}`}</h2>
            <p className="mb-5 text-gray-600 border-b pb-5">{description}</p>
            <ThemeContext.Consumer>
              {
                ([theme]) => (
                  <button onClick={this.toggleModal} style={{backgroundColor: theme}} className="rounded px-6 py-2 text-white hover:opacity-50 border-none">{`Adopt ${name}!`}</button>
                )
              }
            </ThemeContext.Consumer>
            {
              showModal ?
                <Modal toggleModal={this.toggleModal}>
                    <h1 className="text-6xl text-center mb-12">Would you like to adopt {name}?</h1>
                    <div className="flex justify-center">
                      <button className="bg-blue-800 mr-3 rounded px-6 py-2 text-white hover:opacity-80 border-none" onClick={this.adopt}>Yes</button>
                      <button className="bg-gray-500 rounded px-6 py-2 text-dark hover:opacity-80 border-none" onClick={this.toggleModal}>No</button>
                    </div>
                </Modal> :
                null
            }
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-1 md:row-start-1">
            <Carousel images={images} />
          </div>
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
