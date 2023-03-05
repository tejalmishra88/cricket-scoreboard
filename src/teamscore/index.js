import { Component } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, Typography } from '@mui/material';

class Teamscore extends Component {

    state = {runs: 0, wicket:0}
    
    incrementCount = () => {
        console.log('Increment count')
        // setState will trigger a re-render automatically.
        this.setState({ runs: this.state.runs + 1 })
      }
      fourCount = () => {
        console.log('Increment count')
        // setState will trigger a re-render automatically.
        this.setState({ runs: this.state.runs + 4 })
      }
      sixCount = () => {
        console.log('Increment count')
        // setState will trigger a re-render automatically.
        this.setState({ runs: this.state.runs + 6 })
      }
    
      incrementwicket = () => {
        console.log('Increment count')
        // setState will trigger a re-render automatically.
        this.setState({ wicket: this.state.wicket + 1 })
      }
    render () {   
    return(
        <>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardContent>
        <Typography>{this.props.teamName}</Typography>
      <Typography gutterBottom variant="h5" component="div">
        <span>{this.state.runs} Runs</span>
        <span>:{this.state.wicket} wickets</span>
        </Typography>
        
        <button onClick={this.incrementCount}>Add one</button>
        <button onClick={this.fourCount}>4runs</button>
        <button onClick={this.sixCount}>6runs</button>
        {this.state.wicket<10 ? 
        <button onClick={this.incrementwicket}>wicket score</button> : <lable>All Out</lable>
      }
      </CardContent>
    </CardActionArea>
    </Card>
        </>
    )
    }
        
    
}
export default Teamscore