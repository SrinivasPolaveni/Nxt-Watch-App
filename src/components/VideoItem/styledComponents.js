import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  list-style-type: none;
  cursor: pointer;
  margin-right: 16px;
  margin-bottom: 16px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 786px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin: 12px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
