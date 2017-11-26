import React from 'react';
import { StyleSheet, View , TextInput, TouchableOpacity, Text, Image, StackNavegation, FlatList } from 'react-native';
 
 

export default class Language extends React.Component {
	constructor(){
	        super()
	      this.state = {
        		chambres: null,
   			 };
	    }

	linker(comp){
		this.props.navigation.navigate(comp);
	}

// APPEL POC begin....


 	// componentDidMount() { 
 	// 	this.fetchData(); 
 	// }

 	fetchData() { 
 		fetch('http://192.168.1.33:3000/rooms') 
 		.then((response) => response.json()) 
 		.then((responseData) => { 
 			     		
 			this.setState({ chambres: responseData, }); 
 			console.log("########### this.state.chambres");
 			console.log(this.state.chambres);  
 		}) 
 		.done(); 
 	}

	 
            
 //    } 
  
            // .then( res => console.log(res)  )    response.json();
            // .then( data => console.log(data) )
//APPEL POC end....
 
	render() {
		return (
			<View style={styles.container}>
 
				<View>
					<TouchableOpacity style={styles.buttonVert} onPress={() => this.fetchData()}>
						<Text style={styles.text}>Appel POC X</Text>
					</TouchableOpacity>
				</View>
 				
 				<View>
       				  <FlatList data={this.state.chambres} renderItem={({ item }) =>  <Text>{item._id} {item.name}</Text>} />
      			</View>
				  
			</View> 
 			
		);
	}
}

const styles = StyleSheet.create({
		container: {
		padding: 20,
		backgroundColor: '#fff',
		flex: 1,
	},

	logo:{
		height: 150,
		width: 270,
		alignSelf: 'center',
	},

	spacing:{
		paddingVertical: 25,
	},


	buttonBlue: {
		backgroundColor: '#00ADE9',
		flexDirection: 'row',
		alignItems: 'center',

	},

	buttonVert: {
		backgroundColor: '#8ABD24',
		flexDirection: 'row',
		alignItems: 'center',
	},

	buttonRose: {
		backgroundColor: '#E3007E',
		flexDirection: 'row',
		alignItems: 'center',
	},

	text: {
		color: '#fff',
		fontSize: 18,
	},

});

