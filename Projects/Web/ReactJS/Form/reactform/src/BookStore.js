  import React from 'react';
  class BookStore extends React.Component {
    constructor(props){
      super(props);
      this.state = {currentStep: 1, formValues: {}};
      this.updateFormData = this.updateFormData.bind(this);
    }
    render(){
      switch (this.state.currentStep) {
        case 1:
        return <BookList updateFormData={this.updateFormData} />;
        case 2:
        return <ShippingDetail updateFormData={this.updateFormData}/>; 
        case 3:
        return <DeliveryDetails updateFormData={this.updateFormData}/>;
        case 4:
        return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData}/>
        case 5:
        return <Success data={this.state.formValues}/>
        default:
        return <ShippingDetail updateFormData={this.updateFormData}/>;
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    updateFormData(formData) {
      //updateing bookStore component
      let formValues = Object.assign({}, this.state.formValues, formData);
      let nextStep = this.state.currentStep + 1;
      this.setState({currentStep: nextStep, formValues});
    }
  }

  class BookList extends React.Component {
    constructor(props){
      super(props);
      this.state = { books: [{ name: 'Zero to One', author: 'Peter Thiel' },
      { name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
      { name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
      ],
      selectedBooks: [],
      error: false };
    }
    _renderBook(book) {
      return(
        <div className="checkbox" key={book.id}>
        <label>
        <input type="checkbox" value={book.name} onChange={this.handleSelectedBooks.bind(this)}/> {book.name} -- {book.author}
        </label>
        </div>
        );
    }
    _renderError()
    {
      if (this.state.error === false) return;
      return (
        <div className="alert alert-danger">
        {this.state.error}
        </div>);
    }
    render() {
      var errorMessage = this._renderError();
      return(
        <div>
        <h1> Choose from wide variety of books available in our store </h1>
        {errorMessage}
        <form onSubmit={this.handleSubmit.bind(this)} >
        {this.state.books.map((book) => {
          return this._renderBook(book); })
      }
      <input type="submit" className="btn btn-success" />
      </form>
      </div>
      );
    }
    handleSelectedBooks(event)
    {
      let selectedBooks = this.state.selectedBooks;
      let index = selectedBooks.indexOf(event.target.value);
      let unadded = (index === -1);
      if (unadded) {
        selectedBooks.push(event.target.value);
      }
      else {
        selectedBooks.splice(index,1);
      }
      this.setState({selectedBooks});
    }
    handleSubmit(event) {
      event.preventDefault();
      let noBook = (this.state.selectedBooks.length === 0);
      if (noBook) {
        this.setState({error : "Please select at least one book!"})
        return;
      } else {
        this.setState({error: false});
      }
      this.props.updateFormData({selectedBooks: this.state.selectedBooks});
    }
  }

  class ShippingDetail extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        fullName: "",
        contactNumber: "",
        shippingAddress: "",
        error: false
      };
    //biding own helper functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  _renderError() {
    if (this.state.error === false) return;
    return (
      <div className="alert alert-danger">
      {this.state.error}
      </div>);
  }
  _validate() {
    let state = this.state;
    let notValid = state.fullName === '' || state.contactNumber === '' || state.shippingAddress === '';
    let errorMessage = "Please fill out all the information required, otherwise we will not be able to deliver the order!"
    if (notValid) this.setState({error: errorMessage});
    else this.setState({error: false});
    return !notValid;
  }
  render(){
    let errorMessage = this._renderError();
    return(
      <div>
      <h1>Enter your shipping information</h1>
      {errorMessage}
      <form onSubmit ={this.handleSubmit}>
      <div className="form-group">
      <input type="text" className="form-control" value={this.state.fullName} placeholder="Full Name" onChange={(event) => this.handleChange(event, 'fullName')}/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" value={this.state.contactNumber} placeholder="Contact Number" onChange={(event)=>this.handleChange(event, 'contactNumber')} />
      </div>
      <div className="form-group">
      <input type="text" className="form-control" value={this.state.shippingAddress} placeholder="Shipping Address" onChange={(event)=>this.handleChange(event, 'shippingAddress')} />
      </div>
      <div className="form-group">
      <input type="submit" className="btn btm-submit" ref="submit"/>
      </div>
      </form>
      </div>
      );
  }
  handleChange(event, type){
    let state = this.state;
    state[type] = event.target.value;
    this.setState(state);
    //for debugging
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = { 
      fullName: this.state.fullName,
      contactNumber: this.state.contactNumber,
      shippingAddress: this.state.shippingAddress
      };
      if (this._validate()) {
        this.props.updateFormData(formData);
      }
    }
  }

  /*class ShippingDetail extends React.Component {
    constructor(props)
    {
      super(props);
    }
    render()
    {
      return(
        <div>haha</div>);
    }
  }
  */
  //implementing Delivery Details
  class DeliveryDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        deliveryOption: 'Primary'
      }
    }
   render() {
     return (
      <div>
       <h1>Choose your delivery options here</h1>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="radio">
          <label>
            <input type="radio" checked={this.state.deliveryOption === "Primary"} value="Primary" onChange={this.handleChange.bind(this)}/>
            Primary : Next day delivery
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" checked={this.state.deliveryOption === "Normal"} value="Normal" onChange={this.handleChange.bind(this)}/>
            Normal : Delivery in 3-4 business day
          </label>
        </div>
        <button className="btn btn-success">Submit</button>
       </form>
      </div>);
   }
   handleChange(event) {
    let value = event.target.value;
    this.setState({deliveryOption: value});
   }
   handleSubmit(event) {
    event.preventDefault();
    console.log('Submit delivery method completed');
    let formData = {
      deliveryOption : this.state.deliveryOption
    };
    this.props.updateFormData(formData);
   }
 }
//confirmation component
class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Confirmation submission recorded!');
    this.props.updateFormData({});
  }
  render() {
    let data = this.props.data;
    return (<div>
      <h1>Are you sure you want to submit the data?</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <strong>Full Name: </strong> {data.fullName}
          </div>
          <div>
            <strong>Contact Number: </strong> {data.contactNumber}
          </div>
          <div>
            <strong>Shipping Details: </strong> {data.shippingAddress}
          </div>
          <div>
            <strong>Selected Books</strong> {data.selectedBooks.join(", ")}
          </div>
          <button className="btn btn-success">Place holder</button>
        </form>
    </div>);
  }
}

class Success extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let numberOfDays = "1 to 2 ";
    let data = this.props.data;
    if (this.props.data.deliveryOption === 'Normal')
    {
      numberOfDays = "3 to 4 ";
    }
    return (
      <div className="alert alert-success">
        <h2>Thank you for shopping with us, <strong>{this.props.data.fullName}</strong></h2>
        <h4>You will soon get <strong>{data.selectedBooks.join(", ")}</strong> at <strong>{data.shippingDetails}</strong> in approrximately {numberOfDays} days</h4>
      </div>
    );
  }
}

 export default BookStore;
