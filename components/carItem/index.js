import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from './style'
import StyledButton from '../styledButton'

function CarItem(props) {

  const {name, tagline, taglineCTA, image} = props.car

  return(
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text></Text>
      </View>

      <View style={{position: 'absolute', bottom: 80, width: '100%'}}>
        <StyledButton 
          text="custom order" 
          type="primary" 
          onPress={() => {
            console.warn("Custom Order was pressed");
          }} 
          />
        <StyledButton 
          text="existing inventory" 
          type="secondary" 
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }} 
          />
      </View>

      
      
    </View>
  )
}

export default CarItem;
