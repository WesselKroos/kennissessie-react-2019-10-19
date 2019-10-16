import { Component } from 'react'
import DComponent from '../decorators/DComponent'

@DComponent({
    templateUrl: 'ExampleComponentHtml.tsx',
    styleUrls: ['ExampleComponent.module.scss']
})
export default class ExampleComponent extends Component {
    static defaultProps = {
        frameworks: ["default item 1"]
    }
    state = {
        allItemsShown: false
    }

    static getDerivedStateFromProps(props: any) {
        return {
            frameworks: props.frameworks.sort()
        }
    }

    showAllItems = () => this.setState({
        allItemsShown: !this.state.allItemsShown
    })
}