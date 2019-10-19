import { Component } from 'react'
import TemplatedComponent from '../decorators/TemplatedComponent'
import Template from './Frameworks.template'
import Style from './Frameworks.module.scss'

@TemplatedComponent({
  template: Template,
  style: Style
})
export default class Frameworks extends Component<{items: string[]}> {
  static defaultProps = { items: [] }
  state = { allShown: false }

  componentWillMount() {
    this.props.items.sort();
  }

  toggle = () => {
    this.setState({
      allShown: !this.state.allShown
    })
  }
}