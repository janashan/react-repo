import React from "react";
import { Button, Form } from "semantic-ui-react";

const countries = [
  {
    name:'India',
    value:'in'
  },{
    name:'United States of America',
    value:'us'
  },{
    name:'United Kingdom',
    value:'gb'
  },{
    name:'Canada',
    value:'ca'
  },{
    name:'China',
    value:'cn'
  },{
    name:'Russia',
    value:'ru'
  },{
    name:'France',
    value:'fr'
  },{
    name:'Philippines',
    value:'ph'
  },{
    name:'United Arab Emirates',
    value:'ae'
  },{
    name:'Australia',
    value:'au'
  },{
    name:'Argentina',
    value:'ar'
  },{
    name:'Indonesia',
    value:'id'
  },
  {
    name:'South Korea',
    value:'kr'
  }
];

const categories = [
  {
    name:'Business',
    value:'business'
  },{
    name:'Entertainment',
    value:'entertainment'
  },{
    name:'General',
    value:'general'
  },{
    name:'Health',
    value:'health'
  },{
    name:'Science',
    value:'science'
  },{
    name:'Sports',
    value:'sports'
  },
  {
    name:'Technology',
    value:'technology'
  }
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTopic: "",
      country: "in",
      category: "general"
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
 
  componentDidMount(){
    
    this.props.searchForTopic(this.state);
    this.setState({
      country:'in',
      category:'general',
    })
  }
  
  handleSubmit = event => {
    
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
              onChange={this.handleChange}
              name="country"
              style={{margin:'6px',width:'50%'}}
            >
             {
               countries.map((country) =>(
                 <option value={country.value}>{country.name}</option>
               ))
             }
            </select>
            <select
              as='select'
              onChange={this.handleChange}
              name="category"
              style={{margin:'6px',width:'50%'}}

            >
              {categories.map((category) =>(
                <option value={category.value}>{category.name}</option>
              ))}
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
