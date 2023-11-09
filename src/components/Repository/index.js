import './index.css'

const Repository = props => {
  const {repoData} = props
  const {
    avatarUrl,
    fullName,
    description,
    issues,
    stars,
    timeInterval,
    ownerName,
  } = repoData

  return (
    <div className="repository">
      <img src={avatarUrl} alt="avatar" className="avatar" />
      <div className="details-container">
        <h1 className="repo-name">{fullName}</h1>
        <p className="repo-desc">{description}</p>
        <div className="stars-issues-container">
          <p className="stars-text">{stars}</p>
          <p className="issues-text">{issues}</p>
        </div>
        <div>
          <p className="last-pushed-text">
            Last Pushed {timeInterval} by {ownerName}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Repository
