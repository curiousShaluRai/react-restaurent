import React, { Component } from "react"
import './styles.css'

export default class RecommendedFood extends Component {

  onSubmit() {
    alert("Food Added")
  }

  render() {
    const { restaurent } = this.props
    console.log("restaurent", restaurent);
    return(
      <div className="_1J_la">
        <div id="h-1950595611" className="_2dS-v">
          {
            restaurent.map(restrent => (
            <div className="_1bGRc">
            <div className="_2J3sY">
                <div className="_2IEoD" itemScope="" itemType="http://schema.org/MenuItem">
                    <div className="Qfuib">
                      <img
                        className="_12_oN _3VTAJ m0mpx"
                        height="160"
                        width="244"
                        alt=""
                        src={restrent.imgSrc}
                      />
                        <div className="_2NaIR">
                            <div className="_2aOqz _1d7fc">{restrent.name}</div>
                        </div>
                    </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                    <div className="_2tcDp">
                        <div>
                            <div className="ft_i6">
                                <div className="_2SyqU" itemProp="name">{restrent.name}</div>
                                <div className="HwSGt">{restrent.address}</div>
                            </div>
                        </div>
                    </div>
                    <div className="JWyJG">
                        <div className="_12lpv _3WiZC"><span className="bQEAj">{restrent.price}</span></div>
                        <div className="_33Hf_ _3L1X9">
                            <button className="_1RPOp" onClick={this.onSubmit}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_2J3sY">
                <div className="_2IEoD" itemScope="" itemType="http://schema.org/MenuItem">
                    <div className="Qfuib">
                      <img
                        className="_12_oN _3VTAJ m0mpx"
                        height="160"
                        width="244"
                        alt=""
                        src={restrent.imgSrc}
                      />
                        <div className="_2NaIR">
                            <div className="_2aOqz _1d7fc">{restrent.name}</div>
                        </div>
                    </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                    <div className="_2tcDp">
                        <div>
                            <div className="ft_i6">
                                <div className="_2SyqU" itemProp="name">{restrent.name}</div>
                                <div className="HwSGt">{restrent.address}</div>
                            </div>
                        </div>
                    </div>
                    <div className="JWyJG">
                        <div className="_12lpv _3WiZC"><span className="bQEAj">{restrent.price}</span></div>
                        <div className="_33Hf_ _3L1X9">
                            <button className="_1RPOp" onClick={this.onSubmit}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ))
          }
    </div>
  </div>


    )
  }
}
