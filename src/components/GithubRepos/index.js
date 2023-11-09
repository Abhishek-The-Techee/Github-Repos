import {Component} from 'react'

import Repository from '../Repository'

import './index.css'

class GithubRepos extends Component {
  state = {
    reposList: [],
  }

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc',
    )
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = data.items.map(each => ({
        id: each.id,
        avatarUrl: each.owner.avatar_url,
        fullName: each.full_name,
        description: each.description,
        issues: each.open_issues,
        stars: each.stargazers_count,
        timeInterval: each.pushed_at,
        ownerName: each.name,
        owner: each.login,
      }))
      console.log(updatedData)
      this.setState({reposList: updatedData})
    }
  }

  renderSuccessView = () => {
    const {reposList} = this.state

    return (
      <ul className="repos-container">
        {reposList.map(each => (
          <Repository key={each.id} repoData={each} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="repos-heading">Most Starred Repos</h1>
        {this.renderSuccessView()}
      </div>
    )
  }
}
export default GithubRepos
