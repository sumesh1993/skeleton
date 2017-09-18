
import React, { Component } from 'react';
import { observer } from 'Services/Model';
import { View, Text, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'native-base';

import Styles from './styles';
import AutocompleteLayout from './Vendor';
import dismissKeyboard from 'dismissKeyboard';
import HomeState from 'Models/Home';







class Autocomplete extends Component {


    componentWillReceiveProps(props){
        this.state.suggestions  = props.suggestions;
        this.forceUpdate();
    }


    constructor(props){
      super(props);
      this.state = {};
      HomeState.query = '';
      HomeState.search_clear_button = false;
      this.state.suggestions  = props.suggestions;
    }



    clearQuery(query){
        HomeState.query = '';
        this.state.suggestions  = [];
        HomeState.search_clear_button  = false;
        this.forceUpdate();
        this.props.onClear();
    }

    onChangeTextEvent(query){
        HomeState.query = query;
        HomeState.search_clear_button  = query ? true : false;
        this.forceUpdate();
        this.props.onTextChange(query);

    }


    onItemSelectEvent(data){
        dismissKeyboard();
        if(data.value == 0){
          return this.clearQuery(data.value);

        }
        HomeState.query = data.value;
        this.state.suggestions  = [];
        this.forceUpdate();
        this.props.onItemSelect(data);
    }


    renderListItems(data) {

        return (
            <TouchableOpacity
              onPress={()=>{this.onItemSelectEvent(data)}}

                key={data.value} style={Styles.listItem}>
                <Text style={Styles.textTextStyle}>{data.text}</Text>
                <Text style={Styles.infoTextStyle}>{data.info}</Text>

            </TouchableOpacity>
        );

    }



    renderCancelButton() {

       if (HomeState.search_clear_button) {
           return (
               <View hidden = {true} style={Styles.clearButtonContainer}>
                 <TouchableOpacity onPress={this.clearQuery.bind(this)} style={{padding:12}} >
                      <Icon name="cancel" style={Styles.clearButtonIcon}/>
                 </TouchableOpacity>
               </View>
           );
       } else {
           return null;
       }
   }




    render() {



        return (

          <View style={Styles.mainViewContainer}>

                  <AutocompleteLayout

                        data={this.state.suggestions}
                        defaultValue={HomeState.query}
                        onChangeText={this.onChangeTextEvent.bind(this)}
                        placeholder="Enter VIN or DSC"
                        containerStyle={Styles.autoCompleteContainer}
                        inputContainerStyle={Styles.autoCompleteInputContainer}
                        renderItem={this.renderListItems.bind(this)}>

                  </AutocompleteLayout>

                  {this.renderCancelButton()}

            </View>

        );

    }


}




export default Autocomplete;
