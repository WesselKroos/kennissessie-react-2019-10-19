import { Component } from 'react'
import DComponent from '../decorators/DComponent'

@DComponent({
  templateUrl: 'FrameworksTemplate.tsx',
  styleUrls: ['Frameworks.module.scss']
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