import React from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTopic: "",
      country: "",
      category: ""
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = event => {
    debugger
    event.preventDefault();
    this.props.searchForTopic(this.state);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <select
              as='select'
              defaultValue={this.state.country}
              onChange={this.handleChange}
              name="country"
              style={{margin:'6px',width:'50%'}}
            >
              <option value=''>Select Country</option>
              <option value='in'>India</option>
              <option value='us'>United States of America</option>
              <option value='gb'>United Kingdom</option>
              <option value='ca'>Canada</option>
              <option value='cn'>China</option>
              <option value='ru'>Russia</option>
              <option value='fr'>France</option>
              <option value='ph'>Philippines</option>
              <option value='ae'>United Arab Emirates</option>
              <option value='au'>Australia</option>
              <option value='ar'>Argentina</option>
              <option value='kr'>South Korea</option>
              <option value='id'>Indonesia</option>
            </select>
            <select
              as='select'
              defaultValue={this.state.category}
              onChange={this.handleChange}
              name="category"
              style={{margin:'6px',width:'50%'}}

            >
              <option value=''>All Category</option>
              <option value='business'>Business</option>
              <option value='entertainment'>Entertainment</option>
              <option value='general'>General</option>
              <option value='health'>Health</option>
              <option value='science'>Science</option>
              <option value='sports'>Sports</option>
              <option value='technology'>Technology</option>
            </select>
            <Form.Input
              style={{margin:'6px'}}
              placeholder="Search topic"
              value={this.state.searchTopic}
              onChange={this.handleChange}
              name="searchTopic"
            />
              
            <Button style={{margin:'6px'}} type="submit" color="green">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
