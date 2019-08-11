// PRESS =(equal) 2 times i don't know hot to fix it TT
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import {LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      num1:"",
      num2:"",
      operator:"",
      input:"",
      show:"0"
    }
  }
  btnClear(){
    this.setState({num1:"", num2:"", operator:"", input:"",show:"0"})
  }
  btnPress(o){
    this.setState({num2:this.state.input})
    var tot = 0;
    var a = this.state.num1;
    var b = this.state.num2;
    if(o == "+"){
      tot = Number(a) + Number(b);
      this.setState({show:tot});
    }if(o == "-"){
      tot = Number(a) - Number(b);
      this.setState({show:tot});
    }if(o == "*"){
      tot = Number(a) * Number(b);
      this.setState({show:tot});
    }if(o == "/"){
      tot = Number(a) / Number(b);
      this.setState({show:tot});
    }if(o == "."){
      var dot = this.state.input + ".";
      this.setState({input:dot});
      this.setState({show:dot});
    }
  }
  press(str){
    var number = this.state.input + str;
    this.setState({input:number})
    this.setState({show:number});
  }
  pressOperand(input,op){
    this.setState({num1:input, operator:op});
    var o = op
    this.setState({show:o});
    this.setState({input:""})
  }

  render() {
    return (

      <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: '#000000'}}>
              <Text style={[Styles.tex]}>{this.state.show}
               </Text>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#000000'}}>
                <TouchableOpacity
                  style={Styles.btn3}
                  onPress={()=>this.btnClear()}
                  ><Text style={Styles.txt2}> AC</Text> 
                </TouchableOpacity>
              </View>
              
              <View style={{flex: 1,  backgroundColor: '#000000'}}>
                <TouchableOpacity 
                  style={Styles.btn3}>
                  <Text style={Styles.txt2}> +/- </Text>
                </TouchableOpacity>
              </View>
              
              <View style={{flex: 1,  backgroundColor: '#000000'}}>
                <TouchableOpacity 
                  style={Styles.btn3}>
                  <Text style={Styles.txt2}> % </Text> 
                </TouchableOpacity>
              </View>
              
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn2}
                  onPress={()=>this.pressOperand(this.state.input,"/")}
                  ><Text style={Styles.txt}> ÷ </Text> 
                </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("7")}
                  ><Text style={Styles.txt}> 7 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("8")}
                  ><Text style={Styles.txt}> 8 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("9")}
                  ><Text style={Styles.txt}> 9 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn2}
                  onPress={()=>this.pressOperand(this.state.input,"*")}
                  ><Text style={Styles.txt}> x </Text> 
                </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("4")}
                  ><Text style={Styles.txt}> 4 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("5")}
                  ><Text style={Styles.txt}> 5 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("6")}
                  ><Text style={Styles.txt}> 6 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn2}
                  onPress={()=>this.pressOperand(this.state.input,"-")}
                  ><Text style={Styles.txt}> - </Text> 
                </TouchableOpacity>
              </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("1")}
                  ><Text style={Styles.txt}> 1 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("2")}
                  ><Text style={Styles.txt}> 2 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn}
                  onPress={()=>this.press("3")}
                  ><Text style={Styles.txt}> 3 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn2}
                  onPress={()=>this.pressOperand(this.state.input,"+")}
                  ><Text style={Styles.txt}> + </Text> 
                </TouchableOpacity>
              </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 2,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={{width:130, height:65, backgroundColor: '#566573',padding:20,margin:10,borderRadius:50,}}
                  onPress={()=>this.press("0")}
                  ><Text style={{textAlign:'center', color:"#ffffff",fontSize:20,fontWeight:"bold"}}> 0 </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn2}
                  onPress={()=>this.btnPress(".")}
                  ><Text style={Styles.txt}> . </Text> 
                </TouchableOpacity>
              </View>
              <View style={{flex: 1,  backgroundColor: '#000000'}}> 
                <TouchableOpacity 
                  style={Styles.btn2}
                  onPress={()=>this.btnPress(this.state.operator)}
                  ><Text style={Styles.txt}> = </Text> 
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const Styles = StyleSheet.create({
  btn:{
    alignItems: 'center',
    width:65,
    height:65,
    backgroundColor: '#566573',
    padding: 15,
    margin:10,
    borderRadius: 50
  },
  btn2:{
    alignItems: 'center',
    width:65,
    height:65,
    backgroundColor: '#F39C12',
    padding: 15,
    margin:10,
    borderRadius: 50
  },
  btn3:{
  alignItems: 'center',
  width:65,
  height:65,
  backgroundColor: '#B2BABB',
  padding: 15,
  margin:10,
  borderRadius: 50
  },
   txt:{
    textAlign:'center',
    color:"#ffffff",
    fontWeight: 'bold',
    fontSize:20,
    width:60
  },
     txt2:{
    textAlign:'center',
    color:"#ffffff",
    fontWeight: 'bold',
    fontSize:20,
    width:60,
    colour:"black"
  },
    tex: {
    textAlign:'right',
    color: 'white',
    fontSize: 40,
  }
})