Komponent = React.createClass({

getInitialState(){
	return{
		innerComponent: 0
}
},

stateChanger(number, nimi, admin){
	if(this.state > number){
		if(confirm('Are you sure you want to move to ' + nimi))
		this.setState({innerComponent: number})
		else{
			return false;
		}
	}
	else{
		if(confirm('Are you sure you want to move to ' + nimi)){
			if(admin === true){
				if(prompt('Please enter the password.') === "admin"){
					this.setState({innerComponent: number})
				}
				else{
					alert('The password you gave is wrong, n00b.')
				}
			}
			else{
			this.setState({innerComponent: number})
		}
		}else{
			return false;
		}
	}
},

componentHandler(){
	switch(this.state.innerComponent){
		case 1:
		return <RoleView changeState={this.stateChanger}/>

		case 2:
		return <AdminView changeState={this.stateChanger}/>

		case 3:
		return <ChildView changeState={this.stateChanger}/>

		case 4:
		return <AdultView changeState={this.stateChanger}/>

		default:
		return <MainView changeState={this.stateChanger}/>
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

MainView = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},
	render(){
		const home = "the home-screen?";
		const isAdministrator = true;
		return(
			<div className="container">
			<header>
				<h1>Choose your smarthouse</h1>
					<div className="login1">		
					<button className = "button-home"
						onClick={()=>this.clickHandler(1, home, !isAdministrator)}
						>Home
					</button>
					<button className ="button-cottage"
					>Cottage
					</button>
				</div>
			</header>
		</div>
			)
	}
});

RoleView = React.createClass({
	clickHandler(number, nimi, admin){
		this.props.changeState(number,nimi, admin);
	},
	render(){
		const alykoti = "the smarthouse view?";
		const aikuinen = "the adult view?";
		const lapsi = "the child view?"
		const admin = "the administrator view?"
		const isAdministrator = true;
		return(
			
			<div className ="newContainer">
				<header>
					<h1>Choose your role<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(0, alykoti, !isAdministrator)}
										>Back</button>
										</h1>
						<span className="testing">
       			 			<button className="button-adult"
       			 				onClick={()=> this.clickHandler(4, aikuinen, !isAdministrator)}
       			 				
       			 			>Adult
							</button>
							<button className="button-child"
								onClick={()=> this.clickHandler(3, lapsi, !isAdministrator)}
							>Child 
							</button>
							<button className="button-admin"
								onClick={()=> this.clickHandler(2, admin, isAdministrator)}
							>Administrator
							</button>
						</span>
       			</header>
      		</div>

			)

	}
});

AdminView = React.createClass({
	clickHandler(number, nimi, admin){
		this.props.changeState(number,nimi,admin);
	},

	render(){
		const rooli = "the role view?";
		const isAdministrator = true;
		return(
			<div className="mrAdmin">
				<header>
					<h1>Good day, sir! <button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(1, rooli, !isAdministrator)}
										>Back</button>
					</h1>
				</header>
			</div>
			)
	}

});

ChildView = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},

	getInitialState(){
		return{lightsOn: false}
	},

	lightsHandler(event){
		this.setState({lightsOn: !this.state.lightsOn})
	},
	render(){
		const rooli = "the role view?"
		const isAdministrator = true;
		let lightsOn = this.state.lightsOn ? 'are on.' : 'are off.';
		return(
			<div className="childView">
				<header>
					<h1>Hiya, kid!<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(1, rooli, !isAdministrator)}
										>Back</button>
					</h1>
					<span>
					<button className="button-lightsOn"
							onClick={()=> this.lightsHandler(lightsOn)}
					>Lights {lightsOn}
					</button>
					</span>
				</header>
				</div>

			)
	}

});

AdultView = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},

	getInitialState(){
		return{lightsOn: false}, {valueOven: 0}, {ovenOn: false}, {tvOn: false}, {tvChannel: null}
	},

	handleOven(event){
		this.setState({valueOven: event.target.value});
	},

	lightsHandler(event){
		this.setState({lightsOn: !this.state.lightsOn})
	},

	setOven(event){
		this.setState({ovenOn: !this.state.ovenOn})

	},

	setTV(event){
		this.setState({tvOn: !this.state.tvOn})

	},

	setChannel(channel){
			if(channel === 1){
				this.setState({tv1: !this.state.tv1})
				this.setState({tv2: false})
				this.setState({tvChannel: channel})
			}
			else{
				this.setState({tv2: !this.state.tv2})
				this.setState({tv1: false})
				this.setState({tvChannel: channel})
			}
	},

	render(){
		const rooli = "the role view?";
		const isAdministrator = true;
		let lightsOn = this.state.lightsOn ? 'are on.' : 'are off.';
		let ovenOn = this.state.ovenOn ? false : true;
		let ovenText = this.state.ovenOn ? 'is on.' : 'is off.';
		let ovenInfo = this.state.ovenOn ? 'Please adjust the oven temperature. Now: '+ this.state.valueOven + ' degrees.' : '';
		let tvText = this.state.tvOn ? 'on. Please select channel.' : 'off.';
		let tvOn = this.state.tvOn ? true : false;
		let currentChannel = this.state.tvOn ? 'You are watching channel ' + this.state.tvChannel + '.' : '';
		let tv1 = this.state.tv1 ? true : false;
		let tv2 = this.state.tv2 ? true : false;
		return(
			<div className="childView">
				<header>
					<h1>Hello!<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(1, rooli, !isAdministrator)}
										>Back</button>
					</h1>
					<span>
					<button className="button-lightsOn"
							onClick={()=> this.lightsHandler(lightsOn)}
					>Lights {lightsOn}
					</button>
					<button className="button-oven"
					onClick={()=> this.setOven()}
					>
					The oven {ovenText} 
					 </button>
					 <div>
						{ovenInfo} 
						</div>
					 <input 
						className="slideri"
						id="slider" 
						hidden={ovenOn}
						type="range" 
						min="0" 
						max="250" 
						value={this.state.valueOven}
						onChange={this.handleOven}
						step ="10"
						/>
						
						<button className="button-tv"
						onClick={()=> this.setTV()}
						>The television is {tvText}
						</button>
						<div>
						{currentChannel}
						</div>
						<form >
						<input 
						type="radio" 
						value="channel1" 
						hidden = {!tvOn}
						checked = {tv1}
						onClick={()=> this.setChannel(1)}
						/> 
						<br> </br>
						<input
						type="radio"
						value="channel2"
						hidden = {!tvOn}
						checked = {tv2}
						onClick= {()=> this.setChannel(2)}
						/> 
						</form>
					</span>
				</header>
				
				</div>
			)
	}

});
