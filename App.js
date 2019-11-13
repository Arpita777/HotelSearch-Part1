import React from 'react';
import RestuarentList from './RestuarentList.js'
import './App.css';
import Restuarent from './Restuarent.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      list: RestuarentList.filter(item => item.RestaurantName!=''),
      cuisines:RestuarentList.map(item => item.Cuisines)
    };
   
  }

  

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
						<List items={this.state.list} cuisine={this.state.cuisines}  />
          </section>
          <hr />
      
        </div>
      </div>
    );
  }
}

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: [],
      color:'yellow'
     
     
		};
		this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
   
	}
	
	componentDidMount() {
    this.setState({
      filtered: this.props.items,
     
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items,
      
    });
  }
  
	handleClick(){
    this.setState({
      color:'blue'
    })
  }
	handleChange(e) {
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];
		
		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.items;
			
			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.RestaurantName.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return (lc==filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
	
	render() {
		return (
			<div>
				<input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
          <table style={{
          backgroundColor: 'black',
          color:'white',
          display:'block',
          paddingLeft:"50"
        }}>
          <tbody>
            <tr>
              <td>
                <img width="50"
                src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18688235.jpg"
                alt = "???"/>
              </td>
              <td>
               HotelSearch
             </td>
            </tr>
            
          </tbody>
        </table>
					
           <table>
       <tbody>
        <tr>
         <td>
  {this.state.filtered.map(item => 
             <Restuarent key={item.RestuarentID} item={item} />
	
	)}
</td>
          
        </tr>
      </tbody>
    </table>
           
				</div>
		)
	}
}



export default App;
