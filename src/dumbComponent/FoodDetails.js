import React, { Component } from "react"
import FoodTypes from "./FoodTypes"
import RecommendedFood from './RecommendedFood'
import './styles.css'

export default class FoodDetails extends Component {
  render() {
    const { restaurent } = this.props
    return(
      <div className="food-container">
        <FoodTypes />
      <div className="_1J_la">
          <div id="h-1950595611" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Recommended</h2>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                    <RecommendedFood restaurent={restaurent}/>
                  </div>
                  <div className="_2J3sY">
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Chicken marinated and tossed in a spicy home made 'masala' mix, served with a fiery rice infused with gun powder and ghee. Chef's Special!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Gunpowder Rice with Spicy Chicken Fry</div>
                                      <div className="HwSGt">Blast From The Past</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">259</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A beauty from the cobble stoned aisles of Italy! Spaghetti tossed in a luscious herbed creamy cheese sauce cooked with mushroom and topped generously with parmesan shavings. Simple, delicious and definitely worth a try.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Sicilian Spaghetti Al Funghi</div>
                                      <div className="HwSGt">Blast From The Past</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">279</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Dig into this street style fried rice tossed with tender chunks of chicken and a medley of veggies along with aromatic Chinese spices. Deliciousness in every bite.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Hawker's Spicy Chicken Fried Rice</div>
                                      <div className="HwSGt">Blast From The Past</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">225</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Grilled chicken sauteed in a chef's special sweet and spicy teriyaki sauce, served with wok tossed Hakka noodles.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>MUST TRY<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Teriyaki Chicken with Hakka Noddles</div>
                                      <div className="HwSGt">Blast From The Past</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">249</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A classic of the ages right from Naples. Spaghetti tossed with garlic, chilli flakes, olive oil, mushrooms, olives and sun dried tomatoes. Cooked to perfection and finished off with a sprinkle of aged Parmesan cheese.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Spaghetti Aglio Olio</div>
                                      <div className="HwSGt">Blast From The Past</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">259</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Classic from the city of New Orleans; crispy chicken nuggets layered on a bed of supremely comforting rice tossed with a medley of veggies and paprika, served with Chef's special secret sauce. A treat for your taste buds!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Cajun Spiced Rice with Chicken Nuggets</div>
                                      <div className="HwSGt">Blast From The Past</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">269</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Boiled chickpeas when cooked in a onion tomato gravy with a host of local, aromatic spices and served alongside jeera rice is what we call "Authentic Dhaba Food At Its Best!".</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Amritsari Pindi Chole with Jeera Rice</div>
                                      <div className="HwSGt">Weekly Specials</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">219</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A dish that marries the two classics - al dente macaroni and tender chicken chunks tossed in a creamy makhani sauce and finished off with parmesean shavings to seal the deal. Ultimate Comfort Food!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Butter Chicken Mac n Cheese</div>
                                      <div className="HwSGt">Weekly Specials</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">255</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A twist on the classic manchurian; batter fried cauliflower florets tossed in a flavorful smoky BBQ sauce. Served with an aromatic chilli garlic fried rice. Satisfaction = Infinity!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">BBQ Gobi Manchurian with Chilli Garlic Fried Rice</div>
                                      <div className="HwSGt">Weekly Specials</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">235</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A heaping bowl-o-yum of flavourful panko crusted fish cakes served along with a classic Kimchi salad, scallion rice and a fiery Schzewan sauce. Chef's Special!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Chilli Fish Cakes with Scallion Fried Rice</div>
                                      <div className="HwSGt">Weekly Specials</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">269</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A zesty, spiced semi dry Indian curry packed with paneer, onions, bell peppers and cooked in a melody of Indian spices. Served with a side of matar pulao.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Kadhai Paneer with Choice of Rice</div>
                                      <div className="HwSGt">Weekly Specials</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">259</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_3Hy2E">+</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  <div className="_1C1Fl">Customisable</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Minced chicken dumplings cooked in a classic tomato-onion gravy with a melange of aromatic spices and served alongside rice of your choice. A definate win-win!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Chicken Kofta with Choice of Rice</div>
                                      <div className="HwSGt">Build Your Bowl</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">289</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_3Hy2E">+</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  <div className="_1C1Fl">Customisable</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Tender pieces of boneless chicken cooked in a flavourful in-house Chef special gravy, served with classic cumin spiced long grain basmati rice</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Murgh Lababdar with Choice of Rice</div>
                                      <div className="HwSGt">Build Your Bowl</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">279</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_3Hy2E">+</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  <div className="_1C1Fl">Customisable</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">An irresistible combination of Portuguese flavours. Tender peri peri grilled chicken on a bed of rice of your choice, served with a portion of spicy peri peri sauce</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Peri Peri Chicken with Choice of Rice</div>
                                      <div className="HwSGt">Build Your Bowl</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">269</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_3Hy2E">+</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  <div className="_1C1Fl">Customisable</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Classic comfort bowl consisting of red kidney beans cooked in a mildly spicy onion tomato masala gravy, served with choice of rice.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Good ol' Rajma with Choice of Rice</div>
                                      <div className="HwSGt">Build Your Bowl</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">165</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_3Hy2E">+</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  <div className="_1C1Fl">Customisable</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A classic from the Awadhi cuisine; tender cubes of paneer cooked in a rich tomato and yogurt gravy along with whole Indian spices. Served with choice of rice.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9">
                                <span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Awadhi Paneer with Choice of Rice</div>
                                      <div className="HwSGt">Build Your Bowl</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">255</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_3Hy2E">+</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  <div className="_1C1Fl">Customisable</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">We married the best of Dilli &amp; Hyderabad in this explosion of flavours. Butter Paneer meets its match with flavourful biryani rice, served with a tangy yogurt raita and pickled onions</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Paneer Makhani Biryani</div>
                                      <div className="HwSGt">Hall of Fame</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">269</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">An abudance of fresh basil leaves joins succulent chunks of chicken with classic Thai flavoured fiery sauce for a decidedly spicy curry; served along with aromatic garlic rice.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Spicy Thai Basil Chicken with Garlic Rice</div>
                                      <div className="HwSGt">Hall of Fame</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">279</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Good 'ol American bowl of comfort. Creamy blend of aged cheese and macaroni, topped off with an herby thyme flavored crust. Dig in for deliciousness.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Classic Mac &amp; Cheese</div>
                                      <div className="HwSGt">Hall of Fame</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">229</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A medley of scrambled eggs and seasonal veggies wok tossed along with rice and aromatic Chinese spices. Eggztravaganza!</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Double Egg Fried Rice</div>
                                      <div className="HwSGt">Hall of Fame</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">165</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Spicy chicken marinated and cooked in a special barbecue sauce, served with seasoned potatoes and butter parsley rice.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Texas BBQ Chicken with Seasoned Potatoes and Butter Parsley Rice</div>
                                      <div className="HwSGt">Hall of Fame</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">235</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A traditional Bengali dessert that you can't miss. Soft and spongy cottage cheese dumplings slow cooked in a luscious whole milk gravy and finished off with nut shavings.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>BESTSELLER<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Angoori Rasmalai</div>
                                      <div className="HwSGt">Desserts</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">59</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A classic Italian dessert pairing mascarpone cheese with homemade French biscuits soaked in a coffee and rum concoction. Classics never go out of fashion! Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Monk's Tiramisu</div>
                                      <div className="HwSGt">Desserts</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">125</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Decadent, fudgy and rich! Dig into the brownie square and let the lush chocolate hit your taste buds with every bite. Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Belgian Fudge Brownie</div>
                                      <div className="HwSGt">Desserts</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">95</span></div>
                              <div className="_33Hf_ _3L1X9">
                                  <div className="_1RPOp">ADD</div>
                                  <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                  <div className="_29Y5Z _20vNm _4aKW6"></div>
                                  <div className="_2zAXs _2quy- _4aKW6">0</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Creamy yogurt spiked with good 'ol filter coffee and honey, topped with a medley of seasonal fruits, chia seeds, nuts and chef's special crunchy museli. Mornings just got fancier!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Kaapi Chia Granola Bowl</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">129</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Gun powder spiced bite sized steamed idlis served with freshly made coconut chutney. Breakfast woes sorted. Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Gunpowder Idli Bowl</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">75</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Scrambled free range eggs tossed with assorted peppers, onion and tomatoes in a chef's special in house Indian spice mix. Served with pillowy buttered pavs on the side. Your new breakfast bae is here! Good for 1.</div>
                              </div>
                              <div className="_2FMT0 _1bfQ9"><span className="_23BlT"></span>MUST TRY<span className="rZ-gh"></span></div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Masala Anda Bhurji with Maska Pav</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">135</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />

                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Soft scrambled paneer tossed with assorted peppers, onion and tomatoes in a chef's special in house Indian spice mix. Served with pillowy buttered pavs on the side. Time to enjoy this new love affair with paneer. Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Punjabi Paneer Bhurji with Makhan Wala Pav</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">165</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Lentil dumpling dunked in a bowl of chilled whipped yogurt, tempered with mustard seeds, curry leaves, garnished with Indian masalas, and crunchy sev. Yummy breakfast every morning. Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">South Indian Dahi Vada</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">75</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Luscious blueberry and honey yogurt topped with a hearty in-house granola mix, layered with a medley of fruits, finished off with berries and nut shavings. A little reward to kick off your morning!</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">The Well Dressed Parfait Bowl</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">125</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="_1bGRc">
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">Fluffy, mouth melting steamed mini idlis dunked in a delicious and flavor packed bowl of sambhar. The most delicious way to kick off your day. Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Button Idli with Sambhar</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">115</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2J3sY">
                      <div className="_2IEoD" itemscope="" itemtype="http://schema.org/MenuItem">
                          <div className="Qfuib"><img className="_12_oN _3VTAJ m0mpx" height="160" width="244" alt="" />
                              <div className="_2NaIR">
                                  <div className="_2aOqz _1d7fc">A classic South Indian savory porridge laced with black pepper, tempered spices and homemade ghee, served along with coconut chutney. Healthy, hearty and delicious! Good for 1.</div>
                              </div>
                          </div><span className="icon-foodSymbol tKOaB _3h2yZ _3x58u"></span>
                          <div className="_2tcDp">
                              <div>
                                  <div className="ft_i6">
                                      <div className="_2SyqU" itemprop="name">Pongal</div>
                                      <div className="HwSGt">Breakfast</div>
                                  </div>
                              </div>
                          </div>
                          <div className="JWyJG">
                              <div className="_12lpv _3WiZC"><span className="bQEAj">75</span></div>
                              <div className="_33Hf_ _3L1X9 _3a8rI">
                                  <div className="_3z9jt">Unavailable</div>
                                  <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="h922432409" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Blast From The Past</h2>
              <div className="Yu6Bn">10 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp _36fT9 _4aKW6">ADD</div>
                                      <div className="_1ds9T _2Thnf">+</div>
                                      <div className="_29Y5Z _2od4M"></div>
                                      <div className="_2zAXs _18lJJ">1</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Jamaican Jerk Chicken with Sweet and Sour Rice</div>
                                          <div className="_2FMT0 _22D_E">MUST TRY<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Smoky and fiery chicken strips served on a bed of pineapple and pepper rice and served alongside with Chef's special hot jerk sauce. Enjoy this authentic Carribean flavours in a bowl!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">259</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Pind Di Daal Makhani with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic Punjabi desi style daal which needs no introduction. Served with jeera rice, this bowl is as comforting and delicious as they come. Initiating food coma sequence.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">229</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Katsu Chicken and Thai Red Curry with Scallion Sticky Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Sliced panko crusted chicken strips with an aromatic Thai curry served with scallion sticky rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">309</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Street Style Sriracha Veg Chowmein</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Spicy paneer bites tossed in the famous fiery 'Sriracha' sauce with chopped chillis and peppers, served on a bed of wok tossed Hakka noodles.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">249</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Gunpowder Rice with Spicy Chicken Fry</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Chicken marinated and tossed in a spicy home made 'masala' mix, served with a fiery rice infused with gun powder and ghee. Chef's Special!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">259</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Sicilian Spaghetti Al Funghi</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A beauty from the cobble stoned aisles of Italy! Spaghetti tossed in a luscious herbed creamy cheese sauce cooked with mushroom and topped generously with parmesan shavings. Simple, delicious and definitely worth a try.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">279</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Hawker's Spicy Chicken Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Dig into this street style fried rice tossed with tender chunks of chicken and a medley of veggies along with aromatic Chinese spices. Deliciousness in every bite.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">225</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Teriyaki Chicken with Hakka Noddles</div>
                                          <div className="_2FMT0 _22D_E">MUST TRY<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Grilled chicken sauteed in a chef's special sweet and spicy teriyaki sauce, served with wok tossed Hakka noodles.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">249</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Spaghetti Aglio Olio</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic of the ages right from Naples. Spaghetti tossed with garlic, chilli flakes, olive oil, mushrooms, olives and sun dried tomatoes. Cooked to perfection and finished off with a sprinkle of aged Parmesan cheese.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">259</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Cajun Spiced Rice with Chicken Nuggets</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Classic from the city of New Orleans; crispy chicken nuggets layered on a bed of supremely comforting rice tossed with a medley of veggies and paprika, served with Chef's special secret sauce. A treat for your taste buds!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h343813699" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Weekly Specials</h2>
              <div className="Yu6Bn">9 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Amritsari Pindi Chole with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Boiled chickpeas when cooked in a onion tomato gravy with a host of local, aromatic spices and served alongside jeera rice is what we call "Authentic Dhaba Food At Its Best!".</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">219</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Butter Chicken Mac n Cheese</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A dish that marries the two classics - al dente macaroni and tender chicken chunks tossed in a creamy makhani sauce and finished off with parmesean shavings to seal the deal. Ultimate Comfort Food!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">255</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">BBQ Gobi Manchurian with Chilli Garlic Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A twist on the classic manchurian; batter fried cauliflower florets tossed in a flavorful smoky BBQ sauce. Served with an aromatic chilli garlic fried rice. Satisfaction = Infinity!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">235</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Exotic Veggies in Hunan Sauce with Burnt Garlic Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A medley of exotic veggies stir fried in a spicy hunan gravy made with chilli paste and dried peppers, to be relished with a portion of flavourful burnt garlic fried rice. Now we're talking!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Khubani Murgh with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Tender chunks of chicken cooked with dried apricots and aromatic spices, giving way to a fruity and flavoursome Kashmiri delicacy. Comes with cumin spiced rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">309</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Chilli Fish Cakes with Scallion Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A heaping bowl-o-yum of flavourful panko crusted fish cakes served along with a classic Kimchi salad, scallion rice and a fiery Schzewan sauce. Chef's Special!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Rajasthani Pyaaz Pakodi Sabzi with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Hails from the land of Rajasthan, a dish made with flavorful deep fried onion fritters soaked in a thick curd and besan gravy that is tempered with an assortment of whole spices. Served alongside a portion of jeera rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">149</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Kung Pao Potato with Hongkong Style Noodles</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic Sichuan inspired potato dish, wok tossed with a medley of colorful peppers and crunchy peanuts, served with Hong Kong style noodles. A sweet, savoury and fiery kick all in one!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">199</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Kadhai Paneer with Choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A zesty, spiced semi dry Indian curry packed with paneer, onions, bell peppers and cooked in a melody of Indian spices. Served with a side of matar pulao.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">259</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h2067071751" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Build Your Bowl</h2>
              <div className="Yu6Bn">8 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Palak Kofta Makhanwala with choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Soft and fluffy koftas made with spinach, paneer and potatoes, fried and simmered in a licious tomato-onion gravy with indian spices and served in matar pulao.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">229</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Chicken Kofta with Choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Minced chicken dumplings cooked in a classic tomato-onion gravy with a melange of aromatic spices and served alongside rice of your choice. A definate win-win!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">289</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Murgh Lababdar with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Tender pieces of boneless chicken cooked in a flavourful in-house Chef special gravy, served with classic cumin spiced long grain basmati rice</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">279</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Peri Peri Chicken with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">An irresistible combination of Portuguese flavours. Tender peri peri grilled chicken on a bed of rice of your choice, served with a portion of spicy peri peri sauce</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Butter Chicken with Choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Succulent grilled chicken cooked in an irresistibly rich and creamy sauce, served along with rice of your choice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">309</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Good ol' Rajma with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Classic comfort bowl consisting of red kidney beans cooked in a mildly spicy onion tomato masala gravy, served with choice of rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Awadhi Paneer with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh" ></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic from the Awadhi cuisine; tender cubes of paneer cooked in a rich tomato and yogurt gravy along with whole Indian spices. Served with choice of rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">255</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Methi Dal Fry with Choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Delicious and nutricious yellow lentils cooked with fresh, lush fenugreek leaves, and tempered with flavorful Indian spices. Served along withrice of your choice. Simple desi food in a new avatar.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h1300158763" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Hall of Fame</h2>
              <div className="Yu6Bn">9 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Chicken 65 with Chilli Garlic Fried Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A dish that needs no introduction, tender and juicy pieces of fried chicken bursting with flavours of South Indian spices and curry leaves. Served over a bed of chilli garlic fried rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">225</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Spaghetti Promodoro with Chicken Meatballs</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Give in to this bowl of Italian comfort food. Chicken meatballs served on a bed of classic spaghetti tossed in a tangy pomodoro sauce, garnished with parmesan shavings.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Italian Basil Spaghetti Classico</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">This well-loved Italian classic, made with al dente spaghetti tossed with tomatoes, fresh basil and finished off with aged parmesean shavings.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">209</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Paneer Makhani Biryani</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">We married the best of Dilli &amp; Hyderabad in this explosion of flavours. Butter Paneer meets its match with flavourful biryani rice, served with a tangy yogurt raita and pickled onions</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Spicy Thai Basil Chicken with Garlic Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">An abudance of fresh basil leaves joins succulent chunks of chicken with classic Thai flavoured fiery sauce for a decidedly spicy curry; served along with aromatic garlic rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">279</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Classic Mac &amp; Cheese</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Good 'ol American bowl of comfort. Creamy blend of aged cheese and macaroni, topped off with an herby thyme flavored crust. Dig in for deliciousness.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">229</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Double Egg Fried Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A medley of scrambled eggs and seasonal veggies wok tossed along with rice and aromatic Chinese spices. Eggztravaganza!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Texas BBQ Chicken with Seasoned Potatoes and Butter Parsley Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Spicy chicken marinated and cooked in a special barbecue sauce, served with seasoned potatoes and butter parsley rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">235</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_3Hy2E">+</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                      <div className="_1C1Fl">Customisable</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Naani ki Punjabi Kadhi Chawal</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Gram flour and onion fritters simmered in a comforting spiced yogurt based curry, served with cumin spiced long grain basmati rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h-1912591650" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Mini Bowls</h2>
              <div className="Yu6Bn">6 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Mini Punjabi Kadhi Chawal Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our comforting Naani Ki Punjabi Kadhi Chawal bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">99</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Mini Butter Chicken Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our bestseller Butter Chicken &amp; Jeera Rice Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">205</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Mini Peri Peri Chicken Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our bestseller Peri Peri Chicken &amp; Egg Corn Rice Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">185</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Mini Murgh Lababdar Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our Chef's special Murgh Lababdar with Matar Pulao.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">169</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Mini Rajma Chawal Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our comforting Rajma Chawal &amp; Jeera Rice Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">109</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Mini Paneer Butter Masala Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our popular Paneer Butter Masala &amp; Matar Pulao Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">149</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h1475821251" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Desserts</h2>
              <div className="Yu6Bn">7 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Angoori Rasmalai</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A traditional Bengali dessert that you can't miss. Soft and spongy cottage cheese dumplings slow cooked in a luscious whole milk gravy and finished off with nut shavings.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">59</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Badam Kesar Phirni</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A delectable classic from the North, creamy rice pudding cooked with saffron and finished off with almond shavings. Desi and delicious in every bite. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">59</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Gulab Jamun (1pc)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">These soft little pleasures soaked in rose and saffron flavoured sugar syrup and garnished with dry fruit shavings is what deliciousness is all about. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">45</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Kesariya Rasmalai</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Soft and spongy cottage cheese dumplings soaked in a dry fruit aced creamy saffron milk rabri. Got to love all things old school. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">49</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Monk's Tiramisu</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic Italian dessert pairing mascarpone cheese with homemade French biscuits soaked in a coffee and rum concoction. Classics never go out of fashion! Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">125</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Moongdal Halwa (90 grams)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A rich, sweet and warm halwa made with moong dal and homemade ghee will win your heart. Garnished with dry fruit shavings, this classic is not to be missed. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">89</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Belgian Fudge Brownie</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Decadent, fudgy and rich! Dig into the brownie square and let the lush chocolate hit your taste buds with every bite. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">95</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h98949598" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Beverages</h2>
              <div className="Yu6Bn">5 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Diet Coke Can (330 ml)</div>
                                      </div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">60</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Raw Pomegranate (250 ml)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Lowers choleserol, improves blood flow and is rich in iron.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">150</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Coke Tin (330 ml)</div>
                                      </div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">60</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9">
                                      <div className="_1RPOp">ADD</div>
                                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Raw Sugarcane (250 ml)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Nature's freshest energy elixir juiced hygenically just for you.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">80</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 8 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Raw Guava (250 ml)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Superfruit Guava blended with a hint of spice and everything nice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">80</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div id="h-1042850843" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Breakfast</h2>
              <div className="Yu6Bn">10 items</div>
              <div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Amma's Classic Rawa Upma</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">No frills, no fancy ingredients and yet a traditional South Indian style breakfast which tastes divine! Fluffy sooji, loaded with cashews and tempered to perfection; served with coconut chutney on the side. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">69</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Kaapi Chia Granola Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Creamy yogurt spiked with good 'ol filter coffee and honey, topped with a medley of seasonal fruits, chia seeds, nuts and chef's special crunchy museli. Mornings just got fancier!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">129</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Gunpowder Idli Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Gun powder spiced bite sized steamed idlis served with freshly made coconut chutney. Breakfast woes sorted. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">75</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Masala Anda Bhurji with Maska Pav</div>
                                          <div className="_2FMT0 _22D_E">MUST TRY<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Scrambled free range eggs tossed with assorted peppers, onion and tomatoes in a chef's special in house Indian spice mix. Served with pillowy buttered pavs on the side. Your new breakfast bae is here! Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">135</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Punjabi Paneer Bhurji with Makhan Wala Pav</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Soft scrambled paneer tossed with assorted peppers, onion and tomatoes in a chef's special in house Indian spice mix. Served with pillowy buttered pavs on the side. Time to enjoy this new love affair with paneer. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">South Indian Dahi Vada</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Lentil dumpling dunked in a bowl of chilled whipped yogurt, tempered with mustard seeds, curry leaves, garnished with Indian masalas, and crunchy sev. Yummy breakfast every morning. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">75</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">The Well Dressed Parfait Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Luscious blueberry and honey yogurt topped with a hearty in-house granola mix, layered with a medley of fruits, finished off with berries and nut shavings. A little reward to kick off your morning!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">125</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Button Idli with Sambhar</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Fluffy, mouth melting steamed mini idlis dunked in a delicious and flavor packed bowl of sambhar. The most delicious way to kick off your day. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">115</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Namma Bengaluru Sambhar Vada (1 pc)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A bowl of irresistable crispy hot vada dipped in delicious sambhar made from scratch. A bowl worth a try. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">65</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemscope="" itemtype="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemprop="name">Pongal</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic South Indian savory porridge laced with black pepper, tempered spices and homemade ghee, served along with coconut chutney. Healthy, hearty and delicious! Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">75</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    )
  }
}
