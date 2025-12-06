import {  Text, View, StyleSheet } from "react-native";
import {LineChart} from "react-native-gifted-charts"
import {screenWidth, mainPageBorderRadius, COFFEE_COLORS} from '../../constants/defultValus';


  // later tke vlaues from json
const coffies = [1,2,3,4,5,6,7]
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
 const coffiesDays = coffies.map((v,i) => ({
    value: v,
    label: days[i % days.length],
  })
)


export default function GraphMP(){
    return(
          <View style={graphStyle.container}>
            <Text style= {graphStyle.headerGraphText}> Coffies this week </Text>
              <View style= {graphStyle.graphDisaplyArea}>
                  <LineChart 
                  data={coffiesDays}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  />
              </View>
            </View>
    );
}

const graphStyle = StyleSheet.create({
container:{
    height: 286,
    backgroundColor: COFFEE_COLORS.nr2,
    borderRadius: mainPageBorderRadius,
    alignItems: 'center',
    overflow: 'hidden',   
  },
  graphDisaplyArea: {
    width: '100%',
    justifyContent: 'center',
  },

  headerGraphText:{
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
})