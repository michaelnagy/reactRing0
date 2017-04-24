import React from 'react';
import { Grid, Header, Button, Icon } from 'semantic-ui-react'

const Headline = () => (
  <Grid style={{height:'50vh'}} verticalAlign='middle' columns={1} centered>
      <Grid.Column>
        <Header style={{fontSize:'6rem'}} as='h1' textAlign='center'>Ring-0</Header>
        <Header as='h3' textAlign='center'>
          Easy and Efficient protection for Games.
        </Header>
        <Button inverted color='green'><Icon name='user'/> Login</Button>
        <Button inverted color='violet'><Icon name='add user'/> Register</Button>
      </Grid.Column>
  </Grid>
)

export default Headline
