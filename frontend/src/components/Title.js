import React,{Component} from 'react';

export default class Title extends Component {
render() {

    return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold" style={{fontFamily:"arial"}}>
                    {this.props.name}
                    <strong className="text-blue" style={{fontFamily:"arial"}}>
                        {this.props.title}
                    </strong>
                </h1>
            </div>
        </div>
    );

}


}