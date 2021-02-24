const userName = "darky";

let element = <h1 className="heading"> Hello, {userName}! </h1>;
//Same as below...
element = React.createElement(
    'h1',
    {className: "heading"},
    'Hello, world!'
);

const avatarURL = "https://img.icons8.com/pastel-glyph/64/000000/user-lock.png";
const avatar = <img src={avatarURL} />;

const container = document.getElementById("root");
ReactDOM.render([avatar, element], container);

function Welcome(props){
    const hello = <h1>Hello {props.name}</h1>;
    const age = <h2>You are {props.age}</h2>;
    return [hello, age];
}
const elementFromComponent = <Welcome name="dusk" age="25"/>;

ReactDOM.render(elementFromComponent, document.querySelector('.component'));



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h2>The punctual guy</h2>
                <h3>This is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}



ReactDOM.render((
    <div>
    <Clock />
    {/* <Clock date={new Date}></Clock> */}
    </div>
),
    document.querySelector(".test")
);


class Counter extends React.Component{
    constructor(props){
        super(props)
        this.increase = this.increase.bind(this)
        this.state = {count: 0}
    }
    increase(){
        this.setState({count: this.state.count-1})
    }

    render(){
       
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* !!!! This works without binding (this) But */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increase
                </button>
                <button onClick={this.increase}>{/*This doesn't! (in case of calling a method without the ()s, have to bind this explicitly)*/}
                    Decrease
                </button> 
            </div>
        );
    }

}
ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
)


function ChangeColorBtn() {
    return (
        <button>Change color</button>
    )
}

class ColoredBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {backgroundColor: 'black'};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let newColor = this.state.backgroundColor === 'black'? 'red' : 'black'
        this.setState(
            {backgroundColor: newColor}
            )
    }
    render() {
        return (
        <div style={{height: '200px', width: '200px', backgroundColor: this.state.backgroundColor}}>
        <button onClick={this.handleClick}>Change</button>
        </div>
        )
    }
}

ReactDOM.render(
    <ColoredBlock/>,
    document.getElementById('dataBinding')
)

