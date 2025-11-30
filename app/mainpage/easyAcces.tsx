import { Text, View, StyleSheet, Pressable, } from "react-native";
import { mainPageBorderRadius } from "@/constants/defultValus";


export default function EasyAcces(){
    return(
    <View style={style.container}>
      <View style={style.alignmentStyle}>
        <Text style={style.mainPageTextStyle}>
            Add previously coffee                
        </Text>
        <Pressable
        style={({pressed}) => [
          buttenStyles.btn,
          pressed && buttenStyles.btnPressed,
        ]}
        >
          <Text>
            +
          </Text>
        </Pressable>
       
      </View>
      
    </View>
    );
}


const style = StyleSheet.create({

  container:{
    height: 80,
    alignContent:  "center",
    backgroundColor: 'green',
    borderRadius: mainPageBorderRadius,
    overflow: 'hidden',     
  },

  alignmentStyle:{
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 0.5,
    
  },
  mainPageTextStyle:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',

  },

  textSyle:{
    fontSize: 16,
    fontWeight: 'bold',
  }
})


const buttenStyles = StyleSheet.create({
 btn: {
    backgroundColor: "#e0dfe8",
    padding: 10,
    borderRadius: 22,
    borderWidth: 2.5,

  },

  btnPressed: {
    opacity: 0.8

  }

})
