import React, { Component } from 'react';

const jumbotronStyle = {
	backgroundColor: '#337ab7',
};

const textStyle = {
	color: '#fff',
};

export default class Programming extends Component{

	constructor(){
        super();
        this.state = {
            term: "",
        };
    }

    render(){

        let languages = this.props.items,
        	term = this.state.term.trim().toLowerCase();

        if(term.length > 0){

            languages = languages.filter(function(l){
                return l.name.toLowerCase().match( term );
            });

        }

    	return(

    		<div>

	    		<div className="jumbotron text-center" style={jumbotronStyle}>
				  <h1 style={textStyle}><i className="fa fa-code"></i> <b>Programming Languages</b></h1> 
				</div>
	  
				<div className="container">

				  <div className="row text-center">

				    <div className="col-md-4 col-md-offset-4">

				      	<h3>Search</h3>
				    	<input className="form-control" value={this.state.term} onChange={e => this.setState({term: e.target.value})} placeholder="Programming Language" />
				    	
				    	<hr/>

				     	<ul className="list-group">
				     	{ 
				     		languages.map(function(l){
                            	return <li className="list-group-item" key={l.name}>{l.name}</li>
                        	})

                        }
						</ul>

				    </div>

				  </div>

				</div>

			</div>

    	);

    }

}

