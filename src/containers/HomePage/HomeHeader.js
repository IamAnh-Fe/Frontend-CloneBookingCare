import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from '../../assets/logo.svg';
import {FormattedMessage} from 'react-intj'

class HomeHeader extends Component {
  render() {
    return(
      <React.Fragment>

      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i className="fas fa-bars"></i>
            <img className="header-logo" src={logo}></img>

          </div>
          <div className="center-content">
            <div className="child-content">
              <div><b><FormattedMessage id="homeheader.speciality"/></b></div>
              <div className="subs-title"><FormattedMessage id="homeheader.searchdoctor/></div>

            </div>
            
          <div className="child-content">
          <div><b><FormattedMessage id="homeheader.health-facility"/></b></div>
          <div className="subs-title"><FormattedMessage id="homeheader.select-room/></div>
            
          </div>
          <div className="child-content">
          <div><b><FormattedMessage id="homeheader.doctor"/></b></div>
          <div className="subs-title"><FormattedMessage id="homeheader.select-doctor/></div>
            
          </div>
          <div className="child-content">
          <div><b><FormattedMessage id="homeheader.fee"/></b></div>
          <div className="subs-title"><FormattedMessage id="homeheader.check-health/></div>
            
          </div>
        </div>
        <div className="right-content">
            <div className="support"><i className="fas fa-question-circle"></i>
            <FormattedMessage id="homeheader.support"/>
            </div>
            <div className="language-vi">VN</div>
            <div className="language-en">EN</div>

            
          </div>
          </div>

      </div>
      <div className="home-header-banner">
        <div className="content-up">
          <div className="title1">NỀN TẢNG Y TẾ</div>
          <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Tim chuyên khoa khám bệnh" />
          </div>


        </div>
        <div className="content-down">
          <div className="options">
            <div className="options-child">

            <div className="icon-child"><i className="fas fa-hospital"></i></div>
            <div className="text-child">Khám chuyên khoa</div>
            </div>
            <div className="options-child">

            <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
            <div className="text-child">Khám từ xa</div>
            </div>
            <div className="options-child">

            <div className="icon-child"><i className="fas fa-procedures"></i></div>
            <div className="text-child">Khám tổng quát</div>
            </div>
            <div className="options-child">

            <div className="icon-child"><i className="fas fa-microscope"></i></div>
            <div className="text-child">Xét nghiệm y học</div>
            </div>
            <div className="options-child">

            <div className="icon-child"><i className="fas fa-tooth"></i></div>
            <div className="text-child">Khám nha khoa</div>
            </div>
          </div>
        </div>
      </div>
</React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);