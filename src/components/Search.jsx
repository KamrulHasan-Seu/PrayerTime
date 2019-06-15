import React, { Component } from 'react'

 class Search extends Component {

    state = {
        country : [],
        city : []
    }
    searchPrayer = e =>{
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }
    changeHandler = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {
        // console.log("times : ",this.props)
        return (
            
            <div className="searchDiv">
                <form onSubmit={this.searchPrayer} className="searchForm">
                    <input className="searchCountry" type="text" placeholder="Enter Country" name="country" onChange={this.changeHandler}/>
                    <input className="searchCity" type="text" placeholder="Enter City" name="city" onChange={this.changeHandler}/>
                    <input className="searchDate" type="date" placeholder="Enter Date" name="date" onChange={this.changeHandler}/>
                    <button >Search</button>
                </form>
            </div>
        )
    }
}

export default Search
