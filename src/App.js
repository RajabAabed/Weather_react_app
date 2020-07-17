import React , {Component}from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const apikey ="24d154ab32cfcd48010653d361bd622b";

// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`);
    const data= await api.json();
    if(city && country){
      var x = data.main.temp+0;
      x = x - 274.15;
      x = x.toFixed(2);
      
      this.setState({
        tempreature: x,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    }else{
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter Data'
      })
    }
  }


  render (){
    return(
    <div className="wrapper">
      <div className="from-container">
        <Form getWeather={this.getWeather} />
        <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
        />
        </div>
    </div>
    )
  }
}

export default App;
