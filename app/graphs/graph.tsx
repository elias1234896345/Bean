import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { mainPageBorderRadius, screenWidth } from '../../constants/defultValus';


  // later tke vlaues from json
const coffies = [1,2,3,4,5,6,7]
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
 const coffiesDays = coffies.map((v,i) => ({
    value: v,
    label: days[i % days.length],
    dataPointColor: '#6f4e37', // Coffee brown dots
    color: '#6f4e37', // Coffee brown line
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
                  color="#6f4e37" // Coffee brown line
                  dataPointsColor="#6f4e37" // Coffee brown dots
                  thickness={3}
                  curved
                  areaChart
                  startFillColor="#c19a6b" // Caramel gradient start
                  endFillColor="#ecdfd0" // Light cream gradient end
                  startOpacity={0.4}
                  endOpacity={0.1}
                  />
              </View>
            </View>
    );
}

const graphStyle = StyleSheet.create({
  container:{
    height: 286,
    backgroundColor: '#ecdfd0', // Card background
    borderRadius: mainPageBorderRadius,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#c19a6b', // Caramel border
    shadowColor: '#6f4e37', // Coffee shadow
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
    color: '#6f4e37', // Coffee brown
  },
})