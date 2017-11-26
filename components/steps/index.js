import React from 'react';
import { View, Text, StackNavegation, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


export default class steps extends React.Component {
	static navigationOptions = {
	title: "information de l enfant",
	 }
	linker(comp){
    this.props.navigation.navigate(comp);
  }


	render() {
		return (
			<View style={ styles.container } >
				<Text style={styles.title } >PARCOURS HOSPITALIER</Text>
				<Image style={styles.imagen} source={require('../assets/img/plan.png')} />
				<TextInput 
					style={styles.input} 
					placeHolder="message predefini"
					value={'Bonjour! voici le message predefini localisation de l enfant'}
					multiline={true}
				/>
				<View >
					<TouchableOpacity style={styles.button} onPress={this.linker.bind(this, "qualify")}>
						<Text style={styles.buttonText} > Qualifiez l'application </Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}






const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
	},

	title: {
		fontSize: 30,
		marginBottom: 20,
		color: '#00ADE9',
		fontWeight: 'bold',
	},

	imagen: {
		resizeMode: 'stretch',
	},

	input: {
		height: 150,
		width: 250,
		margin: 20,
		fontSize: 20,
		padding: 10,
		textAlign: 'auto',
		backgroundColor: '#8ABD24',
	},

	button: {
		backgroundColor: '#E3007E',
		margin: 20,
		height: 60,
		justifyContent: 'space-around',
		width: 250,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		color: '#fff',
	},
});