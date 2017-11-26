import React from 'react';
import { View, Text, StackNavegation, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';


export default class Qualify extends React.Component {
	static navigationOptions = {
	title: "comment",
	 }



	 constructor(){
	 	super()
	 	this.state = {
	 		comment: '',
	 		smiley: -1,
	 	}
	 }

	 changeComment(comment){
	 	this.setState({comment})
	 }

	 buttonComment(){
	 	if(this.state.comment){
	 		Alert.alert('merci')
	 	}else{
	 		Alert.alert('vous n avez pas rempli le formulaire')
	 	}
	 }

	 isValid(){
	 	/* TODO*/

	 	if(this.state.comment && (this.state.smiley >=0) && (this.state.smiley < 4) ){
	 		return true;
	 	}else{
	 		return false;
	 	}
	 }




	render() {
		return (
	
				<ScrollView style={ styles.container }>
					<Text style={ styles.title } > AVIS </Text>

					<View style={ styles.smiley }>  
						<TouchableOpacity>
							<Image source={require('../assets/img/happy.png')}/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image source={require('../assets/img/smiling.png')} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Image source={require('../assets/img/confused.png')} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Image source={require('../assets/img/sad.png')} />
						</TouchableOpacity>
					</View>

					<TextInput 
						style={[styles.input, styles.textArea]} 
						placeHolder="comment"
						value={this.state.comment}
						onChangeText={(comment) => this.changeComment(comment)}
						multiline={true}
					/>

					<TouchableOpacity 
						style={styles.buttonRose}
						onPress={() => this.buttonComment()}
						>
						<Text style={styles.buttonText} > ENVOYER </Text>
					</TouchableOpacity>	
				</ScrollView>	
		);
	}
}





const styles = StyleSheet.create({


	container: {
		backgroundColor: '#fff',
		flex: 1,

	},

	title: {
		textAlign: 'center',
		fontSize: 30,
		marginBottom: 40,
		color: '#00ADE9',
		fontWeight: 'bold',
	},

	smiley: {
		flex:1,
		flexDirection: 'row',
		justifyContent: "space-around",
	},

	input: {
		height: 120,
		borderColor: '#8ABD24',
		borderWidth: 1,
		backgroundColor: '#E5E5E5',
		margin: 20
	},

	textArea:{
		height:140,
		paddingLeft: 20,
		paddingRight: 20,
	},

	buttonRose: {
		backgroundColor: '#E3007E',
		margin: 20,
		height: 60,
		justifyContent: 'space-around',
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		color: '#fff',
	},

	
});
