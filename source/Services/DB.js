
import { AsyncStorage } from 'react-native';


export default class DB {



	static async get(key){

		try {
			  let value = await AsyncStorage.getItem(key);

			  if (value == null)
			  		return false;

			   try {
			        value = JSON.parse(value);
			    } catch (e) {}

			    return value;


		} catch (e) {return false}
	}


	static async set(key, value){

		if(typeof value === 'object')
			value = JSON.stringify(value);

		try {
		  await AsyncStorage.setItem(key, value);
		  return true
		} catch (e) {return false}

	}

	static async merge(key, value){

		if(typeof value === 'object')
			value = JSON.stringify(value);

		try {
		  await AsyncStorage.mergeItem(key, value);
		  return true
		} catch (e) {return false}

	}


	static async remove(key){

		try {
		  await AsyncStorage.removeItem(key);
		  return true
		} catch (e) {return false}

	}

	static async clear(){

		try {
		  await AsyncStorage.clear();
		  return true
		} catch (e) {return false}

	}





}
