Window = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return{ 
			actions: Actions.find({}).fetch()
		}
	},

componentWillMount(){
	console.log(this.props);
},


renderActions(){
	// Get actions from this.data.actions
	return this.data.actions.map((action) => {
		return <Action key={action._id} action={action} />
	});
},


handleClick1(event){
	this.setState({clicked: !this.state.clicked});
},

functionality1(event1){
	window.open('http://www.tunturisusi.com/pikkumarmosetti/');
},

getInitialState(){
	return {clicked:false}
},

wannaConfirm(event){
	if(confirm("Haluatko varmasti valita tämän?")) 
		alert('Jepjep ')
		else alert('Nössö')
},

render(){
	return(
		<div className="container">
			<header>
				<h1>Valitse Älykoti</h1>
				<span className="login1">
					<input
						className="submitLogin1" 					
						value="Älytalo"
						type="button"
						ref="button1"
						readOnly={true}
						/>
					<input
					    className="submitLogin2"
						value="Älymökki"
						type="button"
						ref="button2"
						readOnly={true}/>
						
					<button
						onClick={this.wannaConfirm}
						className="submitLogin3"
						type="button" 
						ref="button3"
					>Älysauna
					</button>	
					<button 
						onClick={this.functionality1}
						className="buttonTest"
						type="button" 
						ref="button4"
						>Vituttaako koodaus? Tästä söpö marmosetti.
						
					</button>
					
				</span>
			</header>
				



		</div>
	);
}
});
