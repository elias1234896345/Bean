import { ScrollView, StyleSheet, Text, View, } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { mainPageBorderRadius, screenWidth } from '../../constants/defultValus';

  // later tke vlaues from json
const coffies = [2,3,4,5,6,7]
const week = ['41','42','43','44','45','46']
const coffiesweek = coffies.map((v,i) => ({
    value: v,
    label: week[i % week.length],
  })
)

const coffeeTypesData = [
  {
    stacks: [
      { value: 2, color: 'orange' },      // 2 espressos
      { value: 1, color: 'brown' },       // 1 normal coffee
    ],
    label: 'Mon',
  },
  {
    stacks: [
      { value: 2, color: 'orange' },      // 2 espressos
      { value: 3, color: 'brown' },       // 3 coffees
    ],
    label: 'Tue',
  },
  {
    stacks: [
      { value: 1, color: 'orange' },      // 1 espresso
      { value: 2, color: 'brown' },       // 2 coffees
      { value: 2, color: 'blue' },        // 2 macchiatos
    ],
    label: 'Wed',
  },
];

export default function StatsPage(){
    return(
 // view for the lemets in the view TODO ADD STYLE 
    <ScrollView style={graphStyle.scrollViewSyle} >

        {/*coffies per week */}
          <View style={graphStyle.container}>
                    <Text style ={graphStyle.headerGraphText}>
              Coffies per week
            </Text>    
              <View style= {graphStyle.graphDisplayArea}>
                  <BarChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={38}
                  initialSpacing={24}
                  xAxisLength={screenWidth} 
                  
                  />
              </View>
          </View>

        {/* coffies per week */}
          <View style={graphStyle.container}>
              <Text style ={graphStyle.headerGraphText}>
              Coffee types this week
          </Text>
  
  {/* Legend */}
  <View style={graphStyle.legendContainer}>
    <View style={graphStyle.legendItem}>
      <View style={[graphStyle.legendColor, { backgroundColor: 'orange' }]} />
      <Text style={graphStyle.legendText}>Espresso</Text>
    </View>
    <View style={graphStyle.legendItem}>
      <View style={[graphStyle.legendColor, { backgroundColor: 'brown' }]} />
      <Text style={graphStyle.legendText}>Coffee</Text>
    </View>
    <View style={graphStyle.legendItem}>
      <View style={[graphStyle.legendColor, { backgroundColor: 'blue' }]} />
      <Text style={graphStyle.legendText}>Macchiato</Text>
    </View>
  </View>

  <View style={graphStyle.graphDisplayAreaTypes}>
    <BarChart 
      stackData={coffeeTypesData}
      width={screenWidth}
      height={200}
      spacing={38}
      initialSpacing={24}
      xAxisLength={screenWidth} 
    />
  </View>
          </View>

        {/* coffein intake */}
       
          <View style={graphStyle.container}>
              <Text style ={graphStyle.headerGraphText}>
              Coffein Intake
          </Text>
              <View style= {graphStyle.graphDisplayArea}>
                  <LineChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  />
              </View>
            </View>
     </ScrollView>
    );
}

const graphStyle = StyleSheet.create({
  scrollViewSyle:{
    flexGrow: 1,
    margin: 8,
    gap: 12,
  },

  headerGraphText:{
    paddingTop:4,
    fontSize: 16,
    fontWeight: 'bold',
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 8,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 4,
  },

  legendText: {
    fontSize: 12,
    fontWeight: '500',
  },

  container:{
    height: 294, 
    backgroundColor: 'rgba(105, 131, 246, 0.6)',
    borderRadius: mainPageBorderRadius,
    alignItems: 'center',
    overflow: 'hidden',
    margin: 10,   
  },
  graphDisplayArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
    paddingBottom:20,
  },

    graphDisplayAreaTypes: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
    paddingBottom:60,
  }
})



const buttenStyles = StyleSheet.create({
 btn: {
    backgroundColor: "#e0dfe8",
    borderRadius: 22,
    borderWidth: 2.5,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
