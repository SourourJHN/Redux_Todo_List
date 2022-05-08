import { Container, Tab, TabList, Tabs } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { VISIBILITY_FILTER} from '../constant'
import { SetFilter } from '../redux/action'

export const VisibilityFilter = () => {
  const dispatch=useDispatch();
  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map(filterkey=>{
              const currentFilter=VISIBILITY_FILTER[filterkey];
            return(
                <Tab
                 key={`visibility-filter-${currentFilter}`}
                 onClick={()=>dispatch(SetFilter(currentFilter))}
                >
                  {currentFilter}
                </Tab>
            )
          })
          
          }
        </TabList>
      </Tabs>
    </Container>
  )
}
