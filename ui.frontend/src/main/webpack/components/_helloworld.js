import React from 'react';

class HelloWorld extends React.PureComponent {

	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<p>
						This is hello world component
					</p>
					<h1>{this.props.title}</h1>
				</div>
			</div>
		);
	}

}

export default HelloWorld;