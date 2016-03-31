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
		return <SmartHouseSelectionAdult changeState={this.stateChanger}/>

		case 2:
		return <AdminView changeState={this.stateChanger}/>

		case 3:
		return <ChildrensRoomByAdult changeState={this.stateChanger}/>

		case 4:
		return <KitchenlivingRoom changeState={this.stateChanger}/>

		case 5:
		return <AdultRoomView changeState={this.stateChanger}/>

		case 6:
		return <ChildRoomView changeState={this.stateChanger}/>

		case 7:
		return <SmartHouseSelectionChild changeState={this.stateChanger}/>

		case 8:
		return <ChildrensRoomByChild changeState={this.stateChanger}/>

		default:
		return <RoleView changeState={this.stateChanger}/>
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

SmartHouseSelectionAdult = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},
	render(){
		const user = "the user selection?";
		const home = "the room selection as an adult?"
		const isAdministrator = true;
		return(
			<div className="Adultcontainer">
			<header>
				<h1>Select smarthouse<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(0, user, !isAdministrator)}
										>Back</button></h1>
					<h2> Logged in as adult</h2>
					<div className="login1">		
					<button className = "button-home"
						onClick={()=>this.clickHandler(5, home, !isAdministrator)}
						>Home
					</button>
					<button className ="button-cottage"
					>Cottage (not functional)
					</button>
					<button className ="button-sauna"
					>Sauna (not functional)
					</button>
				</div>
			</header>
		</div>
			)
	}
});

SmartHouseSelectionChild = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},
	render(){
		const user = "the user selection?";
		const home = "the room selection as a child?"
		const isAdministrator = true;
		return(
			<div className="childrenscontainer">
			<header>
				<h1>Select smarthouse<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(0, user, !isAdministrator)}
										>Back</button></h1>
					<h2>Logged in as child</h2>
					<div className="login1">		
					<button className = "button-home"
						onClick={()=>this.clickHandler(6, home, !isAdministrator)}
						>Home
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
		const other = "the smarthouse view?"
		const admin = "the administrator view?"
		const isAdministrator = true;
		return(
			
			<div className ="newContainer">
				<header>
					<h1>Select your role
										</h1>
						<span className="testing">
       			 			<button className="button-adult"
       			 				onClick={()=> this.clickHandler(1, other, !isAdministrator)}
       			 			>Adult
							</button>
							<button className="button-child"
								onClick={()=> this.clickHandler(7, other, !isAdministrator)}
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
		const rooli = "the user selection?";
		const isAdministrator = true;
		return(
			<div className="mrAdmin">
				<header>
					<h1>Good day, sir! <button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(0, rooli, !isAdministrator)}
										>Back</button>
					</h1>
					<h2>Logged in as administrator</h2>
				</header>
			</div>
			)
	}

});

ChildrensRoomByAdult = React.createClass({
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
		const previous = "the previous selection screen?"
		const isAdministrator = true;
		let lightsOn = this.state.lightsOn ? 'are on.' : 'are off.';
		return(
			<div className="adultView">
				<header>
					<h1>Hello! This is the children's room.<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(5, previous, !isAdministrator)}
										>Back</button>
					</h1>
					<h2>Logged in as adult</h2>
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

ChildrensRoomByChild = React.createClass({
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
		const rooli = "the previous selection screen?"
		const isAdministrator = true;
		let lightsOn = this.state.lightsOn ? 'are on.' : 'are off.';
		return(
			<div className="childView">
				<header>
					<h1>Hiya, kid!<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(6, rooli, !isAdministrator)}
										>Back</button>
					</h1>
					<h2>Logged in as child</h2>
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

KitchenlivingRoom = React.createClass({
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
		const rooli = "the previous selection screen?";
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
			<div className="adultroom">
				<header>
					<h1>Hello! This is the kitchen/living room.<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(5, rooli, !isAdministrator)}
										>Back</button>
					</h1>
					<h2>Logged in as adult</h2>
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

AdultRoomView = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},

	render(){
		const smarthouse = "the previous selection?"
		const lastenhuone = "the children's room?"
		const sekahuone = "the kitchen/living room?";
		const isAdministrator = true;
	return(
			
			<div className ="adultContainer">
				<header>
					<h1>Select room<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(1, smarthouse, !isAdministrator)}
										>Back</button>  </h1>
										<h2>Logged in as adult</h2>
						<span className="testing">
       			 			<button className="button-childrensroom"
       			 				onClick={()=> this.clickHandler(3, lastenhuone, !isAdministrator)}
       			 				
       			 			>Children's room
							</button>
							<button className="button-kitchenlivingroom"
								onClick={()=> this.clickHandler(4, sekahuone, !isAdministrator)}
							>Kitchen/living room 
							</button>
							
						</span>
       			</header>
      		</div>

			)
}


});

ChildRoomView = React.createClass({
	clickHandler(number,nimi,admin){
		this.props.changeState(number,nimi,admin);
	},

	render(){
		const lastenhuone = "the children's room?"
		const previous = "the previous selection screen?"
		const isAdministrator = true;
	return(
			
			<div className ="childContainer">
				<header>
					<h1>Select room<button 
										className="button-takaisin"
										onClick={()=> this.clickHandler(7, previous, !isAdministrator)}
										>Back</button> </h1>
										<h2>Logged in as child</h2>
						<span className="testing">
       			 			<button className="button-childrensroom"
       			 				onClick={()=> this.clickHandler(8, lastenhuone, !isAdministrator)}
       			 				
       			 			>Children's room
							</button>
							
						</span>
       			</header>
      		</div>

			)
}

});
