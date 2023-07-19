import "./Destination.css";
import {Component} from "react";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="sec-des">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
                </div>
                <div className="image">
                <img src={this.props.img1} alt="" />
                <img src={this.props.img2} alt="" />

            </div>
            
        </div>
        );
    }
}
export default DestinationData;