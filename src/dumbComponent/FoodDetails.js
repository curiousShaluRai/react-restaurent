import React, { Component } from "react"
import FoodTypes from "./FoodTypes"
import RecommendedFood from './RecommendedFood'
import BlastFromPast from "./BlastFromPast"
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
                <RecommendedFood restaurent={restaurent}/>
              </div>
          </div>
          <div id="h922432409" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Blast From The Past</h2>
              <div className="Yu6Bn">10 items</div>
                <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
               	<BlastFromPast />
              </div>
              <div>
              </div>
          </div>
          <div id="h343813699" className="_2dS-v">
              <h2 className="M_o7R _27PKo">Weekly Specials</h2>
              <div className="Yu6Bn">9 items</div>
              <div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Amritsari Pindi Chole with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Boiled chickpeas when cooked in a onion tomato gravy with a host of local, aromatic spices and served alongside jeera rice is what we call "Authentic Dhaba Food At Its Best!".</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">219</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Butter Chicken Mac n Cheese</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A dish that marries the two classics - al dente macaroni and tender chicken chunks tossed in a creamy makhani sauce and finished off with parmesean shavings to seal the deal. Ultimate Comfort Food!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">255</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">BBQ Gobi Manchurian with Chilli Garlic Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A twist on the classic manchurian; batter fried cauliflower florets tossed in a flavorful smoky BBQ sauce. Served with an aromatic chilli garlic fried rice. Satisfaction = Infinity!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">235</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Exotic Veggies in Hunan Sauce with Burnt Garlic Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A medley of exotic veggies stir fried in a spicy hunan gravy made with chilli paste and dried peppers, to be relished with a portion of flavourful burnt garlic fried rice. Now we're talking!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Khubani Murgh with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Tender chunks of chicken cooked with dried apricots and aromatic spices, giving way to a fruity and flavoursome Kashmiri delicacy. Comes with cumin spiced rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">309</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Chilli Fish Cakes with Scallion Fried Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A heaping bowl-o-yum of flavourful panko crusted fish cakes served along with a classic Kimchi salad, scallion rice and a fiery Schzewan sauce. Chef's Special!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Rajasthani Pyaaz Pakodi Sabzi with Jeera Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Hails from the land of Rajasthan, a dish made with flavorful deep fried onion fritters soaked in a thick curd and besan gravy that is tempered with an assortment of whole spices. Served alongside a portion of jeera rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">149</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Kung Pao Potato with Hongkong Style Noodles</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic Sichuan inspired potato dish, wok tossed with a medley of colorful peppers and crunchy peanuts, served with Hong Kong style noodles. A sweet, savoury and fiery kick all in one!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">199</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Kadhai Paneer with Choice of Rice</div>
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
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Palak Kofta Makhanwala with choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Soft and fluffy koftas made with spinach, paneer and potatoes, fried and simmered in a licious tomato-onion gravy with indian spices and served in matar pulao.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">229</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Chicken Kofta with Choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Minced chicken dumplings cooked in a classic tomato-onion gravy with a melange of aromatic spices and served alongside rice of your choice. A definate win-win!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">289</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Murgh Lababdar with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Tender pieces of boneless chicken cooked in a flavourful in-house Chef special gravy, served with classic cumin spiced long grain basmati rice</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">279</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Peri Peri Chicken with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">An irresistible combination of Portuguese flavours. Tender peri peri grilled chicken on a bed of rice of your choice, served with a portion of spicy peri peri sauce</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Butter Chicken with Choice of Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Succulent grilled chicken cooked in an irresistibly rich and creamy sauce, served along with rice of your choice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">309</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Good ol' Rajma with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Classic comfort bowl consisting of red kidney beans cooked in a mildly spicy onion tomato masala gravy, served with choice of rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Awadhi Paneer with Choice of Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh" ></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic from the Awadhi cuisine; tender cubes of paneer cooked in a rich tomato and yogurt gravy along with whole Indian spices. Served with choice of rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">255</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Methi Dal Fry with Choice of Rice</div>
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
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Chicken 65 with Chilli Garlic Fried Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A dish that needs no introduction, tender and juicy pieces of fried chicken bursting with flavours of South Indian spices and curry leaves. Served over a bed of chilli garlic fried rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">225</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Spaghetti Promodoro with Chicken Meatballs</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Give in to this bowl of Italian comfort food. Chicken meatballs served on a bed of classic spaghetti tossed in a tangy pomodoro sauce, garnished with parmesan shavings.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Italian Basil Spaghetti Classico</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">This well-loved Italian classic, made with al dente spaghetti tossed with tomatoes, fresh basil and finished off with aged parmesean shavings.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">209</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Paneer Makhani Biryani</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">We married the best of Dilli &amp; Hyderabad in this explosion of flavours. Butter Paneer meets its match with flavourful biryani rice, served with a tangy yogurt raita and pickled onions</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">269</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Spicy Thai Basil Chicken with Garlic Rice</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">An abudance of fresh basil leaves joins succulent chunks of chicken with classic Thai flavoured fiery sauce for a decidedly spicy curry; served along with aromatic garlic rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">279</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Classic Mac &amp; Cheese</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Good 'ol American bowl of comfort. Creamy blend of aged cheese and macaroni, topped off with an herby thyme flavored crust. Dig in for deliciousness.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">229</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Double Egg Fried Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A medley of scrambled eggs and seasonal veggies wok tossed along with rice and aromatic Chinese spices. Eggztravaganza!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Texas BBQ Chicken with Seasoned Potatoes and Butter Parsley Rice</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Spicy chicken marinated and cooked in a special barbecue sauce, served with seasoned potatoes and butter parsley rice.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">235</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Naani ki Punjabi Kadhi Chawal</div>
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
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Mini Punjabi Kadhi Chawal Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our comforting Naani Ki Punjabi Kadhi Chawal bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">99</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Mini Butter Chicken Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our bestseller Butter Chicken &amp; Jeera Rice Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">205</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Mini Peri Peri Chicken Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our bestseller Peri Peri Chicken &amp; Egg Corn Rice Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">185</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Mini Murgh Lababdar Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our Chef's special Murgh Lababdar with Matar Pulao.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">169</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Mini Rajma Chawal Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Mini version of our comforting Rajma Chawal &amp; Jeera Rice Bowl.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">109</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Mini Paneer Butter Masala Bowl</div>
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
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Angoori Rasmalai</div>
                                          <div className="_2FMT0 _22D_E">BESTSELLER<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A traditional Bengali dessert that you can't miss. Soft and spongy cottage cheese dumplings slow cooked in a luscious whole milk gravy and finished off with nut shavings.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">59</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Badam Kesar Phirni</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A delectable classic from the North, creamy rice pudding cooked with saffron and finished off with almond shavings. Desi and delicious in every bite. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">59</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Gulab Jamun (1pc)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">These soft little pleasures soaked in rose and saffron flavoured sugar syrup and garnished with dry fruit shavings is what deliciousness is all about. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">45</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Kesariya Rasmalai</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Soft and spongy cottage cheese dumplings soaked in a dry fruit aced creamy saffron milk rabri. Got to love all things old school. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">49</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Monk's Tiramisu</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A classic Italian dessert pairing mascarpone cheese with homemade French biscuits soaked in a coffee and rum concoction. Classics never go out of fashion! Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">125</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Moongdal Halwa (90 grams)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A rich, sweet and warm halwa made with moong dal and homemade ghee will win your heart. Garnished with dry fruit shavings, this classic is not to be missed. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">89</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Belgian Fudge Brownie</div>
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
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Diet Coke Can (330 ml)</div>
                                      </div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">60</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Raw Pomegranate (250 ml)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Lowers choleserol, improves blood flow and is rich in iron.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">150</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Coke Tin (330 ml)</div>
                                      </div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">60</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
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
                                          <div className="jTy8b" itemProp="name">Raw Sugarcane (250 ml)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Nature's freshest energy elixir juiced hygenically just for you.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">80</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 8 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Raw Guava (250 ml)</div>
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
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Amma's Classic Rawa Upma</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">No frills, no fancy ingredients and yet a traditional South Indian style breakfast which tastes divine! Fluffy sooji, loaded with cashews and tempered to perfection; served with coconut chutney on the side. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">69</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Kaapi Chia Granola Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Creamy yogurt spiked with good 'ol filter coffee and honey, topped with a medley of seasonal fruits, chia seeds, nuts and chef's special crunchy museli. Mornings just got fancier!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">129</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Gunpowder Idli Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Gun powder spiced bite sized steamed idlis served with freshly made coconut chutney. Breakfast woes sorted. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">75</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Masala Anda Bhurji with Maska Pav</div>
                                          <div className="_2FMT0 _22D_E">MUST TRY<span className="rZ-gh"></span></div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Scrambled free range eggs tossed with assorted peppers, onion and tomatoes in a chef's special in house Indian spice mix. Served with pillowy buttered pavs on the side. Your new breakfast bae is here! Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">135</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Punjabi Paneer Bhurji with Makhan Wala Pav</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Soft scrambled paneer tossed with assorted peppers, onion and tomatoes in a chef's special in house Indian spice mix. Served with pillowy buttered pavs on the side. Time to enjoy this new love affair with paneer. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">165</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">South Indian Dahi Vada</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Lentil dumpling dunked in a bowl of chilled whipped yogurt, tempered with mustard seeds, curry leaves, garnished with Indian masalas, and crunchy sev. Yummy breakfast every morning. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">75</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">The Well Dressed Parfait Bowl</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Luscious blueberry and honey yogurt topped with a hearty in-house granola mix, layered with a medley of fruits, finished off with berries and nut shavings. A little reward to kick off your morning!</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">125</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Button Idli with Sambhar</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">Fluffy, mouth melting steamed mini idlis dunked in a delicious and flavor packed bowl of sambhar. The most delicious way to kick off your day. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">115</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Namma Bengaluru Sambhar Vada (1 pc)</div>
                                      </div>
                                      <div className="_2aOqz _1xb2E">A bowl of irresistable crispy hot vada dipped in delicious sambhar made from scratch. A bowl worth a try. Good for 1.</div>
                                      <div className="_12lpv MwITc"><span className="bQEAj">65</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="_2wg_t" itemScope="" itemType="http://schema.org/MenuItem">
                      <div><span className="icon-foodSymbol tKOaB _27EeV _3x58u"></span>
                          <div className="GaqmA">
                              <div>
                                  <div className="_1G3G4 _3L1X9 _3a8rI">
                                      <div className="_3z9jt">Unavailable</div>
                                      <div className="_8NpSL">Next available at 7:30 am, tomorrow</div>
                                  </div>
                                  <div className="_19GqV">
                                      <div className="_2Gojq">
                                          <div className="jTy8b" itemProp="name">Pongal</div>
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
