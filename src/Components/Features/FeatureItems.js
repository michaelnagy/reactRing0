import React from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'

const FeatureItems = () => (
  <Grid columns={3} style={{marginTop:'5em', marginBottom:'5em'}}>
    <Grid.Row>

      <Grid.Column>
        <Header as='h2' icon>
          <Icon name='spy' circular color='teal'/>
          15+ Heuristic databases
          <Header.Subheader>
            An extensive database constantly updated.
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header as='h2' icon>
          <Icon name='refresh' circular color='teal' loading/>
          20+ daily updates
          <Header.Subheader>
            We are amazingly fast taking care of bug and hack reports.
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header as='h2' icon>
          <Icon name='angellist' circular color='teal'/>
          100% free
          <Header.Subheader>
            We are free for life. Help us become a better team.
          </Header.Subheader>
        </Header>
      </Grid.Column>

    </Grid.Row>
  </Grid>
)

export default FeatureItems
