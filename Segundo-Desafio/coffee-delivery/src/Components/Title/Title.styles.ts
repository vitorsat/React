import styled from 'styled-components'

const Title = styled.p`
color: ${(props) => props.theme['base-title']};
font-family: 'Baloo 2', cursive;
line-height: 130%;
`

export const TitleXl = styled(Title)`
font-size: 48px;
font-weight: 800;
`

export const TitleL = styled(Title)`
font-size: 32px;
font-weight: 800;
`

export const TitleM = styled(Title)`
font-size: 24px;
font-weight: 800;
`

export const TitleS = styled(Title)`
font-size: 20px;
font-weight: 700;
`

export const TitleXs = styled(Title)`
font-size: 18px;
font-weight: 700;
`
