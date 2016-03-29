Komponent = React.createClass({
	
handleClick(event){
	
},

getInitialState(){
	return{
		innerComponent: 0
}
},

stateChanger(number){
	this.setState({innerComponent: number})
},

componentHandler(){
	switch(this.state.innerComponent){
		case 1:
		return <AlaKomponent changeState={this.stateChanger}/>

		default:
		return <PaaNakyma changeState={this.stateChanger}/>
	}

},

render(){
	return(
		<div className="container">
			{this.componentHandler()}
		</div>
	);
}
});

PaaNakyma = React.createClass({
	clickHandler(){
		this.props.changeState(1);
	},
	render(){
		return(
			<div className="container">
			<header>
				<h1>Valitse Älykoti</h1>
					<span className="login1">		
					<button 
						onClick={()=>this.clickHandler()}
						className = "submitLogin1"
						>
						Lorenz0n opetus koulu
					</button>
					
						
				</span>
			</header>
		</div>
			)
	}
});

AlaKomponent = React.createClass({
	clickHandler(){
		this.props.changeState(0);
	},
	render(){
		return(
			<div className ="newContainer">
				<header>
					<h1>Valitse rooli</h1>
						<span className="Mikkopaskaa">
       			 			<button 
       			 				onClick={()=> this.clickHandler()}
       			 				className="submitLogin2"
       			 			>Lorenz0n oikein kiriotus kolu
							</button>
						</span>
       			</header>
      		</div>

			)

	}
})
