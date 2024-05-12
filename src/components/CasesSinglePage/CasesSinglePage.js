import React from 'react'
import './CasesSinglePage.scss';
import PartnerSlider from '../PartnerSection/PartnerSlider';
import ThemeBtn from '../ThemeBtn/ThemeBtn';


import img from '../../img/cases-img2.png';
import justiceImg from '../../img/justice-img.png';
import HeaderInner from '../Header/HeaderInner';
import { Link } from 'react-router-dom';


const CasesSinglePage = () => {
  return (
    <>
        <HeaderInner 
          WrapperHeading="Car Accident"
        />

        <section className='Detail'>
          <div className='container'>
            <div className='img_otr'>
              <img className='img' src={img} alt='img'  />
            </div>
            <div className='row row_custom'>
              <div className='col-lg-8 col_content_otr'>
                <div className='col_content_inr'>
                  <div className='content_otr'>
                    <h2 className='heading heading-h2'>About The Case</h2>
                    <p className='desc heading-m'>
                      As one of the most renowned injury law firms throughout the nation, we have helped countless maritime workers and their families go up against the largest offshore companies and win. Although we are located in Brooklyn, our maritime lawyers are proud to help the injured throughout the nation, including workers who were working in foreign waters at the time of the incident. The occupants were transported via ambulance to Advocate Condell Medical Center and treated for various and severe injuries to their head, neck, back, shoulders, and legs. These injuries required treatment with orthopedic specialists. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. 
                    </p>
                  </div>
                  <div className='content_otr'>
                    <h2 className='heading heading-h2'>Clients Need</h2>
                    <p className='heading heading-m'>
                      Sometimes determining the driver at fault after an accident can come into question, which can be a frustrating experience, when your main concern should be healing. If you find yourself in this situation. Recently, a woman was walking down a flight of stairs when they suddenly collapsed. This led to her falling two stories and suffering facial abrasions, pulmonary contusions, and other back, neck, head, and right shoulder injuries. Keep yourself up-to-date on your area of law. Be aware of new developments, as laws and rules often change based on the situation and new cases are being decided every day. Never judge, just listen and advise. Even if your client has made a bad decision, which he or she will undoubtedly do at some point throughout the course of your representation.
                    </p>
                  </div>
                  <div className='content_otr'>
                    <h2 className='heading heading-h2'>Challenges In The Case</h2>
                    <p className='desc heading-m'>
                      Appropriately empower dynamic leadership skills after business portals. Globally my interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.
                    </p>
                  </div>
                  <ul className='list_ul'>
                    <li className='list_li'>
                      <div className='dot'></div>
                      <p className='list_text heading-m'>
                        Dynamically target high-payoff intellectual capital for customized
                      </p>
                    </li>
                    <li className='list_li'>
                      <div className='dot'></div>
                      <p className='list_text heading-m'>
                        Interactively procrastinate high-payoff content
                      </p>
                    </li>
                    <li className='list_li'>
                      <div className='dot'></div>
                      <p className='list_text heading-m'>
                        Credibly reinter mediate backend ideas for cross-platform models
                      </p>
                    </li>
                  </ul>
                  <div className='content_otr'>
                    <h2 className='heading heading-h2'>How Our Client Won</h2>
                    <p className='desc heading-m'>
                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Being untruthful will get you nowhere and give you a reputation of dishonesty. Plus, your clients will not trust you, which does not translate into repeat business from clients.
                    </p>
                  </div>
                  <ul className='list2_ul'>
                    <li className='list2_li'>
                      <p className='list2_text heading-m'>
                        1. It brings the right people together with all the right information and tools to get work done
                      </p>
                    </li>
                    <li className='list2_li'>
                      <p className='list2_text heading-m'>
                      2.  We provide operational efficiency, data security, and flexible scale
                      </p>
                    </li>
                    <li className='list2_li'>
                      <p className='list2_text heading-m'>
                        3. Your best work, together in one package that works seamlessly from your computer
                      </p>
                    </li>
                    <li className='list2_li'>
                      <p className='list2_text heading-m'>
                        4. Delivers the tools you need to save time Improve field performance always
                      </p>
                    </li>
                  </ul>
                  <div className='justice_main'>
                    <div className='img_otr'>
                      <img className='justice_img' src={justiceImg} alt='Justice Img' />
                    </div>
                    <p className='heading heading-mb'>Finally Justice Won</p>
                  </div>
                  <div className='content_otr'>
                    <h2 className='heading heading-h2'>Overview:</h2>
                    <p className='desc heading-m'>
                      Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring interoperable internal or “organic” sources.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col_box_otr'>
                <div className='col_box_inr'>
                  <div className='box_otr'>
                    <div className='Detailbox_inr'>
                      <h2 className='heading heading-h2'>Case Details</h2>
                      <ul className='text_ul'>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Case Type</h4>
                          <p className='text heading-m'>Car Accident</p>
                        </li>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Client</h4>
                          <p className='text heading-m'>Robert Symon</p>
                        </li>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Date</h4>
                          <p className='text heading-m'>20 January 2021</p>
                        </li>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Service Value</h4>
                          <p className='text heading-m'>$5500</p>
                        </li>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Law Type</h4>
                          <p className='text heading-m'>Civil  Cases</p>
                        </li>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Case Status</h4>
                          <p className='text heading-m'>Won</p>
                        </li>
                        <li className='text_li'>
                          <h4 className='heading heading-h4'>Time Frame:</h4>
                          <p className='text heading-m'>1 Month, 5 Days</p>
                        </li>
                      </ul>
                      <div className='result_main'>
                        <div className='result_otr'>
                          <div className='result_inr'>
                            <h4 className='text heading-h4'>Result</h4>
                            <h2 className='heading heading-h2'>$12000</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='box_otr'>
                    <div className='experience_inr'>
                    <h2 className='heading heading-h2'>45+ Years</h2>
                      <p className='text heading-lb'>OF NYC LEGAL EXPERIENCE</p>
                      <p className='desc heading-m'>
                        $18 Million settlement obtained for paralyzed dockworker in  local counsel in Shreveport, Louisiana to  badly young man.
                      </p>
                      <Link className='action_otr' to='/about'>
                        <ThemeBtn 
                          ButtonClass="secondary_btn"
                          ButtonText="About  Us"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className='box_otr'>
                    <div className='CaseResult_inr'>
                      <h2 className='heading heading-h2'>$35Million</h2>
                      <p className='text heading-lb'>RECOVERED FOR OUR CLIENTS</p>
                      <p className='desc heading-m'>
                        $18 Million settlement obtained for paralyzed dockworker in  local counsel in Shreveport, Louisiana to  badly young man.
                      </p>
                      <div className='action_otr'>
                        <ThemeBtn 
                          ButtonClass="tertiary_btn"
                          ButtonText="View Case Result"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PartnerSlider />
        
    </>
  )
}

export default CasesSinglePage
