import React, { PropTypes } from 'react'
import classes from './SelfMetricsSelector.scss'
import { metricsSelectorManager } from 'components/adminPage/MonitoringServiceSelector'

export default class SelfMetricsSelector extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    props: PropTypes.object
  }

  static get monitoringServiceName () {
    return 'Self'
  }

  render () {
    const linkToDoc = 'https://github.com/ks888/LambStatus/wiki/LambStatus-API-v0'
    return (
      <div>
        <div>
          This option asks you to submit data points via LambStatus API.
        </div>
        <div>
          Check out
          <a href={linkToDoc} className={classes.link} target='_blank'>
            the API Documentation and code snippets
          </a>
          for more details.
        </div>
      </div>
    )
  }
}

metricsSelectorManager.register(SelfMetricsSelector.monitoringServiceName, SelfMetricsSelector)
