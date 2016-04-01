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
					alert('The password you gave is wrong.')
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
		<img src="header.png"/>
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
				<h3><img src="/back.png" 
						className="bakki"
						onClick={()=> this.clickHandler(0, user, !isAdministrator)}
						/></h3>
				<h1>Select smarthouse</h1>
					<h2> Logged in as adult</h2>
					<div className="login1">		
					<img src="/home.png"
						className="building"
						onClick={()=>this.clickHandler(5, home, !isAdministrator)}
						/>
					<img src="/cottage.png"
					className="building" />
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
			<div>
			
				<h1>Select smarthouse<img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(0, user, !isAdministrator)}
										/>
					</h1>
					<h2>Logged in as child</h2>
					<div className="login1">		
					<img src="/home.png"
						onClick={()=>this.clickHandler(6, home, !isAdministrator)}
						/>
				</div>
			
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
       			 			<button className="button-role"
       			 				onClick={()=> this.clickHandler(1, other, !isAdministrator)}
       			 			>Adult
							</button>
							<button className="button-role"
								onClick={()=> this.clickHandler(7, other, !isAdministrator)}
							>Child 

							</button>
							<button className="button-role"
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

	getInitialState(){
		return(
		{button1: true},
		{button2: true},
		{button3: true},
		{button4: true},
		{button5: true},
		{button6: true},
		{button7: true})
	},


	render(){
		let status1 = this.state.status1 ? true : false;
		let status2 = this.state.status2 ? true : false;
		let status11 = this.state.status11 ? true : false;
		const rooli = "the user selection?";
		const isAdministrator = true;
		return(
			<div className="mrAdmin">
					<h1>Good day, sir! <img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(0, rooli, !isAdministrator)}
										/>
					</h1>
					<h2>Logged in as administrator</h2>
					<form>
					<table>
						<tr>
							<td colSpan="4">
								<b><u>User</u></b>
							</td>
							<td>
								<b><u>On/Off</u></b>
							</td>
						</tr>
						<tr>
							<td colSpan="5">
								<b>Adult</b>
							</td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td colSpan="3">
								<b>Home</b>
							</td>
							<td>
								<input type="radio" name="onoff1"
								checked
								 />
								<input type="radio" name="onoff1"

								/>
							</td>
						</tr>
						<tr>
							<td colSpan="2">&nbsp;</td>
							<td colSpan="2">Children's room</td>
							<td>
								<input type="radio" name="onoff2"
								checked/>
								<input type="radio" name="onoff2"/>
							</td>
						</tr>
						<tr>
							<td colSpan="3">&nbsp;</td>
							<td>Lights</td>
							<td>
								<input type="radio" name="onoff3" checked />
								<input type="radio" name="onoff3"/>
							</td>
						</tr>
						<tr>
							<td colSpan="2">&nbsp;</td>
							<td colSpan="2">Kitchen/Living room</td>
							<td>
								<input type="radio" name="onoff4" checked/>
								<input type="radio" name="onoff4"/>
							</td>
						</tr>
						<tr>
							<td colSpan="3">&nbsp;</td>
							<td>Lights</td>
							<td>
								<input type="radio" name="onoff5" checked/>
								<input type="radio" name="onoff5"/>
							</td>
						</tr>
						<tr>
							<td colSpan="3">&nbsp;</td>
							<td>Oven</td>
							<td>
								<input type="radio" name="onoff6" checked/>
								<input type="radio" name="onoff6"/>
							</td>
						</tr>
						<tr>
							<td colSpan="3">&nbsp;</td>
							<td>TV</td>
							<td>
								<input type="radio" name="onoff7" checked/>
								<input type="radio" name="onoff7"/>
							</td>
						</tr>
					</table>
					</form>
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
					<h1>Hello! This is the children's room.<img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(5, previous, !isAdministrator)}
										/>
					</h1>
					<h2>Logged in as adult</h2>
					<span>
					<button className="button-widget"
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
					<h1>Hiya, kid!<img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(6, rooli, !isAdministrator)}
										/>
					</h1>
					<h2>Logged in as child</h2>
					<span>
					<button className="button-widget"
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
		return({lightsOn: false}, 
		{valueOven: 0}, 
		{ovenOn: false}, 
		{tvOn: false}, 
		{tvChannel: null})
	},

	handleOven(event){
		this.setState({valueOven: event.target.value});
	},

	lightsHandler(event){
		this.setState({lightsOn: !this.state.lightsOn})
	},

	setOven(event){
		this.setState({ovenOn: !this.state.ovenOn})
		this.setState({valueOven: 0})

	},

	setTV(event){
		this.setState({tvOn: !this.state.tvOn})
		this.setState({tvChannel: 1})
		this.setState({tv1: true})
	},

	setChannel(channel){
			if(channel === 1){
				this.setState({tv1: !this.state.tv1})
				this.setState({tv2: false})
				this.setState({tvChannel: channel})
			}
			else {
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
					<h1>Hello! This is the kitchen/living room.<img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(5, rooli, !isAdministrator)}
										/>
					</h1>
					<h2>Logged in as adult</h2>
					<span>
					<button className="button-widget"
							onClick={()=> this.lightsHandler(lightsOn)}
					>Lights {lightsOn}
					</button>
					<button className="button-widget"
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
						
						<button className="button-widget"
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
					<h1>Select room<img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(1, smarthouse, !isAdministrator)}
										/></h1>
										<h2>Logged in as adult</h2>
						<span className="testing">
       			 			<button className="button-room"
       			 				onClick={()=> this.clickHandler(3, lastenhuone, !isAdministrator)}
       			 				
       			 			>Children's room
							</button>
							<button className="button-room"
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
					<h1>Select room<img src="/back.png" 
						className="bakki"
										onClick={()=> this.clickHandler(7, previous, !isAdministrator)}
										/></h1>
										<h2>Logged in as child</h2>
						<span className="testing">
       			 			<button className="button-room"
       			 				onClick={()=> this.clickHandler(8, lastenhuone, !isAdministrator)}
       			 				
       			 			>Children's room
							</button>
							
						</span>
       			</header>
      		</div>

			)
}

});
