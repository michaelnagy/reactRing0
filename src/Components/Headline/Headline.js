import React from 'react';
import { Grid, Header, Button, Icon } from 'semantic-ui-react'

const Headline = () => (
  <Grid style={{height:'60vh'}} verticalAlign='middle' columns={1} centered>
      <Grid.Column>
          <Header style={{fontSize:'6rem'}} as='h1' textAlign='center' className='animatedcss fadeInDown'>Ring-0</Header>
          <Header as='h3' textAlign='center' className='animatedcss fadeIn'>
            Easy and Efficient protection for Games.
          </Header>
          <Button className='animatedcss fadeInUp' size={'large'} inverted color='green' as='a' href='http://dashboard.ringsec.net/login' target='_blank'><Icon name='user'/> Login</Button>
          <Button className='animatedcss fadeInUp' size={'large'} inverted color='violet' as='a' href='http://dashboard.ringsec.net/register' target='_blank'><Icon name='add user'/> Register</Button>

      </Grid.Column>
  </Grid>
)

export default Headline
