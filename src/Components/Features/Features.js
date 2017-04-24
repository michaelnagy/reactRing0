import React from 'react'
import { Card, Icon, List, Header, Container } from 'semantic-ui-react'
import FeatureItems from './FeatureItems'
import './Features.css'

const Features = () => (
  <Container>

    <Container>

      <FeatureItems/>

      <Container fluid={true} textAlign={'center'} style={{marginTop:'5em', marginBottom:'5em'}}>
        <Header as='h1'>Features
          <Header.Subheader>
              Manage your settings and preferences.
          </Header.Subheader>
        </Header>
      </Container>

      <Card.Group itemsPerRow={2} style={{margin: '1.5em'}} stackable>
        <Card>
          <Card.Content>
            <Card.Header>
              <Icon name='privacy' size='large' style={{marginRight:'0.5em'}}/>
              Security Options
            </Card.Header>
            <Card.Meta>
              All options in one shield!
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <List divided relaxed animated>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Multiple Heuristic Methods</List.Header>
                    <List.Description as='a'>Heuristic analysis is a method employed by many computer antivirus programs designed to detect previously unknown computer viruses, as well as new variants of viruses already in the "wild".</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Sandboxing Method</List.Header>
                    <List.Description as='a'>Sandboxes consist of some sort of purpose-built environment, usually virtualized (in some cases physical), where the potentially malicious files are executed and their behavior is recorded.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Signature Method</List.Header>
                    <List.Description as='a'>The first step of scanning a file is to compare the entire file or the probable infected portion of it with a table of known cheats signatures.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Threat Method</List.Header>
                    <List.Description as='a'>The effects of the process will be monitored in RAM.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Packet Encryption</List.Header>
                    <List.Description as='a'>The packets are encrypted so that malicious applications crash.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Cyclic Redundancy</List.Header>
                    <List.Description as='a'>Protect the integrity of your files. Prevent your client is modified.</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>
              <Icon name='dashboard' size='large' style={{marginRight:'0.5em'}}/>
              Administrative Options.
            </Card.Header>
            <Card.Meta>
              Options and facilities.
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <List divided relaxed animated>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Hack Logs</List.Header>
                    <List.Description as='a'>Check hack event list.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Feed and Updates</List.Header>
                    <List.Description as='a'>Discover the news through the news widget.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>HWID Options</List.Header>
                    <List.Description as='a'>Apply BAN directly from your emulator!</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Panel Admin and Tools</List.Header>
                    <List.Description as='a'>Make all your settings using the admin panel and tools!</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Full Compatibility</List.Header>
                    <List.Description as='a'>rAthena, Hercules, bRathena, Cronus, eAMod, rAmod. Windows XP, Windows 7, Windows 8, Windows 9 ...</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='options' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Fast Support</List.Header>
                    <List.Description as='a'>Need Help? Go to Ring-0 Community!</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  </Container>
)

export default Features
