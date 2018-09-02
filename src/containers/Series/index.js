import React, {Component} from 'react'

class Series extends Component{
    state = {
        series: []
      }
    componentDidMount(){
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then((response) => response.json())
    .then(json => this.setState({series: json}));
    }
    render(){
        return(
            <div>
                This measures the length of an array that is pulled from an api: {this.state.series.length}
            </div>
        )
    }
}

export default Series;