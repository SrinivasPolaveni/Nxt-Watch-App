import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {channel, title, id, thumbnailUrl, publishedAt, viewCount} = details
  const {name, profileImageUrl} = channel
  const published = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardContainer bgColor={bgColor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideoDetailsText color={textColor}>{title}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>{name}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>
                    {viewCount} views
                  </VideoDetailsText>
                  <VideoDetailsText>{published} ago</VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
