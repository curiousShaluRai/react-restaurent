import React, { Component } from 'react'
import blastFromThepast from "./DummyData"
import './styles.css'

export default class BlastFromPast extends Component {
  onSubmit() {
    alert("click balstfrom the past food")
  }
  render() {
    console.log("blastFromThepast", blastFromThepast);
    return(
      <div>
        {blastFromThepast.map(past => (
          <div>
          <span className="icon-foodSymbol tKOaB _27EeV"></span>
          <div className="GaqmA">
             <div>
                <div className="_1G3G4 _3L1X9">
                   <button className="_1RPOp _1uN_a" onClick={this.onSubmit}>ADD</button>
                </div>
                <div className="_19GqV">
                   <div className="_2Gojq">
                      <div className="jTy8b" itemprop="name">{past.dishName}</div>
                      <div className="_2FMT0 _22D_E">MUST TRY<span className="rZ-gh"></span></div>
                   </div>
                   <div className="_2aOqz _1xb2E">{past.ingredientType}</div>
                   <div className="_12lpv MwITc"><span className="bQEAj">{past.price}</span></div>
                </div>
             </div>
          </div>
        </div>
      ))}
      </div>
    )
  }
}
