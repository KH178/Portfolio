import React from 'react';
import axios from 'axios'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      author: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
    }
    
    handleSubmit(e) {
        // e.preventDefault();
        const { title, description, author } = this.state;
        axios.post('http://localhost:8080/api/articles', {
            title,
            description,
            author
        }).then(function (res) {
            console.log(res.data);
        }).catch(function (err) {
            console.log(err);
        }).finally(function () {
            alert('yo')
        })
        // axios.get('http://localhost:8080/api/articles').then(function (res) {
        //     console.log(res.data);
        // }).catch(function (err) {
        //     console.log(err);     
        // }).finally(function () {
        //     alert('yo')
        // })
    }

  render() {
    const { title, description, author } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3" style={{textAlign: 'center'}}>
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Article Title"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('description', ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={description}>
        </textarea>
        <input
          onChange={(ev) => this.handleChangeField('author', ev)}
          value={author}
          className="form-control my-3"
          placeholder="Article Author"
        />
        <button className="btn btn-primary float-right" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Form;