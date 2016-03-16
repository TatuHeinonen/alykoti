Window = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return{ 
			actions: Actions.find({}).fetch()
		}
	},

renderActions(){
	// Get actions from this.data.actions
	return this.data.actions.map((action) => {
		return <Action key={action._id} action={action} />
	});
},


deletoi(){
	Actions.remove(this.props.action._id);
},

render(){
	return(
		<div className="container">
			<header>
				<h1>Valitse Älykoti</h1>

				<form className="login1" onClick={this.deletoi}>
					<input
						className="submitLogin1"
						type="button" 
						value="Älytalo"
						readOnly={true}/>							
			
					<input
					    className="submitLogin2"
						value="Älymökki"
						type="button"
						readOnly={true}/>
						
					<input
						className="submitLogin3"
						type="button" 
						value="Älysauna"
						readOnly={true}/>	
				</form>
			</header>
				{this.renderActions()}
		</div>
	);
}
});
