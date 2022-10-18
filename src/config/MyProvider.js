import MyContext from './MyContext';

class MyProvider extends Component {
    state = {
        steps: 1
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    steps: this.state.steps,
                    incrementPrice: () => {
                        steps = this.state.steps + 1
                    },
                    decrementPrice: () => {
                        steps = this.state.steps - 1
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}