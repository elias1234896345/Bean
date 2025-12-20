import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { mainPageBorderRadius } from '../../constants/defultValus';

const screenWidth = Dimensions.get('window').width;

// later tke vlaues from json
const coffies = [1,2,3,4,5,6,7]
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const coffiesDays = coffies.map((v,i) => ({
    value: v,
    label: days[i % days.length],
    dataPointColor: '#6f4e37',  
    color: '#6f4e37',  
  })
)

export default function GraphMP(){
    return(
          <View style={graphStyle.container}>
            <Text style= {graphStyle.headerGraphText}> Coffies this week </Text>
              <View style= {graphStyle.graphDisaplyArea}>
                  <LineChart 
                  data={coffiesDays}
                  width={screenWidth - 20}
                  height={200}
                  spacing={(screenWidth - 60) / 7} 
                  initialSpacing={10}
                  color="#6f4e37"  
                  dataPointsColor="#6f4e37"  
                  thickness={3}
                  curved
                  areaChart
                  startFillColor="#c19a6b" 
                  endFillColor="#ecdfd0" 
                  startOpacity={0.4}
                  endOpacity={0.1}
                  hideRules
                  yAxisTextStyle={{color: '#8b7355'}}
                  xAxisLabelTextStyle={{color: '#8b7355', fontSize: 10}}
                  />
              </View>
            </View>
    );
}

const graphStyle = StyleSheet.create({
  container:{
    height: 286,
    backgroundColor: '#ecdfd0',
    borderRadius: mainPageBorderRadius,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#c19a6b',
    shadowColor: '#6f4e37',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  graphDisaplyArea: {
    width: '100%',
    justifyContent: 'center',
  },

  headerGraphText:{
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6f4e37',
  },
})