import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'components/Button'
import GridSvg from 'components/Icons/Grid'
import List from 'components/Icons/List'
import { FEED_LAYOUTS } from 'consts'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px;
`

const IconButton = styled(Button)`
  position: relative;
  height: 24px;
  width: 24px;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: ${(props) => (props.active ? '#666' : '#ccc')};
  outline: none;

  svg {
    width: 100%;
  }

  &:first-child {
    margin-right: 5px;

    &:after {
      content: '';
      height: 100%;
      width: 1px;
      background: #eee;
      display: block;
      position: absolute;
      right: -4px;
    }
  }
`

const GridIcon = styled(GridSvg)`
  padding: 1px;
`

const FeedLayoutManager = ({ active, onChange }) => {
  return (
    <Wrapper>
      <IconButton onClick={() => onChange(FEED_LAYOUTS.LIST)} active={active === FEED_LAYOUTS.LIST}>
        <List title="List view" />
      </IconButton>
      <IconButton
        onClick={() => onChange(FEED_LAYOUTS.CARDS)}
        active={active === FEED_LAYOUTS.CARDS}
      >
        <GridIcon title="Cards view" />
      </IconButton>
    </Wrapper>
  )
}

FeedLayoutManager.propTypes = {
  onChange: PropTypes.func,
  active: PropTypes.oneOf(Object.values(FEED_LAYOUTS))
}

export default FeedLayoutManager
