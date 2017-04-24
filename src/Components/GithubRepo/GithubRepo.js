import React from 'react';
import GitHub from 'github-api';
import { Segment, Statistic, Icon } from 'semantic-ui-react'
import { github } from '../../config';



class GithubRepo extends React.Component {

  constructor() {
    super()
    this.state =
    {
      name: '',
      forks: 0,
      stargazers_count: 0,
      commits: 0,
      open_issues: 0
    }
    this.gh = new GitHub({
     username: github.username,
     password: github.pass
    });
  }
  // Initialize Github API


  getRepo = async () => {
    try {
      let repo = await this.gh.getRepo('AsiaGenius','ring-0')
      let repoDetails = await repo.getDetails()
      let commitList = await repo.getContributorStats()
      repoDetails.data.commits = commitList.data[0].total
      console.log(repoDetails.data, commitList.data)
      return repoDetails.data;
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.getRepo().then(function (repoDetails) {
      // console.log(repoDetails.data);
      this.setState({
        name: repoDetails.name,
        forks: repoDetails.forks,
        stargazers_count: repoDetails.stargazers_count,
        commits: repoDetails.commits,
        open_issues: repoDetails.open_issues
      })
      // console.log(this.state);
    }.bind(this))
    .catch(function (e) {
      console.log(e);
    });


  }

  render() {
    return (
      <Segment inverted style={{borderRadius:0}}>
        <Statistic.Group widths={5} >
          <Statistic inverted as='a' href='https://github.com/AsiaGenius/ring-0' target='_blank'>
            <Statistic.Value>
              <Icon name='github' />
            </Statistic.Value>
            <Statistic.Label>{this.state.name}</Statistic.Label>
          </Statistic>
          <Statistic inverted color='pink' value={this.state.forks} label='forks' as='a' href='https://github.com/AsiaGenius/ring-0/network' target='_blank'/>
          <Statistic inverted color='violet' value={this.state.stargazers_count} label='stars' as='a' href='https://github.com/AsiaGenius/ring-0/stargazers' target='_blank'/>
          <Statistic inverted color='red' value={this.state.open_issues} label='issues' as='a' href='https://github.com/AsiaGenius/ring-0/issues' target='_blank'/>
          <Statistic inverted color='orange' value={this.state.commits} label='commits' as='a' href='https://github.com/AsiaGenius/ring-0/commits/master' target='_blank'/>

        </Statistic.Group>
      </Segment>
    );
  }
}

export default GithubRepo
