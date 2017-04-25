import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'

class ConnectionStats extends Component {
  constructor() {
    super()
    this.state = { treats: 0, connections: 0 }
  }

  getStats = (url, state) => {

    fetch(url).then(function(response) {
      // console.log(response);
        return response.text()
    })
    .then(function(json) {
      console.log(JSON.parse(json));
      this.setState({ [state]: JSON.parse(json).novo })
      console.log(this.state);
    }.bind(this))
    .catch(function(err) {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getStats('https://cors-anywhere.herokuapp.com/https://www.ringsec.net/dashboard/tati.php', 'connections')
    this.getStats('https://cors-anywhere.herokuapp.com/https://www.ringsec.net/dashboard/tatic.php', 'treats')
  }

  render() {
    return (
        <Grid verticalAlign='middle' columns={1} centered>
            <Grid.Column>
              <Button
                content='Treats blocked'
                icon='bug'
                label={{ as: 'a', basic: true, content: this.state.treats }}
                labelPosition='right'
              />

              <Button
                content='User connections'
                icon='plug'
                label={{ as: 'a', basic: true, pointing: 'right', content: this.state.connections }}
                labelPosition='left'
              />
        </Grid.Column>
      </Grid>
    )
  }
}
export default ConnectionStats
