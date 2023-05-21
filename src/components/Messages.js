import React from 'react';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MessageDetails from './MessageDetails';

function Messages({match}) {
  return (
    <div>
      <ul>
        {/* {
          [...Array(5).keys()].map(item => {
            return <li key={item}>
              <Link to={`${match.url}/${item+1}`} >
                Message {item + 1}
              </Link>
            </li>
          })
        }   */
          [1, 2, 3, 4, 5].map(item => {
            return <li>
              <Link to={`${match.url}/${item}`}>
                Message {item}
              </Link>
            </li>
          })
        }

        
      </ul>
      <Switch>
        <Route exact path={match.url} render={ () => <h3>Please select a message </h3>} />
        <Route path={`${match.url}/:id`} component={MessageDetails} />
      </Switch>
    </div>
  )
}

export default Messages;