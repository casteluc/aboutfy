import styled from 'styled-components'

import ContainerPattern from '../../styles/patterns/Container'
import ContentPattern from '../../styles/patterns/Content'

export const Container = styled(ContainerPattern)

export const Content = styled(ContentPattern)`
    padding: 0 20px;
    max-width: 680px;
`