import React from "react"
import { Collapser, Trigger, Panel } from "react-collapser"
import YAML from "../data/master-list.yml"
import "../../node_modules/react-collapser/dist/default-styles.css"

class YAML_List extends React.Component {
  render() {
    if (Object.entries(YAML).length > 0) {
      return (
        <div className="container">
          {Object.entries(YAML).map(function (cat) {
            return (
              <Collapser key={cat[0]}>
                <Trigger>{cat[0].replace(/_/g, " ")}</Trigger>
                <Panel>
                  {Object.entries(cat[1]).map(function (subcat) {
                    return (
                      <Collapser key={subcat[0]}>
                        <Trigger>{subcat[0].replace(/_/g, " ")}</Trigger>
                        <Panel>
                          <ul>
                            {subcat[1].map(link => (
                              <li key={link}>
                                <a className="collapse-panel" href={link}>
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </Panel>
                      </Collapser>
                    )
                  })}
                </Panel>
              </Collapser>
            )
          })}
        </div>
      )
    }
    return <span>Loading...</span>
  }
}
export default YAML_List
